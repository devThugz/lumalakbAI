import React from 'react';
import { MapIcon, CloudIcon, UsersIcon, TrendingUpIcon, BarChart4Icon, CalendarIcon } from 'lucide-react';
import Map from '../components/map/Map';
import WeatherWidget from '../components/weather/WeatherWidget';
import TourismTrends from '../components/dashboard/TourismTrends';
import RecommendedDestinations from '../components/dashboard/RecommendedDestinations';
import ItineraryPreview from '../components/dashboard/ItineraryPreview';
const Dashboard = () => {
  return <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-900 p-5 rounded-xl border border-gray-700 flex items-center">
          <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center mr-4">
            <MapIcon className="h-6 w-6 text-blue-400" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-200">Explore Map</h3>
            <p className="text-sm text-gray-400">
              12,458 destinations available
            </p>
          </div>
        </div>
        <div className="bg-gray-900 p-5 rounded-xl border border-gray-700 flex items-center">
          <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center mr-4">
            <CloudIcon className="h-6 w-6 text-purple-400" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-200">
              Weather Forecast
            </h3>
            <p className="text-sm text-gray-400">Updated 10 minutes ago</p>
          </div>
        </div>
        <div className="bg-gray-900 p-5 rounded-xl border border-gray-700 flex items-center">
          <div className="w-12 h-12 rounded-full bg-green-900 flex items-center justify-center mr-4">
            <UsersIcon className="h-6 w-6 text-green-400" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-200">
              Travel Buddies
            </h3>
            <p className="text-sm text-gray-400">245 active travelers nearby</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-gray-900 rounded-xl border border-gray-700 overflow-hidden">
            <div className="p-4 border-b border-gray-700 flex justify-between items-center">
              <h2 className="text-lg font-medium text-white flex items-center">
                <MapIcon className="h-5 w-5 mr-2 text-blue-400" />
                Interactive Tourism Map
              </h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors">
                  View Full Map
                </button>
              </div>
            </div>
            <div className="h-96">
              <Map />
            </div>
          </div>
        </div>
        <div>
          <div className="bg-gray-900 rounded-xl border border-gray-700 overflow-hidden">
            <div className="p-4 border-b border-gray-700">
              <h2 className="text-lg font-medium text-white flex items-center">
                <CloudIcon className="h-5 w-5 mr-2 text-purple-400" />
                Weather Alerts
              </h2>
            </div>
            <div className="p-4">
              <WeatherWidget />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-900 rounded-xl border border-gray-700 overflow-hidden">
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-lg font-medium text-white flex items-center">
              <TrendingUpIcon className="h-5 w-5 mr-2 text-green-400" />
              Tourism Trends
            </h2>
          </div>
          <div className="p-4 h-64">
            <TourismTrends />
          </div>
        </div>
        <div className="bg-gray-900 rounded-xl border border-gray-700 overflow-hidden">
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-lg font-medium text-white flex items-center">
              <BarChart4Icon className="h-5 w-5 mr-2 text-yellow-400" />
              Investment Opportunities
            </h2>
          </div>
          <div className="p-4 h-64">
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-gray-200">
                    Beachfront Resort
                  </h3>
                  <span className="text-xs bg-green-900 text-green-400 px-2 py-1 rounded-full">
                    12% ROI
                  </span>
                </div>
                <p className="text-xs text-gray-400 mb-2">
                  New luxury resort development in Bali with high tourism
                  growth.
                </p>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">$2.5M funding needed</span>
                  <span className="text-blue-400">62% funded</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-1.5 mt-1">
                  <div className="bg-blue-500 h-1.5 rounded-full" style={{
                  width: '62%'
                }}></div>
                </div>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-gray-200">
                    Eco-Tourism Lodge
                  </h3>
                  <span className="text-xs bg-green-900 text-green-400 px-2 py-1 rounded-full">
                    9% ROI
                  </span>
                </div>
                <p className="text-xs text-gray-400 mb-2">
                  Sustainable lodging in Costa Rica's rainforest region.
                </p>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">$800K funding needed</span>
                  <span className="text-blue-400">38% funded</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-1.5 mt-1">
                  <div className="bg-blue-500 h-1.5 rounded-full" style={{
                  width: '38%'
                }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-900 rounded-xl border border-gray-700 overflow-hidden">
          <div className="p-4 border-b border-gray-700 flex justify-between items-center">
            <h2 className="text-lg font-medium text-white flex items-center">
              <MapIcon className="h-5 w-5 mr-2 text-blue-400" />
              Recommended Destinations
            </h2>
            <button className="px-3 py-1 text-xs bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-colors">
              View All
            </button>
          </div>
          <div className="p-4">
            <RecommendedDestinations />
          </div>
        </div>
        <div className="bg-gray-900 rounded-xl border border-gray-700 overflow-hidden">
          <div className="p-4 border-b border-gray-700 flex justify-between items-center">
            <h2 className="text-lg font-medium text-white flex items-center">
              <CalendarIcon className="h-5 w-5 mr-2 text-pink-400" />
              Your Itinerary
            </h2>
            <button className="px-3 py-1 text-xs bg-pink-600 hover:bg-pink-700 text-white rounded-md transition-colors">
              Plan New Trip
            </button>
          </div>
          <div className="p-4">
            <ItineraryPreview />
          </div>
        </div>
      </div>
    </div>;
};
export default Dashboard;