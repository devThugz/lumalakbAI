import React from 'react';
import { Clock3Icon, MapPinIcon, UmbrellaIcon, UtensilsIcon, BedIcon, PlaneIcon, AlertTriangleIcon } from 'lucide-react';
const ItineraryPreview = () => {
  return <div className="space-y-3">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-medium text-white">Tokyo Adventure</h3>
          <div className="text-xs text-gray-400">June 15 - June 22, 2023</div>
        </div>
        <div className="text-xs bg-blue-900 text-blue-300 px-2 py-1 rounded-full">
          AI Generated
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-0 bottom-0 left-3 w-0.5 bg-gray-700"></div>
        <div className="relative pl-8 pb-4">
          <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
            <PlaneIcon className="h-3 w-3 text-white" />
          </div>
          <div className="text-sm font-medium text-white">Day 1: Arrival</div>
          <div className="text-xs text-gray-400 mt-1">
            Check-in at Park Hyatt Tokyo
          </div>
          <div className="flex items-center mt-1">
            <Clock3Icon className="h-3 w-3 text-gray-500 mr-1" />
            <span className="text-xs text-gray-400">3:00 PM</span>
            <span className="mx-2 text-gray-600">•</span>
            <MapPinIcon className="h-3 w-3 text-gray-500 mr-1" />
            <span className="text-xs text-gray-400">Shinjuku</span>
          </div>
        </div>
        <div className="relative pl-8 pb-4">
          <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center">
            <UmbrellaIcon className="h-3 w-3 text-white" />
          </div>
          <div className="text-sm font-medium text-white">
            Day 2: Explore Shibuya
          </div>
          <div className="text-xs text-gray-400 mt-1">
            Shibuya Crossing, Meiji Shrine
          </div>
          <div className="flex items-center mt-1">
            <Clock3Icon className="h-3 w-3 text-gray-500 mr-1" />
            <span className="text-xs text-gray-400">9:00 AM - 5:00 PM</span>
          </div>
          <div className="mt-1 px-2 py-1 bg-yellow-900/30 text-yellow-300 text-xs rounded-md inline-block">
            <AlertTriangleIcon className="h-3 w-3 inline mr-1" />
            60% chance of rain
          </div>
        </div>
        <div className="relative pl-8 pb-4">
          <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-green-600 flex items-center justify-center">
            <UtensilsIcon className="h-3 w-3 text-white" />
          </div>
          <div className="text-sm font-medium text-white">
            Day 3: Tokyo Food Tour
          </div>
          <div className="text-xs text-gray-400 mt-1">
            Tsukiji Outer Market, Ramen Experience
          </div>
          <div className="flex items-center mt-1">
            <Clock3Icon className="h-3 w-3 text-gray-500 mr-1" />
            <span className="text-xs text-gray-400">10:00 AM - 2:00 PM</span>
          </div>
        </div>
        <div className="relative pl-8">
          <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-red-600 flex items-center justify-center">
            <BedIcon className="h-3 w-3 text-white" />
          </div>
          <div className="text-sm font-medium text-white">
            Day 4: Day Trip to Mt. Fuji
          </div>
          <div className="text-xs text-gray-400 mt-1">
            Full day excursion with lunch included
          </div>
          <div className="flex items-center mt-1">
            <Clock3Icon className="h-3 w-3 text-gray-500 mr-1" />
            <span className="text-xs text-gray-400">7:00 AM - 7:00 PM</span>
          </div>
        </div>
      </div>
      <div className="pt-2 flex justify-between">
        <button className="px-3 py-1.5 text-xs bg-gray-700 hover:bg-gray-600 text-white rounded transition-colors">
          View Full Itinerary
        </button>
        <button className="px-3 py-1.5 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors">
          Modify Plan
        </button>
      </div>
    </div>;
};
export default ItineraryPreview;