import React from 'react';
import { MapPinIcon, HeartIcon, MessageCircleIcon, UserIcon } from 'lucide-react';
const Buddies = () => {
  const travelers = [{
    id: 1,
    name: 'Alex Chen',
    age: 28,
    location: 'Tokyo, Japan',
    interests: ['Photography', 'Hiking', 'Food'],
    compatibility: 92,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    traveling: 'June 15-22, 2023'
  }, {
    id: 2,
    name: 'Sarah Johnson',
    age: 31,
    location: 'Barcelona, Spain',
    interests: ['Architecture', 'Museums', 'Beaches'],
    compatibility: 87,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    traveling: 'July 3-12, 2023'
  }, {
    id: 3,
    name: 'Miguel Santos',
    age: 26,
    location: 'Rio de Janeiro, Brazil',
    interests: ['Surfing', 'Nightlife', 'Music'],
    compatibility: 78,
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    traveling: 'August 5-15, 2023'
  }, {
    id: 4,
    name: 'Emma Wilson',
    age: 29,
    location: 'Sydney, Australia',
    interests: ['Diving', 'Wildlife', 'Yoga'],
    compatibility: 85,
    avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
    traveling: 'September 10-20, 2023'
  }];
  return <div>
      <div className="bg-gray-900 p-4 rounded-xl mb-4">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-xl font-bold text-white mb-2">
              Travel Buddies
            </h1>
            <p className="text-gray-400">
              Find companions for your next adventure
            </p>
          </div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors">
              Find Matches
            </button>
            <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors">
              My Profile
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {travelers.map(traveler => <div key={traveler.id} className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-colors">
            <div className="relative h-40">
              <img src={traveler.avatar} alt={traveler.name} className="w-full h-full object-cover" />
              <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                {traveler.compatibility}% Match
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium text-white">
                  {traveler.name}, {traveler.age}
                </h3>
              </div>
              <div className="flex items-center text-xs text-gray-400 mb-2">
                <MapPinIcon className="h-3 w-3 mr-1" />
                <span>{traveler.location}</span>
              </div>
              <div className="mb-3">
                <div className="text-xs text-gray-500 mb-1">
                  Traveling: {traveler.traveling}
                </div>
                <div className="flex flex-wrap gap-1">
                  {traveler.interests.map((interest, idx) => <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-2 py-0.5 rounded">
                      {interest}
                    </span>)}
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="flex-1 flex items-center justify-center bg-pink-600 hover:bg-pink-700 text-white text-xs py-1.5 rounded transition-colors">
                  <HeartIcon className="h-3 w-3 mr-1" />
                  Connect
                </button>
                <button className="flex-1 flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-gray-300 text-xs py-1.5 rounded transition-colors">
                  <MessageCircleIcon className="h-3 w-3 mr-1" />
                  Message
                </button>
              </div>
            </div>
          </div>)}
      </div>
      <div className="bg-gray-900 rounded-xl p-4 mt-4">
        <h2 className="text-lg font-medium text-white mb-3">
          Upcoming Group Tours
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
            <div className="text-sm font-medium text-white mb-1">
              Tokyo Night Photography
            </div>
            <div className="text-xs text-gray-400 mb-2">
              June 18, 2023 • 8:00 PM
            </div>
            <div className="flex items-center text-xs text-gray-400 mb-3">
              <UserIcon className="h-3 w-3 mr-1" />
              <span>6 travelers joined</span>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs py-1.5 rounded transition-colors">
              Join Group
            </button>
          </div>
          <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
            <div className="text-sm font-medium text-white mb-1">
              Barcelona Tapas Crawl
            </div>
            <div className="text-xs text-gray-400 mb-2">
              July 5, 2023 • 7:00 PM
            </div>
            <div className="flex items-center text-xs text-gray-400 mb-3">
              <UserIcon className="h-3 w-3 mr-1" />
              <span>12 travelers joined</span>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs py-1.5 rounded transition-colors">
              Join Group
            </button>
          </div>
          <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
            <div className="text-sm font-medium text-white mb-1">
              Sydney Harbor Cruise
            </div>
            <div className="text-xs text-gray-400 mb-2">
              September 12, 2023 • 2:00 PM
            </div>
            <div className="flex items-center text-xs text-gray-400 mb-3">
              <UserIcon className="h-3 w-3 mr-1" />
              <span>8 travelers joined</span>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs py-1.5 rounded transition-colors">
              Join Group
            </button>
          </div>
        </div>
      </div>
    </div>;
};
export default Buddies;