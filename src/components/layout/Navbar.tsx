import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircleIcon, BellIcon, UserIcon, SearchIcon, LogOutIcon, MenuIcon, XIcon } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Logo from '../common/Logo';
interface NavbarProps {
  onChatToggle: () => void;
  onMenuToggle?: () => void;
  isSidebarOpen?: boolean;
}
const Navbar: React.FC<NavbarProps> = ({
  onChatToggle,
  onMenuToggle,
  isSidebarOpen
}) => {
  const {
    user,
    logout
  } = useAuth();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const navLinks = [{
    to: '/',
    label: 'Home',
    show: true
  }, {
    to: '/explore',
    label: 'Explore',
    show: true
  }, {
    to: '/weather',
    label: 'Weather',
    show: true
  }, {
    to: '/buddies',
    label: 'Buddies',
    show: user?.role === 'traveller' || user?.role === 'admin'
  }, {
    to: '/invest',
    label: 'Invest',
    show: user?.role === 'investor' || user?.role === 'admin'
  }, {
    to: '/tourspots',
    label: 'Tour Spots',
    show: user?.role === 'tourspot' || user?.role === 'admin'
  }, {
    to: '/admin',
    label: 'Admin',
    show: user?.role === 'admin'
  }];
  return <>
      <nav className="bg-gray-900 border-b border-gray-700 py-2 px-3 sm:py-3 sm:px-4 shadow-md">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-8">
            {/* Mobile Menu Button */}
            <button onClick={onMenuToggle} className="md:hidden w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors">
              <MenuIcon className="w-5 h-5 text-gray-300" />
            </button>

            <Logo size="sm" />

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4 lg:space-x-6">
              {navLinks.filter(link => link.show).map(link => <Link key={link.to} to={link.to} className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">
                    {link.label}
                  </Link>)}
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
            {/* Desktop Search */}
            <div className="relative hidden md:block">
              <input type="text" placeholder="Search destinations..." className="bg-gray-800 text-gray-200 rounded-full py-2 pl-10 pr-4 w-48 lg:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
              <SearchIcon className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>

            {/* Mobile Search Button */}
            <button onClick={() => setShowMobileSearch(!showMobileSearch)} className="md:hidden w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors">
              <SearchIcon className="w-5 h-5 text-gray-300" />
            </button>

            {/* Notifications */}
            <button className="w-10 h-10 rounded-lg hover:bg-gray-800 flex items-center justify-center relative transition-colors">
              <BellIcon className="h-5 w-5 text-gray-300" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Chat Toggle */}
            <button onClick={onChatToggle} className="w-10 h-10 rounded-lg hover:bg-gray-800 flex items-center justify-center text-blue-400 transition-colors">
              <MessageCircleIcon className="h-5 w-5" />
            </button>

            {/* User Menu */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-gray-600">
                {user?.photoUrl ? <img src={user.photoUrl} alt={user.name} className="w-full h-full object-cover" /> : <div className="w-full h-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                    <UserIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>}
              </div>
              {user && <button onClick={logout} className="hidden sm:flex w-9 h-9 rounded-lg hover:bg-gray-800 items-center justify-center text-gray-400 transition-colors" title="Logout">
                  <LogOutIcon className="h-4 w-4" />
                </button>}
            </div>

            {/* Mobile Nav Menu Button */}
            <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="md:hidden w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors">
              {showMobileMenu ? <XIcon className="w-5 h-5 text-gray-300" /> : <span className="text-gray-300 text-xs font-bold">•••</span>}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {showMobileSearch && <div className="mt-3 md:hidden">
            <div className="relative">
              <input type="text" placeholder="Search destinations..." className="w-full bg-gray-800 text-gray-200 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" autoFocus />
              <SearchIcon className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
            </div>
          </div>}
      </nav>

      {/* Mobile Navigation Menu */}
      {showMobileMenu && <>
          <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden" onClick={() => setShowMobileMenu(false)} />
          <div className="fixed top-0 right-0 z-50 w-64 max-w-[80vw] h-full bg-gray-900 border-l border-gray-700 md:hidden transform transition-transform duration-300">
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <span className="text-lg font-bold text-white">Navigation</span>
              <button onClick={() => setShowMobileMenu(false)} className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors">
                <XIcon className="w-5 h-5 text-gray-300" />
              </button>
            </div>
            <div className="p-4 space-y-2">
              {navLinks.filter(link => link.show).map(link => <Link key={link.to} to={link.to} onClick={() => setShowMobileMenu(false)} className="flex items-center w-full p-3 rounded-xl text-gray-300 hover:bg-gray-800 hover:text-white transition-colors text-sm font-medium">
                    {link.label}
                  </Link>)}
              {user && <button onClick={() => {
            logout();
            setShowMobileMenu(false);
          }} className="flex items-center w-full p-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-colors text-sm font-medium mt-4">
                  <LogOutIcon className="w-4 h-4 mr-3" />
                  Logout
                </button>}
            </div>
          </div>
        </>}
    </>;
};
export default Navbar;