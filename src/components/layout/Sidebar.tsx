import React from 'react';
import { CalendarIcon, DollarSignIcon, TrendingUpIcon, MapPinIcon, CompassIcon, ClockIcon, UsersIcon, BuildingIcon, GlobeIcon, CameraIcon, XIcon } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}
const Sidebar: React.FC<SidebarProps> = ({
  isOpen = false,
  onClose
}) => {
  const {
    user
  } = useAuth();
  const renderSidebarContent = () => {
    switch (user?.role) {
      case 'traveller':
        return <TravellerSidebar />;
      case 'investor':
        return <InvestorSidebar />;
      case 'tourspot':
        return <TourSpotSidebar />;
      case 'admin':
        return <AdminSidebar />;
      default:
        return <TravellerSidebar />;
    }
  };
  return <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-gray-900 border-r border-gray-700 p-4">
        {renderSidebarContent()}
      </div>

      {/* Mobile Sidebar Overlay */}
      {isOpen && <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden" onClick={onClose} />}

      {/* Mobile Sidebar Drawer */}
      <div className={`fixed inset-y-0 left-0 z-50 w-72 max-w-[85vw] bg-gray-900 border-r border-gray-700 transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <span className="text-lg font-bold text-white">Menu</span>
          <button onClick={onClose} className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors">
            <XIcon className="w-5 h-5 text-gray-300" />
          </button>
        </div>
        <div className="p-4 overflow-y-auto h-[calc(100vh-73px)]">
          {renderSidebarContent()}
        </div>
      </div>
    </>;
};
const TravellerSidebar = () => {
  return <>
      <div className="mb-6">
        <h3 className="text-xs uppercase text-gray-500 font-semibold mb-2">
          Trip Planning
        </h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm text-gray-300">Budget Range</label>
            <div className="flex items-center space-x-2">
              <div className="h-4 w-4 text-blue-400" />
              <input type="range" min="0" max="10000" className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer" />
            </div>
            <div className="flex justify-between text-xs text-gray-400">
              <span>$0</span>
              <span>$10,000</span>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-300">Travel Dates</label>
            <div className="flex items-center p-2 bg-gray-800 rounded-md">
              <CalendarIcon className="h-4 w-4 text-blue-400 mr-2" />
              <span className="text-sm text-gray-300">Select dates</span>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-300">Travel Mood</label>
            <select className="w-full bg-gray-800 border border-gray-700 text-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
              <option>Adventure</option>
              <option>Relaxation</option>
              <option>Cultural</option>
              <option>Romantic</option>
              <option>Family-friendly</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-xs uppercase text-gray-500 font-semibold mb-2">
          Traveller Tools
        </h3>
        <div className="space-y-1">
          <button className="flex items-center w-full p-2.5 rounded-lg hover:bg-gray-800 text-gray-300 transition-colors">
            <DollarSignIcon className="h-4 w-4 mr-3 text-green-400" />
            <span className="text-sm">Cost Calculator</span>
          </button>
          <button className="flex items-center w-full p-2.5 rounded-lg hover:bg-gray-800 text-gray-300 transition-colors">
            <MapPinIcon className="h-4 w-4 mr-3 text-red-400" />
            <span className="text-sm">Saved Locations</span>
          </button>
          <button className="flex items-center w-full p-2.5 rounded-lg hover:bg-gray-800 text-gray-300 transition-colors">
            <CompassIcon className="h-4 w-4 mr-3 text-blue-400" />
            <span className="text-sm">Discover New Places</span>
          </button>
          <button className="flex items-center w-full p-2.5 rounded-lg hover:bg-gray-800 text-gray-300 transition-colors">
            <ClockIcon className="h-4 w-4 mr-3 text-yellow-400" />
            <span className="text-sm">Travel Time</span>
          </button>
          <button className="flex items-center w-full p-2.5 rounded-lg hover:bg-gray-800 text-gray-300 transition-colors">
            <UsersIcon className="h-4 w-4 mr-3 text-pink-400" />
            <span className="text-sm">Find Travel Buddies</span>
          </button>
        </div>
      </div>
      <div className="mt-auto p-3 bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg">
        <h4 className="text-sm font-medium text-white mb-1">
          AI Travel Assistant
        </h4>
        <p className="text-xs text-blue-200 mb-2">
          Ask me anything about your trip!
        </p>
        <button className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-md transition-colors">
          Start Planning
        </button>
      </div>
    </>;
};
const InvestorSidebar = () => {
  return <>
      <div className="mb-6">
        <h3 className="text-xs uppercase text-gray-500 font-semibold mb-2">
          Investment Filters
        </h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm text-gray-300">Investment Range</label>
            <div className="flex items-center space-x-2">
              <div className="h-4 w-4 text-green-400" />
              <input type="range" min="10000" max="5000000" className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer" />
            </div>
            <div className="flex justify-between text-xs text-gray-400">
              <span>$10K</span>
              <span>$5M</span>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-300">ROI Minimum</label>
            <select className="w-full bg-gray-800 border border-gray-700 text-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm">
              <option>5%</option>
              <option>8%</option>
              <option>10%</option>
              <option>12%</option>
              <option>15%+</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-300">Project Type</label>
            <select className="w-full bg-gray-800 border border-gray-700 text-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm">
              <option>All Projects</option>
              <option>Hotels & Resorts</option>
              <option>Tour Operations</option>
              <option>Eco-Tourism</option>
              <option>Transportation</option>
              <option>Technology</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-xs uppercase text-gray-500 font-semibold mb-2">
          Investor Tools
        </h3>
        <div className="space-y-1">
          <button className="flex items-center w-full p-2.5 rounded-lg hover:bg-gray-800 text-gray-300 transition-colors">
            <DollarSignIcon className="h-4 w-4 mr-3 text-green-400" />
            <span className="text-sm">ROI Calculator</span>
          </button>
          <button className="flex items-center w-full p-2.5 rounded-lg hover:bg-gray-800 text-gray-300 transition-colors">
            <TrendingUpIcon className="h-4 w-4 mr-3 text-purple-400" />
            <span className="text-sm">Market Analytics</span>
          </button>
          <button className="flex items-center w-full p-2.5 rounded-lg hover:bg-gray-800 text-gray-300 transition-colors">
            <BuildingIcon className="h-4 w-4 mr-3 text-blue-400" />
            <span className="text-sm">My Investments</span>
          </button>
          <button className="flex items-center w-full p-2.5 rounded-lg hover:bg-gray-800 text-gray-300 transition-colors">
            <GlobeIcon className="h-4 w-4 mr-3 text-yellow-400" />
            <span className="text-sm">Global Opportunities</span>
          </button>
        </div>
      </div>
      <div className="mt-auto p-3 bg-gradient-to-r from-green-900 to-green-800 rounded-lg">
        <h4 className="text-sm font-medium text-white mb-1">
          Investment Advisor
        </h4>
        <p className="text-xs text-green-200 mb-2">
          Get personalized investment recommendations
        </p>
        <button className="w-full py-2 bg-green-500 hover:bg-green-600 text-white text-sm rounded-md transition-colors">
          Start Consultation
        </button>
      </div>
    </>;
};
const TourSpotSidebar = () => {
  return <>
      <div className="mb-6">
        <h3 className="text-xs uppercase text-gray-500 font-semibold mb-2">
          Tour Spot Management
        </h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm text-gray-300">Spot Status</label>
            <select className="w-full bg-gray-800 border border-gray-700 text-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm">
              <option>All Spots</option>
              <option>Active</option>
              <option>Draft</option>
              <option>Under Review</option>
              <option>Archived</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-300">Spot Category</label>
            <select className="w-full bg-gray-800 border border-gray-700 text-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm">
              <option>All Categories</option>
              <option>Natural Attractions</option>
              <option>Cultural Sites</option>
              <option>Adventure</option>
              <option>Entertainment</option>
              <option>Dining</option>
              <option>Accommodation</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-xs uppercase text-gray-500 font-semibold mb-2">
          Tour Spot Tools
        </h3>
        <div className="space-y-1">
          <button className="flex items-center w-full p-2.5 rounded-lg hover:bg-gray-800 text-gray-300 transition-colors">
            <MapPinIcon className="h-4 w-4 mr-3 text-purple-400" />
            <span className="text-sm">My Tour Spots</span>
          </button>
          <button className="flex items-center w-full p-2.5 rounded-lg hover:bg-gray-800 text-gray-300 transition-colors">
            <CameraIcon className="h-4 w-4 mr-3 text-pink-400" />
            <span className="text-sm">Media Gallery</span>
          </button>
          <button className="flex items-center w-full p-2.5 rounded-lg hover:bg-gray-800 text-gray-300 transition-colors">
            <TrendingUpIcon className="h-4 w-4 mr-3 text-blue-400" />
            <span className="text-sm">Analytics</span>
          </button>
          <button className="flex items-center w-full p-2.5 rounded-lg hover:bg-gray-800 text-gray-300 transition-colors">
            <DollarSignIcon className="h-4 w-4 mr-3 text-green-400" />
            <span className="text-sm">Investment Leads</span>
          </button>
          <button className="flex items-center w-full p-2.5 rounded-lg hover:bg-gray-800 text-gray-300 transition-colors">
            <UsersIcon className="h-4 w-4 mr-3 text-yellow-400" />
            <span className="text-sm">Visitor Statistics</span>
          </button>
        </div>
      </div>
      <div className="mt-auto p-3 bg-gradient-to-r from-purple-900 to-purple-800 rounded-lg">
        <h4 className="text-sm font-medium text-white mb-1">
          Create New Tour Spot
        </h4>
        <p className="text-xs text-purple-200 mb-2">
          Showcase your attraction to travelers and investors
        </p>
        <button className="w-full py-2 bg-purple-500 hover:bg-purple-600 text-white text-sm rounded-md transition-colors">
          Add New Spot
        </button>
      </div>
    </>;
};
const AdminSidebar = () => {
  return <>
      <div className="mb-6">
        <h3 className="text-xs uppercase text-gray-500 font-semibold mb-2">
          Admin Controls
        </h3>
        <div className="space-y-1">
          <button className="flex items-center w-full p-2.5 rounded-lg hover:bg-gray-800 text-gray-300 transition-colors">
            <UsersIcon className="h-4 w-4 mr-3 text-blue-400" />
            <span className="text-sm">User Management</span>
          </button>
          <button className="flex items-center w-full p-2.5 rounded-lg hover:bg-gray-800 text-gray-300 transition-colors">
            <MapPinIcon className="h-4 w-4 mr-3 text-red-400" />
            <span className="text-sm">Location Management</span>
          </button>
          <button className="flex items-center w-full p-2.5 rounded-lg hover:bg-gray-800 text-gray-300 transition-colors">
            <DollarSignIcon className="h-4 w-4 mr-3 text-green-400" />
            <span className="text-sm">Investment Projects</span>
          </button>
          <button className="flex items-center w-full p-2.5 rounded-lg hover:bg-gray-800 text-gray-300 transition-colors">
            <BuildingIcon className="h-4 w-4 mr-3 text-purple-400" />
            <span className="text-sm">Tour Spots</span>
          </button>
          <button className="flex items-center w-full p-2.5 rounded-lg hover:bg-gray-800 text-gray-300 transition-colors">
            <TrendingUpIcon className="h-4 w-4 mr-3 text-yellow-400" />
            <span className="text-sm">Analytics</span>
          </button>
          <button className="flex items-center w-full p-2.5 rounded-lg hover:bg-gray-800 text-gray-300 transition-colors">
            <GlobeIcon className="h-4 w-4 mr-3 text-pink-400" />
            <span className="text-sm">System Settings</span>
          </button>
        </div>
      </div>
      <div className="mt-auto p-3 bg-gradient-to-r from-red-900 to-red-800 rounded-lg">
        <h4 className="text-sm font-medium text-white mb-1">System Status</h4>
        <div className="flex items-center justify-between text-xs text-red-200 mb-2">
          <span>All systems operational</span>
          <span className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-green-400 mr-1"></span>
            Online
          </span>
        </div>
        <button className="w-full py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-md transition-colors">
          View System Logs
        </button>
      </div>
    </>;
};
export default Sidebar;