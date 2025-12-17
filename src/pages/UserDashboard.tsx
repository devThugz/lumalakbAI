import React, { useState } from 'react';
import { HomeIcon, CompassIcon, UsersIcon, PlaneIcon, UserIcon, MessageCircleIcon, MenuIcon, XIcon } from 'lucide-react';
import Home from '../components/user-dashboard/Home';
import Explore from '../components/user-dashboard/Explore';
import Connect from '../components/user-dashboard/Connect';
import Trips from '../components/user-dashboard/Trips';
import Profile from '../components/user-dashboard/Profile';
import { useAuth } from '../context/AuthContext';
import Logo from '../components/common/Logo';
const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const {
    user
  } = useAuth();
  const tabs = [{
    id: 'home',
    label: 'Home',
    icon: HomeIcon
  }, {
    id: 'explore',
    label: 'Explore',
    icon: CompassIcon
  }, {
    id: 'connect',
    label: 'Connect',
    icon: UsersIcon
  }, {
    id: 'trips',
    label: 'Trips',
    icon: PlaneIcon
  }, {
    id: 'profile',
    label: 'Profile',
    icon: UserIcon
  }];
  const handleNavigate = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'explore':
        return <Explore />;
      case 'connect':
        return <Connect />;
      case 'trips':
        return <Trips />;
      case 'profile':
        return <Profile />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };
  return <div className="flex min-h-screen bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900">
      {/* Mobile Overlay */}
      {isSidebarOpen && <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden" onClick={() => setIsSidebarOpen(false)} />}

      {/* Left Sidebar Navigation */}
      <aside className={`fixed left-0 top-0 bottom-0 w-64 bg-gray-900/95 backdrop-blur-xl border-r border-teal-500/20 shadow-2xl shadow-teal-500/10 z-50 transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:w-20 lg:w-64`}>
        <div className="flex flex-col h-full">
          {/* Close button for mobile */}
          <button onClick={() => setIsSidebarOpen(false)} className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-800/50 transition-all md:hidden">
            <XIcon className="w-5 h-5 text-gray-400" />
          </button>

          {/* Logo Section */}
          <div className="p-4 sm:p-6 border-b border-teal-500/20">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Logo size="md" />
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 py-6 px-2 sm:px-3 md:px-4">
            <div className="space-y-2">
              {tabs.map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return <button key={tab.id} onClick={() => {
                handleNavigate(tab.id);
                setIsSidebarOpen(false);
              }} className={`w-full flex items-center space-x-3 px-3 sm:px-4 py-3 sm:py-4 rounded-xl transition-all group ${isActive ? 'bg-gradient-to-r from-teal-500/20 to-orange-500/20 text-teal-400 shadow-lg shadow-teal-500/30 border border-teal-500/50' : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/50'}`}>
                    <div className={`relative flex items-center justify-center ${isActive ? 'text-teal-400' : 'text-gray-400 group-hover:text-teal-400'}`}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      {isActive && <div className="absolute inset-0 bg-teal-500/20 rounded-lg blur-md animate-pulse"></div>}
                    </div>
                    <span className="font-medium text-sm md:hidden lg:block">
                      {tab.label}
                    </span>
                  </button>;
            })}
            </div>
          </nav>

          {/* User Profile Section */}
          <div className="p-3 sm:p-4 border-t border-teal-500/20">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-teal-500/50 shadow-lg shadow-teal-500/30 flex-shrink-0">
                {user?.photoUrl ? <img src={user.photoUrl} alt={user.name} className="w-full h-full object-cover" /> : <div className="w-full h-full bg-gradient-to-br from-teal-500 to-orange-500 flex items-center justify-center">
                    <UserIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>}
                <div className="absolute inset-0 border-2 border-teal-400/50 rounded-full animate-pulse"></div>
              </div>
              <div className="flex-1 min-w-0 md:hidden lg:block">
                <p className="text-sm font-medium text-white truncate">
                  {user?.name}
                </p>
                <p className="text-xs text-gray-400 truncate">{user?.email}</p>
              </div>
              <button className="relative p-2 rounded-xl hover:bg-teal-500/10 transition-all group md:hidden lg:block">
                <MessageCircleIcon className="w-5 h-5 text-gray-400 group-hover:text-teal-400 transition-colors" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full animate-pulse shadow-lg shadow-orange-500/50"></span>
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-20 lg:ml-64">
        {/* Top Header */}
        <header className="sticky top-0 z-40 bg-gray-900/95 backdrop-blur-xl border-b border-teal-500/20 shadow-lg shadow-teal-500/10">
          <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {/* Mobile Menu Button */}
                <button onClick={() => setIsSidebarOpen(true)} className="p-2 rounded-xl hover:bg-teal-500/10 transition-all md:hidden">
                  <MenuIcon className="w-6 h-6 text-teal-400" />
                </button>
                <div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-teal-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                    {tabs.find(tab => tab.id === activeTab)?.label}
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">
                    Welcome back, {user?.name}! ✨
                  </p>
                </div>
              </div>
              <button className="relative p-2 sm:p-3 rounded-xl hover:bg-teal-500/10 transition-all group">
                <MessageCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-teal-400 transition-colors" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full animate-pulse shadow-lg shadow-orange-500/50"></span>
              </button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="animate-fadeIn">{renderContent()}</div>
        </div>
      </main>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>;
};
export default UserDashboard;