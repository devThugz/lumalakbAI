import React, { useEffect, useState, createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
type UserRole = 'traveller' | 'investor' | 'tourspot' | 'admin';
interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  photoUrl?: string;
}
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, remember: boolean, isAdmin?: boolean) => Promise<void>;
  register: (name: string, email: string, password: string, role: UserRole, acceptTerms: boolean) => Promise<void>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<void>;
  loading: boolean;
  error: string | null;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
export const AuthProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  // Check for saved user on initial load
  useEffect(() => {
    const savedUser = localStorage.getItem('tourigo_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);
  // Mock login function - in a real app, this would make an API call
  const login = async (email: string, password: string, remember: boolean, isAdmin = false) => {
    setLoading(true);
    setError(null);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Admin login
      if (isAdmin) {
        if (email === 'jkarl@gmail.com' && password === '123456') {
          const userData: User = {
            id: '1',
            name: 'Karl Johnson',
            email: 'jkarl@gmail.com',
            role: 'admin',
            photoUrl: 'https://randomuser.me/api/portraits/men/32.jpg'
          };
          setUser(userData);
          if (remember) {
            localStorage.setItem('tourigo_user', JSON.stringify(userData));
          }
          navigate('/admin');
          return;
        } else {
          setError('Invalid admin credentials');
          setLoading(false);
          return;
        }
      }
      // Regular user login - NEW USER
      if (email === 'user@gmail.com' && password === 'user123') {
        const userData: User = {
          id: '5',
          name: 'Travel Explorer',
          email: 'user@gmail.com',
          role: 'traveller',
          photoUrl: 'https://randomuser.me/api/portraits/men/45.jpg'
        };
        setUser(userData);
        if (remember) {
          localStorage.setItem('tourigo_user', JSON.stringify(userData));
        }
        navigate('/dashboard');
        return;
      }
      // Regular user login
      if (email === 'admin@tourigo.com' && password === 'password') {
        const userData: User = {
          id: '1',
          name: 'Admin User',
          email: 'admin@tourigo.com',
          role: 'admin',
          photoUrl: 'https://randomuser.me/api/portraits/men/41.jpg'
        };
        setUser(userData);
        if (remember) {
          localStorage.setItem('tourigo_user', JSON.stringify(userData));
        }
        navigate('/');
      } else if (email === 'investor@tourigo.com' && password === 'password') {
        const userData: User = {
          id: '2',
          name: 'Investor User',
          email: 'investor@tourigo.com',
          role: 'investor',
          photoUrl: 'https://randomuser.me/api/portraits/women/65.jpg'
        };
        setUser(userData);
        if (remember) {
          localStorage.setItem('tourigo_user', JSON.stringify(userData));
        }
        navigate('/');
      } else if (email === 'traveller@tourigo.com' && password === 'password') {
        const userData: User = {
          id: '3',
          name: 'Traveller User',
          email: 'traveller@tourigo.com',
          role: 'traveller',
          photoUrl: 'https://randomuser.me/api/portraits/men/22.jpg'
        };
        setUser(userData);
        if (remember) {
          localStorage.setItem('tourigo_user', JSON.stringify(userData));
        }
        navigate('/');
      } else if (email === 'tourspot@tourigo.com' && password === 'password') {
        const userData: User = {
          id: '4',
          name: 'Tour Spot Owner',
          email: 'tourspot@tourigo.com',
          role: 'tourspot',
          photoUrl: 'https://randomuser.me/api/portraits/women/33.jpg'
        };
        setUser(userData);
        if (remember) {
          localStorage.setItem('tourigo_user', JSON.stringify(userData));
        }
        navigate('/');
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred during login');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  // Mock register function
  const register = async (name: string, email: string, password: string, role: UserRole, acceptTerms: boolean) => {
    setLoading(true);
    setError(null);
    try {
      if (!acceptTerms) {
        setError('You must accept the terms and conditions');
        setLoading(false);
        return;
      }
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      const userData: User = {
        id: Math.random().toString(36).substring(2, 9),
        name,
        email,
        role,
        photoUrl: 'https://randomuser.me/api/portraits/lego/1.jpg' // Default avatar
      };
      setUser(userData);
      localStorage.setItem('tourigo_user', JSON.stringify(userData));
      navigate('/');
    } catch (err) {
      setError('An error occurred during registration');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('tourigo_user');
    navigate('/login');
  };
  // Mock forgot password function
  const forgotPassword = async (email: string) => {
    setLoading(true);
    setError(null);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      // In a real app, this would send a reset email
      console.log('Password reset email sent to:', email);
      // Redirect to login with a success message
      navigate('/login?reset=true');
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  return <AuthContext.Provider value={{
    user,
    login,
    register,
    logout,
    forgotPassword,
    loading,
    error
  }}>
      {children}
    </AuthContext.Provider>;
};