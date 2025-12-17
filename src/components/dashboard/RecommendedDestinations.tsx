import React from 'react';
import { StarIcon, MapPinIcon, CalendarIcon } from 'lucide-react';
const RecommendedDestinations = () => {
  const destinations = [{
    id: 1,
    name: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    type: 'Beach',
    bestTime: 'May-September',
    match: 92
  }, {
    id: 2,
    name: 'Kyoto, Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    type: 'Cultural',
    bestTime: 'March-May',
    match: 87
  }, {
    id: 3,
    name: 'Banff, Canada',
    image: 'https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    type: 'Adventure',
    bestTime: 'June-August',
    match: 84
  }];
  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
      {destinations.map(destination => <div key={destination.id} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-colors">
          <div className="relative h-32 sm:h-36">
            <img src={destination.image} alt={destination.name} className="w-full h-full object-cover" />
            <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded-full">
              {destination.match}% Match
            </div>
          </div>
          <div className="p-3">
            <h3 className="font-medium text-white text-sm sm:text-base line-clamp-1">
              {destination.name}
            </h3>
            <div className="flex items-center mt-1 text-xs">
              <StarIcon className="h-3 w-3 text-yellow-400 mr-1" />
              <span className="text-gray-300">{destination.rating}</span>
              <span className="mx-2 text-gray-500">•</span>
              <span className="text-gray-300">{destination.type}</span>
            </div>
            <div className="flex items-center mt-2 text-xs text-gray-400">
              <CalendarIcon className="h-3 w-3 mr-1 flex-shrink-0" />
              <span className="truncate">
                Best time: {destination.bestTime}
              </span>
            </div>
            <div className="mt-3 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs py-2 rounded-lg transition-colors">
                View Details
              </button>
              <button className="w-full sm:w-10 h-10 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-lg text-gray-300 transition-colors">
                <MapPinIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>)}
    </div>;
};
export default RecommendedDestinations;