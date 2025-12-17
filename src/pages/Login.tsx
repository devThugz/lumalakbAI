import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserIcon, LockIcon, EyeIcon, EyeOffIcon, ShieldIcon, MailIcon, HomeIcon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Logo from '../components/common/Logo';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [loginMode, setLoginMode] = useState<'user' | 'admin'>('user');
  const {
    login,
    user,
    loading,
    error
  } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    // Check if user is already logged in
    if (user) {
      navigate('/');
    }
    // Check for password reset success message
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get('reset') === 'true') {
      setSuccessMessage('Password reset email sent. Please check your inbox.');
    }
  }, [user, navigate, location]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptTerms) {
      return;
    }
    if (loginMode === 'admin') {
      await login(email, password, rememberMe, true);
    } else {
      await login(email, password, rememberMe);
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
          <p className="text-gray-400 mt-2">
            {loginMode === 'admin' ? 'Admin Access Portal' : 'Sign in to your account'}
          </p>
        </div>
        <div className="mb-6 flex rounded-md overflow-hidden shadow-md">
          <button className={`flex-1 py-3 text-center text-sm font-medium ${loginMode === 'user' ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white' : 'bg-gray-700 text-gray-300'} transition-all duration-200`} onClick={() => setLoginMode('user')}>
            <UserIcon className="h-4 w-4 inline-block mr-1" />
            User Login
          </button>
          <button className={`flex-1 py-3 text-center text-sm font-medium ${loginMode === 'admin' ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white' : 'bg-gray-700 text-gray-300'} transition-all duration-200`} onClick={() => setLoginMode('admin')}>
            <ShieldIcon className="h-4 w-4 inline-block mr-1" />
            Admin Login
          </button>
        </div>
        {successMessage && <div className="bg-green-900/50 border border-green-500/50 text-green-300 px-4 py-3 rounded-lg mb-6">
            {successMessage}
          </div>}
        {error && <div className="bg-red-900/50 border border-red-500/50 text-red-300 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>}
        <form onSubmit={handleSubmit} className="space-y-6">
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
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} className="h-4 w-4 text-teal-500 focus:ring-teal-500 border-gray-600 rounded bg-gray-700" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <Link to="/forgot-password" className="font-medium text-teal-400 hover:text-teal-300 transition-colors">
                Forgot password?
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <input id="terms" name="terms" type="checkbox" checked={acceptTerms} onChange={() => setAcceptTerms(!acceptTerms)} className="h-4 w-4 text-teal-500 focus:ring-teal-500 border-gray-600 rounded bg-gray-700" required />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-300">
              I accept the{' '}
              <Link to="/terms" className="text-teal-400 hover:text-teal-300 transition-colors">
                Terms and Conditions
              </Link>
            </label>
          </div>
          <div>
            <button type="submit" disabled={loading || !acceptTerms} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-75 disabled:cursor-not-allowed transition-colors duration-200 shadow-lg shadow-teal-500/50">
              {loading ? <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </> : 'Sign in'}
            </button>
          </div>
          {loginMode === 'user' && <div className="mt-4 text-center">
              <p className="text-sm text-gray-400">
                Don't have an account?{' '}
                <Link to="/register" className="font-medium text-teal-400 hover:text-teal-300 transition-colors">
                  Sign up
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
export default Login;