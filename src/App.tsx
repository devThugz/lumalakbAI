import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './pages/Dashboard';
import UserDashboard from './pages/UserDashboard';
import Explore from './pages/Explore';
import Weather from './pages/Weather';
import Buddies from './pages/Buddies';
import Invest from './pages/Invest';
import TourSpots from './pages/TourSpots';
import AdminDashboard from './pages/admin/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import LandingPage from './pages/LandingPage';
import ChatAssistant from './components/ai/ChatAssistant';
import { useAuth } from './context/AuthContext';
const ProtectedRoute = ({
  children,
  requiredRole
}: {
  children: React.ReactNode;
  requiredRole?: string[];
}) => {
  const {
    user,
    loading
  } = useAuth();
  if (loading) {
    return <div className="flex h-screen items-center justify-center bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
      </div>;
  }
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  if (requiredRole && !requiredRole.includes(user.role)) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
};
export function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const {
    user
  } = useAuth();
  if (!user) {
    return <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>;
  }
  if (user.role === 'traveller') {
    return <UserDashboard />;
  }
  return <div className="flex h-screen bg-gray-900 text-white overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar onChatToggle={() => setIsChatOpen(!isChatOpen)} onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} isSidebarOpen={isSidebarOpen} />
        <main className="flex-1 overflow-y-auto p-2 sm:p-4 bg-gray-800">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/buddies" element={<ProtectedRoute requiredRole={['traveller', 'admin']}>
                  <Buddies />
                </ProtectedRoute>} />
            <Route path="/invest" element={<ProtectedRoute requiredRole={['investor', 'admin']}>
                  <Invest />
                </ProtectedRoute>} />
            <Route path="/tourspots" element={<ProtectedRoute requiredRole={['tourspot', 'admin']}>
                  <TourSpots />
                </ProtectedRoute>} />
            <Route path="/admin" element={<ProtectedRoute requiredRole={['admin']}>
                  <AdminDashboard />
                </ProtectedRoute>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
      <ChatAssistant isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>;
}