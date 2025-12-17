import React from 'react';
import Map from '../components/map/Map';
const Explore = () => {
  return <div className="h-full">
      <div className="bg-gray-900 p-4 rounded-xl mb-4">
        <h1 className="text-xl font-bold text-white mb-2">
          Explore Destinations
        </h1>
        <p className="text-gray-400">
          Discover new places and plan your next adventure
        </p>
      </div>
      <div className="bg-gray-900 rounded-xl overflow-hidden h-[calc(100%-6rem)]">
        <Map />
      </div>
    </div>;
};
export default Explore;