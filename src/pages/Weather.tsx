import React from 'react';
import WeatherWidget from '../components/weather/WeatherWidget';
const Weather = () => {
  return <div>
      <div className="bg-gray-900 p-4 rounded-xl mb-4">
        <h1 className="text-xl font-bold text-white mb-2">Weather Forecast</h1>
        <p className="text-gray-400">
          Plan your trips with accurate weather predictions
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-900 p-4 rounded-xl">
          <WeatherWidget />
        </div>
        <div className="bg-gray-900 p-4 rounded-xl">
          <h2 className="text-lg font-medium text-white mb-3">
            Weather Impact
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-800 p-3 rounded-lg">
              <h3 className="text-sm font-medium text-white mb-2">
                Barcelona Trip
              </h3>
              <p className="text-xs text-gray-400 mb-2">
                Heavy rain expected tomorrow. We've adjusted your itinerary to
                include indoor activities.
              </p>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors">
                  View Changes
                </button>
                <button className="px-3 py-1 text-xs bg-gray-700 hover:bg-gray-600 text-white rounded transition-colors">
                  Ignore
                </button>
              </div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <h3 className="text-sm font-medium text-white mb-2">
                Weather Trends
              </h3>
              <p className="text-xs text-gray-400 mb-2">
                Based on historical data, the best time to visit Tokyo is in
                April or October.
              </p>
              <div className="h-32 bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-xs text-gray-400">
                  Weather trend chart
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Weather;