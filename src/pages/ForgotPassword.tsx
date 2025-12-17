import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MailIcon, ArrowLeftIcon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Logo from '../components/common/Logo';
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const {
    forgotPassword,
    loading,
    error
  } = useAuth();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await forgotPassword(email);
  };
  return <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex flex-col justify-center items-center p-4">
      <div className="max-w-md w-full bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-gray-700/50">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-3">
            <Logo size="lg" />
          </div>
          <p className="text-gray-400 mt-2">Reset your password</p>
        </div>
        {error && <div className="bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>}
        <p className="text-gray-300 mb-6">
          Enter your email address and we'll send you a link to reset your
          password.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MailIcon className="h-5 w-5 text-gray-500 group-hover:text-blue-400 transition-colors" />
              </div>
              <input id="email" name="email" type="email" required value={email} onChange={e => setEmail(e.target.value)} className="bg-gray-700/70 block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-md text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" placeholder="you@example.com" />
            </div>
          </div>
          <div>
            <button type="submit" disabled={loading} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-75 disabled:cursor-not-allowed transition-colors duration-200">
              {loading ? <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </> : 'Send reset link'}
            </button>
          </div>
          <div className="mt-4 text-center">
            <Link to="/login" className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
              <ArrowLeftIcon className="h-4 w-4 mr-1" />
              Back to login
            </Link>
          </div>
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
export default ForgotPassword;