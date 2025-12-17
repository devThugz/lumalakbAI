import React from 'react';
import { CloudRainIcon, CloudSunIcon, SunIcon, CloudLightningIcon, AlertTriangleIcon } from 'lucide-react';
const WeatherWidget = () => {
  return <div className="space-y-4">
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg p-4">
        <div className="flex justify-between items-center mb-2">
          <div>
            <h3 className="font-medium text-white">Current Location</h3>
            <p className="text-xs text-blue-200">New York City, USA</p>
          </div>
          <CloudSunIcon className="h-10 w-10 text-yellow-300" />
        </div>
        <div className="flex items-end">
          <span className="text-3xl font-bold text-white">72°F</span>
          <span className="text-sm text-blue-200 ml-2 mb-1">Partly Cloudy</span>
        </div>
        <div className="flex justify-between mt-2 text-xs text-blue-200">
          <span>Humidity: 65%</span>
          <span>Wind: 8 mph</span>
        </div>
      </div>
      <div className="bg-red-900/40 border border-red-800 rounded-lg p-3 flex items-center">
        <div className="w-8 h-8 rounded-full bg-red-900 flex items-center justify-center mr-3">
          <AlertTriangleIcon className="h-4 w-4 text-red-300" />
        </div>
        <div>
          <h4 className="text-sm font-medium text-white">Weather Alert</h4>
          <p className="text-xs text-red-200">
            Heavy rain expected in Barcelona tomorrow
          </p>
        </div>
      </div>
      <h3 className="text-sm font-medium text-gray-300 mt-4">5-Day Forecast</h3>
      <div className="grid grid-cols-5 gap-2">
        <div className="bg-gray-800 rounded-lg p-2 text-center">
          <div className="text-xs text-gray-400 mb-1">Mon</div>
          <SunIcon className="h-6 w-6 text-yellow-400 mx-auto" />
          <div className="text-xs text-white mt-1">75°F</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-2 text-center">
          <div className="text-xs text-gray-400 mb-1">Tue</div>
          <CloudSunIcon className="h-6 w-6 text-blue-400 mx-auto" />
          <div className="text-xs text-white mt-1">72°F</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-2 text-center">
          <div className="text-xs text-gray-400 mb-1">Wed</div>
          <CloudRainIcon className="h-6 w-6 text-blue-300 mx-auto" />
          <div className="text-xs text-white mt-1">68°F</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-2 text-center">
          <div className="text-xs text-gray-400 mb-1">Thu</div>
          <CloudLightningIcon className="h-6 w-6 text-purple-400 mx-auto" />
          <div className="text-xs text-white mt-1">65°F</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-2 text-center">
          <div className="text-xs text-gray-400 mb-1">Fri</div>
          <SunIcon className="h-6 w-6 text-yellow-400 mx-auto" />
          <div className="text-xs text-white mt-1">70°F</div>
        </div>
      </div>
    </div>;
};
export default WeatherWidget;