import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserIcon, LockIcon, MailIcon, EyeIcon, EyeOffIcon, UserCircleIcon, BuildingIcon, MapPinIcon, PhoneIcon, UploadIcon, XIcon, HomeIcon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Logo from '../components/common/Logo';
type UserRole = 'traveller' | 'investor' | 'tourspot';
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState<UserRole>('traveller');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [step, setStep] = useState(1);
  const {
    register,
    user,
    loading,
    error
  } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    // Check if user is already logged in
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);
    // Validate passwords match
    if (password !== confirmPassword) {
      setValidationError('Passwords do not match');
      return;
    }
    // Validate password strength (simple validation)
    if (password.length < 6) {
      setValidationError('Password must be at least 6 characters long');
      return;
    }
    // In a real app, you would upload the photo and get a URL
    // For now, we'll just pass the registration data without the photo
    await register(name, email, password, role, acceptTerms);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPhotoFile(file);
      // Create a preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const removePhoto = () => {
    setPhotoFile(null);
    setPhotoPreview(null);
  };
  const nextStep = () => {
    if (step === 1) {
      // Validate first step
      if (!name || !email || !password || !confirmPassword) {
        setValidationError('Please fill in all required fields');
        return;
      }
      if (password !== confirmPassword) {
        setValidationError('Passwords do not match');
        return;
      }
      if (password.length < 6) {
        setValidationError('Password must be at least 6 characters long');
        return;
      }
      setValidationError(null);
      setStep(2);
    }
  };
  const prevStep = () => {
    setStep(1);
    setValidationError(null);
  };
  return <div className="min-h-screen bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900 flex flex-col justify-center items-center p-4">
      {/* Home Button */}
      <Link to="/" className="fixed top-4 left-4 sm:top-6 sm:left-6 flex items-center space-x-2 px-3 py-2 sm:px-4 sm:py-2 rounded-xl bg-gray-800/80 backdrop-blur-sm border border-teal-500/30 text-teal-400 hover:bg-gray-700/80 hover:border-teal-500/50 transition-all shadow-lg hover:shadow-teal-500/30 z-10">
        <HomeIcon className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="text-sm sm:text-base font-medium">Home</span>
      </Link>
      <div className="max-w-md w-full bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-teal-500/30">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-3">
            <Logo size="lg" />
          </div>
          <p className="text-gray-400 mt-2">Create a new account</p>
        </div>
        {(error || validationError) && <div className="bg-red-900/50 border border-red-500/50 text-red-300 px-4 py-3 rounded-lg mb-6">
            {error || validationError}
          </div>}
        <div className="mb-6">
          <div className="flex justify-between items-center">
            <div className={`flex-1 text-center pb-2 border-b-2 ${step === 1 ? 'border-teal-500 text-teal-400' : 'border-gray-700 text-gray-500'}`}>
              <span className="text-sm font-medium">Account Details</span>
            </div>
            <div className={`flex-1 text-center pb-2 border-b-2 ${step === 2 ? 'border-orange-500 text-orange-400' : 'border-gray-700 text-gray-500'}`}>
              <span className="text-sm font-medium">Profile Setup</span>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          {step === 1 && <>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <UserIcon className="h-5 w-5 text-gray-500 group-hover:text-teal-400 transition-colors" />
                  </div>
                  <input id="name" name="name" type="text" required value={name} onChange={e => setName(e.target.value)} className="bg-gray-700/70 block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-md text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200" placeholder="John Doe" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MailIcon className="h-5 w-5 text-gray-500 group-hover:text-teal-400 transition-colors" />
                  </div>
                  <input id="email" name="email" type="email" required value={email} onChange={e => setEmail(e.target.value)} className="bg-gray-700/70 block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-md text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200" placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LockIcon className="h-5 w-5 text-gray-500 group-hover:text-teal-400 transition-colors" />
                  </div>
                  <input id="password" name="password" type={showPassword ? 'text' : 'password'} required value={password} onChange={e => setPassword(e.target.value)} className="bg-gray-700/70 block w-full pl-10 pr-10 py-3 border border-gray-600 rounded-md text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200" placeholder="••••••••" />
                  <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-teal-400 transition-colors">
                    {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                  </button>
                </div>
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                  Confirm Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LockIcon className="h-5 w-5 text-gray-500 group-hover:text-teal-400 transition-colors" />
                  </div>
                  <input id="confirmPassword" name="confirmPassword" type={showConfirmPassword ? 'text' : 'password'} required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="bg-gray-700/70 block w-full pl-10 pr-10 py-3 border border-gray-600 rounded-md text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200" placeholder="••••••••" />
                  <button type="button" onClick={toggleConfirmPasswordVisibility} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-teal-400 transition-colors">
                    {showConfirmPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                  </button>
                </div>
              </div>
              <div className="pt-4">
                <button type="button" onClick={nextStep} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200 shadow-lg shadow-teal-500/50">
                  Continue
                </button>
              </div>
            </>}
          {step === 2 && <>
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-2">
                  Account Type
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <BuildingIcon className="h-5 w-5 text-gray-500 group-hover:text-orange-400 transition-colors" />
                  </div>
                  <select id="role" name="role" value={role} onChange={e => setRole(e.target.value as UserRole)} className="bg-gray-700/70 block w-full pl-10 py-3 px-3 border border-gray-600 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200">
                    <option value="traveller">Traveller</option>
                    <option value="investor">Investor</option>
                    <option value="tourspot">Tour Spot Owner</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone (Optional)
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <PhoneIcon className="h-5 w-5 text-gray-500 group-hover:text-orange-400 transition-colors" />
                  </div>
                  <input id="phone" name="phone" type="tel" value={phone} onChange={e => setPhone(e.target.value)} className="bg-gray-700/70 block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-md text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200" placeholder="+1 (555) 123-4567" />
                </div>
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-2">
                  Location (Optional)
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPinIcon className="h-5 w-5 text-gray-500 group-hover:text-orange-400 transition-colors" />
                  </div>
                  <input id="location" name="location" type="text" value={location} onChange={e => setLocation(e.target.value)} className="bg-gray-700/70 block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-md text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200" placeholder="City, Country" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Profile Photo (Optional)
                </label>
                <div className="mt-1 flex items-center justify-center">
                  {photoPreview ? <div className="relative">
                      <img src={photoPreview} alt="Profile preview" className="h-24 w-24 rounded-full object-cover border-2 border-orange-500" />
                      <button type="button" onClick={removePhoto} className="absolute -top-2 -right-2 bg-red-600 rounded-full p-1 text-white hover:bg-red-700 transition-colors">
                        <XIcon className="h-4 w-4" />
                      </button>
                    </div> : <div className="flex flex-col items-center">
                      <div className="h-24 w-24 rounded-full bg-gray-700 flex items-center justify-center border-2 border-dashed border-gray-600 hover:border-orange-500 transition-colors">
                        <UserCircleIcon className="h-16 w-16 text-gray-500" />
                      </div>
                      <label htmlFor="photo-upload" className="mt-2 cursor-pointer bg-gray-700 hover:bg-gray-600 text-gray-300 py-2 px-3 rounded-md text-sm flex items-center transition-colors">
                        <UploadIcon className="h-4 w-4 mr-1" />
                        Upload Photo
                        <input id="photo-upload" name="photo" type="file" accept="image/*" onChange={handlePhotoChange} className="hidden" />
                      </label>
                    </div>}
                </div>
              </div>
              <div className="flex items-center">
                <input id="terms" name="terms" type="checkbox" checked={acceptTerms} onChange={() => setAcceptTerms(!acceptTerms)} className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-600 rounded bg-gray-700" required />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-300">
                  I accept the{' '}
                  <Link to="/terms" className="text-orange-400 hover:text-orange-300 transition-colors">
                    Terms and Conditions
                  </Link>
                </label>
              </div>
              <div className="flex space-x-3 pt-4">
                <button type="button" onClick={prevStep} className="flex-1 py-3 px-4 border border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-300 bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200">
                  Back
                </button>
                <button type="submit" disabled={loading || !acceptTerms} className="flex-1 flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-75 disabled:cursor-not-allowed transition-colors duration-200 shadow-lg shadow-orange-500/50">
                  {loading ? <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating...
                    </> : 'Create Account'}
                </button>
              </div>
            </>}
          {step === 2 && <div className="mt-4 text-center">
              <p className="text-sm text-gray-400">
                Already have an account?{' '}
                <Link to="/login" className="font-medium text-orange-400 hover:text-orange-300 transition-colors">
                  Sign in
                </Link>
              </p>
            </div>}
        </form>
      </div>
      <footer className="mt-8 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} LumalakbAI. All rights reserved.</p>
        <p className="mt-1">
          <Link to="/privacy" className="text-gray-500 hover:text-gray-400 mx-2 transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-gray-500 hover:text-gray-400 mx-2 transition-colors">
            Terms of Service
          </Link>
          <Link to="/contact" className="text-gray-500 hover:text-gray-400 mx-2 transition-colors">
            Contact Us
          </Link>
        </p>
      </footer>
    </div>;
};
export default Register;