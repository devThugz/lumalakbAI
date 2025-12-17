import React, { useState } from 'react';
import { MessageCircleIcon, UsersIcon, CalendarIcon, MapPinIcon, PlusIcon, ArchiveIcon, ClockIcon, DollarSignIcon, SendIcon, XIcon, SparklesIcon, PhoneIcon, StarIcon, PlaneIcon, HeartIcon, FilterIcon, SearchIcon, EyeIcon, RefreshCwIcon, CheckIcon, UserPlusIcon } from 'lucide-react';
const Connect = () => {
  const [showCreateTour, setShowCreateTour] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [selectedBuddy, setSelectedBuddy] = useState<any>(null);
  const [showBuddyProfile, setShowBuddyProfile] = useState(false);
  const [showArchive, setShowArchive] = useState(false);
  const [showLatestVisit, setShowLatestVisit] = useState(false);
  const [showCostHistory, setShowCostHistory] = useState(false);
  const [showFindMore, setShowFindMore] = useState(false);
  const [showParticipants, setShowParticipants] = useState(false);
  const [selectedTour, setSelectedTour] = useState<any>(null);
  const [joinedTours, setJoinedTours] = useState<number[]>([]);
  const travelers = [{
    name: 'Maria Santos',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    destination: 'Siargao',
    interests: ['Surfing', 'Photography'],
    bio: 'Adventure seeker and beach lover. Always looking for the next wave!',
    match: 92,
    tripsCompleted: 15,
    countries: 8,
    sharedTrips: 3,
    lastVisit: '2 days ago',
    totalCost: '₱45,000'
  }, {
    name: 'John Rivera',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    destination: 'Palawan',
    interests: ['Diving', 'Adventure'],
    bio: 'Scuba diving enthusiast exploring underwater wonders.',
    match: 87,
    tripsCompleted: 12,
    countries: 6,
    sharedTrips: 2,
    lastVisit: '1 week ago',
    totalCost: '₱38,500'
  }, {
    name: 'Lisa Chen',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    destination: 'Bohol',
    interests: ['Culture', 'Food'],
    bio: 'Foodie traveler discovering local cuisines and traditions.',
    match: 84,
    tripsCompleted: 10,
    countries: 5,
    sharedTrips: 1,
    lastVisit: '3 days ago',
    totalCost: '₱32,000'
  }, {
    name: 'Carlos Diaz',
    photo: 'https://randomuser.me/api/portraits/men/45.jpg',
    destination: 'Cebu',
    interests: ['Beaches', 'Nightlife'],
    bio: 'Beach party enthusiast and social butterfly.',
    match: 79,
    tripsCompleted: 8,
    countries: 4,
    sharedTrips: 1,
    lastVisit: '2 weeks ago',
    totalCost: '₱28,000'
  }];
  const archivedBuddies = [{
    name: 'Ana Rodriguez',
    photo: 'https://randomuser.me/api/portraits/women/25.jpg',
    destination: 'Boracay',
    bio: 'Former travel companion from Boracay trip 2023',
    lastTrip: 'March 2023',
    interests: ['Beach', 'Photography']
  }, {
    name: 'Mike Johnson',
    photo: 'https://randomuser.me/api/portraits/men/52.jpg',
    destination: 'Manila',
    bio: 'Met during Manila city tour',
    lastTrip: 'January 2023',
    interests: ['Culture', 'Food']
  }];
  const visitedSpots = [{
    name: 'Tinuy-an Falls',
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=400',
    lastVisit: '2 days ago',
    cost: '₱250',
    rating: 4.9
  }, {
    name: 'Britania Islands',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400',
    lastVisit: '1 week ago',
    cost: '₱1,500',
    rating: 4.8
  }, {
    name: 'Enchanted River',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400',
    lastVisit: '3 days ago',
    cost: '₱150',
    rating: 5.0
  }, {
    name: 'Sohoton Cove',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    lastVisit: '2 weeks ago',
    cost: '₱1,200',
    rating: 4.7
  }];
  const groupTours = [{
    id: 1,
    title: 'Island Hopping Adventure',
    date: 'Dec 25, 2024',
    duration: '3 Days',
    location: 'Britania Islands',
    slots: 8,
    total: 12,
    price: '₱5,500',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400',
    description: 'Explore pristine islands with crystal clear waters. Perfect for families and beginners.',
    highlights: ['Snorkeling', 'Beach BBQ', 'Sunset Cruise'],
    included: ['Boat transfers', 'Lunch', 'Snorkel gear', 'Guide'],
    participants: [{
      name: 'Maria Santos',
      photo: 'https://randomuser.me/api/portraits/women/44.jpg',
      role: 'Tour Leader'
    }, {
      name: 'John Rivera',
      photo: 'https://randomuser.me/api/portraits/men/32.jpg',
      role: 'Participant'
    }, {
      name: 'Lisa Chen',
      photo: 'https://randomuser.me/api/portraits/women/68.jpg',
      role: 'Participant'
    }, {
      name: 'Carlos Diaz',
      photo: 'https://randomuser.me/api/portraits/men/45.jpg',
      role: 'Participant'
    }]
  }, {
    id: 2,
    title: 'Waterfall Trekking',
    date: 'Dec 28, 2024',
    duration: '1 Day',
    location: 'Tinuy-an Falls',
    slots: 5,
    total: 10,
    price: '₱2,800',
    difficulty: 'Moderate',
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=400',
    description: 'Trek through lush forests to the stunning Tinuy-an Falls. Moderate fitness required.',
    highlights: ['Waterfall Swimming', 'Nature Photography', 'Local Lunch'],
    included: ['Transport', 'Guide', 'Entrance fees', 'Lunch'],
    participants: [{
      name: 'Maria Santos',
      photo: 'https://randomuser.me/api/portraits/women/44.jpg',
      role: 'Tour Leader'
    }, {
      name: 'John Rivera',
      photo: 'https://randomuser.me/api/portraits/men/32.jpg',
      role: 'Participant'
    }, {
      name: 'Ana Rodriguez',
      photo: 'https://randomuser.me/api/portraits/women/25.jpg',
      role: 'Participant'
    }, {
      name: 'Mike Johnson',
      photo: 'https://randomuser.me/api/portraits/men/52.jpg',
      role: 'Participant'
    }, {
      name: 'Sarah Kim',
      photo: 'https://randomuser.me/api/portraits/women/33.jpg',
      role: 'Participant'
    }]
  }, {
    id: 3,
    title: 'Sunset Beach Party',
    date: 'Dec 31, 2024',
    duration: '1 Night',
    location: 'Cagwait Beach',
    slots: 15,
    total: 20,
    price: '₱1,500',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400',
    description: 'Ring in the New Year with beach games, bonfire, and live music under the stars.',
    highlights: ['Live Music', 'Beach Games', 'Bonfire', 'Fireworks'],
    included: ['Beach access', 'BBQ dinner', 'Drinks', 'Entertainment'],
    participants: [{
      name: 'Lisa Chen',
      photo: 'https://randomuser.me/api/portraits/women/68.jpg',
      role: 'Tour Leader'
    }, {
      name: 'Carlos Diaz',
      photo: 'https://randomuser.me/api/portraits/men/45.jpg',
      role: 'Participant'
    }, {
      name: 'Emma Wilson',
      photo: 'https://randomuser.me/api/portraits/women/34.jpg',
      role: 'Participant'
    }, {
      name: 'David Park',
      photo: 'https://randomuser.me/api/portraits/men/35.jpg',
      role: 'Participant'
    }]
  }];
  const handleBuddyClick = (buddy: any) => {
    setSelectedBuddy(buddy);
    setShowBuddyProfile(true);
  };
  const handleTourDetails = (tour: any) => {
    setSelectedTour(tour);
    setShowParticipants(true);
  };
  return <div className="space-y-4 sm:space-y-6">
      {/* Header with Action Buttons */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white flex items-center">
          <UsersIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mr-2 sm:mr-3 text-purple-400 flex-shrink-0" />
          <span>Connect with Travelers</span>
        </h1>
        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          <button onClick={() => {
          setShowArchive(true);
          setShowLatestVisit(false);
          setShowCostHistory(false);
          setShowFindMore(false);
        }} className="px-3 py-2 sm:px-4 sm:py-2 rounded-xl bg-gray-800/50 text-gray-400 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:text-white transition-all text-xs sm:text-sm font-medium flex items-center space-x-1 sm:space-x-2 border-2 border-white/20 hover:border-blue-500/70 shadow-lg flex-1 sm:flex-initial justify-center">
            <ArchiveIcon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span>Archive</span>
          </button>
          <button onClick={() => {
          setShowLatestVisit(true);
          setShowArchive(false);
          setShowCostHistory(false);
          setShowFindMore(false);
        }} className="px-3 py-2 sm:px-4 sm:py-2 rounded-xl bg-gray-800/50 text-gray-400 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:text-white transition-all text-xs sm:text-sm font-medium flex items-center space-x-1 sm:space-x-2 border-2 border-white/20 hover:border-blue-500/70 shadow-lg flex-1 sm:flex-initial justify-center">
            <ClockIcon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="hidden sm:inline">Latest Visit</span>
            <span className="sm:hidden">Latest</span>
          </button>
          <button onClick={() => {
          setShowCostHistory(true);
          setShowArchive(false);
          setShowLatestVisit(false);
          setShowFindMore(false);
        }} className="px-3 py-2 sm:px-4 sm:py-2 rounded-xl bg-gray-800/50 text-gray-400 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:text-white transition-all text-xs sm:text-sm font-medium flex items-center space-x-1 sm:space-x-2 border-2 border-white/20 hover:border-blue-500/70 shadow-lg flex-1 sm:flex-initial justify-center">
            <DollarSignIcon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="hidden sm:inline">Cost History</span>
            <span className="sm:hidden">Cost</span>
          </button>
          <button onClick={() => {
          setShowFindMore(true);
          setShowArchive(false);
          setShowLatestVisit(false);
          setShowCostHistory(false);
        }} className="px-3 py-2 sm:px-4 sm:py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all text-xs sm:text-sm font-medium flex items-center space-x-1 sm:space-x-2 border-2 border-blue-500/50 w-full sm:w-auto justify-center">
            <SearchIcon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span>Find More</span>
          </button>
        </div>
      </div>

      {/* Archive View */}
      {showArchive && <div className="rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border-2 border-blue-500/50 p-4 sm:p-6 shadow-2xl shadow-blue-500/20">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center">
              <ArchiveIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-blue-400" />
              Archived Buddies
            </h2>
            <button onClick={() => setShowArchive(false)} className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gray-700/50 hover:bg-gray-700 flex items-center justify-center transition-all border-2 border-white/20">
              <XIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {archivedBuddies.map((buddy, index) => <div key={index} className="relative overflow-hidden rounded-2xl border-2 border-white/20 hover:border-blue-500/70 transition-all group shadow-lg hover:shadow-blue-500/30">
                <div className="p-4 bg-gradient-to-br from-gray-800/90 to-gray-900/90">
                  <div className="flex items-center space-x-3 mb-3">
                    <img src={buddy.photo} alt={buddy.name} className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-blue-500/50 shadow-lg" />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-semibold truncate">
                        {buddy.name}
                      </h3>
                      <p className="text-xs text-gray-400 truncate">
                        Last trip: {buddy.lastTrip}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mb-3 line-clamp-2">
                    {buddy.bio}
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    <button onClick={() => handleBuddyClick(buddy)} className="py-2 rounded-xl bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-all text-xs font-medium border-2 border-blue-500/50 shadow-lg shadow-blue-500/20">
                      Profile
                    </button>
                    <button className="py-2 rounded-xl bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-all text-xs font-medium border-2 border-purple-500/50 shadow-lg shadow-purple-500/20">
                      Chat
                    </button>
                    <button className="py-2 rounded-xl bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-all text-xs font-medium border-2 border-green-500/50 shadow-lg shadow-green-500/20">
                      Filter
                    </button>
                  </div>
                </div>
              </div>)}
          </div>
        </div>}

      {/* Latest Visit View */}
      {showLatestVisit && <div className="rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border-2 border-cyan-500/50 p-4 sm:p-6 shadow-2xl shadow-cyan-500/20">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center">
              <ClockIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-cyan-400" />
              Recently Visited Spots
            </h2>
            <button onClick={() => setShowLatestVisit(false)} className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gray-700/50 hover:bg-gray-700 flex items-center justify-center transition-all border-2 border-white/20">
              <XIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {visitedSpots.map((spot, index) => <div key={index} className="relative overflow-hidden rounded-2xl border-2 border-white/20 hover:border-cyan-500/70 transition-all group shadow-lg hover:shadow-cyan-500/30">
                <div className="relative h-40 overflow-hidden">
                  <img src={spot.image} alt={spot.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm flex items-center space-x-1 border border-white/20">
                    <StarIcon className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-white text-xs font-bold">
                      {spot.rating}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white font-semibold mb-1 truncate">
                      {spot.name}
                    </h3>
                    <p className="text-xs text-cyan-400">
                      Visited: {spot.lastVisit}
                    </p>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-br from-gray-800/90 to-gray-900/90">
                  <div className="grid grid-cols-2 gap-2">
                    <button className="py-2 rounded-xl bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 transition-all text-xs font-medium border-2 border-cyan-500/50 shadow-lg shadow-cyan-500/20 flex items-center justify-center space-x-1">
                      <RefreshCwIcon className="w-3 h-3" />
                      <span>Visit Again</span>
                    </button>
                    <button className="py-2 rounded-xl bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-all text-xs font-medium border-2 border-blue-500/50 shadow-lg shadow-blue-500/20 flex items-center justify-center space-x-1">
                      <EyeIcon className="w-3 h-3" />
                      <span>Details</span>
                    </button>
                  </div>
                </div>
              </div>)}
          </div>
        </div>}

      {/* Cost History View */}
      {showCostHistory && <div className="rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border-2 border-green-500/50 p-4 sm:p-6 shadow-2xl shadow-green-500/20">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center">
              <DollarSignIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-green-400" />
              Spot Cost History
            </h2>
            <button onClick={() => setShowCostHistory(false)} className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gray-700/50 hover:bg-gray-700 flex items-center justify-center transition-all border-2 border-white/20">
              <XIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {visitedSpots.sort((a, b) => parseInt(b.cost.replace(/[^\d]/g, '')) - parseInt(a.cost.replace(/[^\d]/g, ''))).map((spot, index) => <div key={index} className="relative overflow-hidden rounded-2xl border-2 border-white/20 hover:border-green-500/70 transition-all group shadow-lg hover:shadow-green-500/30">
                  <div className="relative h-40 overflow-hidden">
                    <img src={spot.image} alt={spot.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-green-500/90 backdrop-blur-sm border border-green-400/50 shadow-lg">
                      <span className="text-white text-xs font-bold">
                        {spot.cost}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-semibold truncate">
                        {spot.name}
                      </h3>
                    </div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-gray-800/90 to-gray-900/90">
                    <button className="w-full py-2 rounded-xl bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-all text-sm font-medium border-2 border-green-500/50 shadow-lg shadow-green-500/20">
                      View Cost Breakdown
                    </button>
                  </div>
                </div>)}
          </div>
        </div>}

      {/* Find More Buddies */}
      {showFindMore && <div className="rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border-2 border-pink-500/50 p-4 sm:p-6 shadow-2xl shadow-pink-500/20">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center">
              <SearchIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-pink-400" />
              Find More Buddies
            </h2>
            <button onClick={() => setShowFindMore(false)} className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gray-700/50 hover:bg-gray-700 flex items-center justify-center transition-all border-2 border-white/20">
              <XIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Travel Style
              </label>
              <select className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border-2 border-white/20 text-white focus:outline-none focus:border-pink-500/70 transition-all shadow-lg">
                <option>All Styles</option>
                <option>Adventure</option>
                <option>Relaxation</option>
                <option>Cultural</option>
                <option>Beach</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Interests
              </label>
              <select className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border-2 border-white/20 text-white focus:outline-none focus:border-pink-500/70 transition-all shadow-lg">
                <option>All Interests</option>
                <option>Surfing</option>
                <option>Diving</option>
                <option>Photography</option>
                <option>Food</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Location
              </label>
              <select className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border-2 border-white/20 text-white focus:outline-none focus:border-pink-500/70 transition-all shadow-lg">
                <option>All Locations</option>
                <option>Siargao</option>
                <option>Palawan</option>
                <option>Bohol</option>
                <option>Cebu</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {travelers.map((traveler, index) => <div key={index} className="relative overflow-hidden rounded-2xl border-2 border-white/20 hover:border-pink-500/70 transition-all group shadow-lg hover:shadow-pink-500/30">
                <div className="relative h-48 overflow-hidden">
                  <img src={traveler.photo} alt={traveler.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold shadow-lg border border-white/20">
                    {traveler.match}% Match
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-br from-gray-800/90 to-gray-900/90">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {traveler.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3 flex items-center">
                    <MapPinIcon className="w-3 h-3 mr-1" />
                    Going to {traveler.destination}
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    <button onClick={() => handleBuddyClick(traveler)} className="py-2 rounded-xl bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-all text-xs font-medium border-2 border-blue-500/50 shadow-lg shadow-blue-500/20">
                      Profile
                    </button>
                    <button onClick={() => {
                setSelectedBuddy(traveler);
                setShowChat(true);
              }} className="py-2 rounded-xl bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-all text-xs font-medium border-2 border-purple-500/50 shadow-lg shadow-purple-500/20">
                      Chat
                    </button>
                    <button className="py-2 rounded-xl bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-all text-xs font-medium border-2 border-green-500/50 shadow-lg shadow-green-500/20">
                      Filter
                    </button>
                  </div>
                </div>
              </div>)}
          </div>
        </div>}

      {/* Travel Buddies */}
      {!showArchive && !showLatestVisit && !showCostHistory && !showFindMore && <div className="rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border-2 border-purple-500/50 p-4 sm:p-6 shadow-2xl shadow-purple-500/20">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center">
                <SparklesIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-purple-400" />
                Travel Buddies
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {travelers.map((traveler, index) => <div key={index} onClick={() => handleBuddyClick(traveler)} className="relative overflow-hidden rounded-2xl border-2 border-white/20 hover:border-purple-500/70 transition-all hover:shadow-2xl hover:shadow-purple-500/30 group cursor-pointer">
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold shadow-lg z-10 border border-white/20">
                    {traveler.match}% Match
                  </div>
                  <div className="relative h-48 overflow-hidden">
                    <img src={traveler.photo} alt={traveler.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>
                  <div className="p-4 bg-gradient-to-br from-gray-800/90 to-gray-900/90">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {traveler.name}
                    </h3>
                    <p className="text-sm text-gray-400 mb-2 flex items-center">
                      <MapPinIcon className="w-3 h-3 mr-1" />
                      Going to {traveler.destination}
                    </p>
                    <p className="text-xs text-gray-500 mb-3 line-clamp-2">
                      {traveler.bio}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {traveler.interests.map((interest, i) => <span key={i} className="px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-medium border border-cyan-500/50">
                          {interest}
                        </span>)}
                    </div>
                    <div className="flex space-x-2">
                      <button onClick={e => {
                e.stopPropagation();
                setSelectedBuddy(traveler);
                setShowChat(true);
              }} className="flex-1 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all text-sm font-medium border-2 border-purple-500/50">
                        Message
                      </button>
                      <button className="px-3 py-2 rounded-xl bg-gray-700/50 text-gray-300 hover:bg-gray-700 transition-all border-2 border-white/20">
                        <UsersIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>}

      {/* Upcoming Group Tours */}
      <div className="rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border-2 border-cyan-500/50 p-4 sm:p-6 shadow-2xl shadow-cyan-500/20">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center">
            <CalendarIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-cyan-400" />
            Upcoming Group Tours
          </h2>
          <button onClick={() => setShowCreateTour(true)} className="px-3 py-2 sm:px-4 sm:py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all text-xs sm:text-sm font-medium flex items-center space-x-1 sm:space-x-2 border-2 border-cyan-500/50">
            <PlusIcon className="w-4 h-4" />
            <span>Create Tour</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {groupTours.map((tour, index) => <div key={index} className="rounded-2xl overflow-hidden border-2 border-white/20 hover:border-cyan-500/70 transition-all hover:shadow-2xl hover:shadow-cyan-500/30 group">
              <div className="relative h-40 overflow-hidden">
                <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="p-4 bg-gradient-to-br from-gray-800/90 to-gray-900/90">
                <h3 className="text-lg font-semibold text-white mb-2 truncate">
                  {tour.title}
                </h3>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-400 flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-2 text-cyan-400 flex-shrink-0" />
                    {tour.date}
                  </p>
                  <p className="text-sm text-gray-400 flex items-center">
                    <MapPinIcon className="w-4 h-4 mr-2 text-purple-400 flex-shrink-0" />
                    {tour.location}
                  </p>
                  <p className="text-sm text-gray-400">
                    <span className="text-cyan-400 font-bold">
                      {tour.slots}
                    </span>{' '}
                    / {tour.total} slots available
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all text-sm font-medium border-2 border-cyan-500/50">
                    Join Tour
                  </button>
                  <button onClick={() => handleTourDetails(tour)} className="px-3 py-2 rounded-xl bg-gray-700/50 text-gray-300 hover:bg-gray-700 transition-all text-sm font-medium border-2 border-white/20">
                    Details
                  </button>
                </div>
              </div>
            </div>)}
        </div>
      </div>

      {/* Buddy Profile Modal */}
      {showBuddyProfile && selectedBuddy && <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="w-full max-w-3xl rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl border-2 border-purple-500/50 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            <div className="relative h-40 sm:h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"></div>
              <button onClick={() => setShowBuddyProfile(false)} className="absolute top-4 right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-black/50 hover:bg-black/70 flex items-center justify-center transition-all backdrop-blur-sm border-2 border-white/20">
                <XIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </button>
            </div>
            <div className="relative px-4 sm:px-8 pb-6 sm:pb-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-end -mt-12 sm:-mt-16 mb-6 text-center sm:text-left">
                <img src={selectedBuddy.photo} alt={selectedBuddy.name} className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-gray-900 shadow-2xl" />
                <div className="mt-3 sm:mt-0 sm:ml-6 flex-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">
                    {selectedBuddy.name}
                  </h2>
                  <p className="text-gray-400 flex items-center justify-center sm:justify-start text-sm sm:text-base">
                    <MapPinIcon className="w-4 h-4 mr-2" />
                    Currently in {selectedBuddy.destination}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
                <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-500/50 shadow-lg text-center sm:text-left">
                  <PlaneIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mb-1 sm:mb-2 mx-auto sm:mx-0" />
                  <p className="text-xl sm:text-2xl font-bold text-white">
                    {selectedBuddy.tripsCompleted}
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-400">
                    Trips Completed
                  </p>
                </div>
                <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/50 shadow-lg text-center sm:text-left">
                  <MapPinIcon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mb-1 sm:mb-2 mx-auto sm:mx-0" />
                  <p className="text-xl sm:text-2xl font-bold text-white">
                    {selectedBuddy.countries}
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-400">
                    Countries Visited
                  </p>
                </div>
                <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-green-500/20 to-teal-500/20 border-2 border-green-500/50 shadow-lg text-center sm:text-left">
                  <HeartIcon className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mb-1 sm:mb-2 mx-auto sm:mx-0" />
                  <p className="text-xl sm:text-2xl font-bold text-white">
                    {selectedBuddy.sharedTrips}
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-400">
                    Shared Trips
                  </p>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-2 sm:mb-3">
                  About
                </h3>
                <p className="text-sm sm:text-base text-gray-300">
                  {selectedBuddy.bio}
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-2 sm:mb-3">
                  Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedBuddy.interests?.map((interest: string, i: number) => <span key={i} className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-cyan-500/20 text-cyan-400 text-xs sm:text-sm font-medium border-2 border-cyan-500/50 shadow-lg">
                        {interest}
                      </span>)}
                </div>
              </div>
              <div className="flex space-x-3">
                <button onClick={() => {
              setShowBuddyProfile(false);
              setShowChat(true);
            }} className="flex-1 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center space-x-2 border-2 border-purple-500/50 text-sm sm:text-base">
                  <MessageCircleIcon className="w-5 h-5" />
                  <span>Chat</span>
                </button>
                <button className="flex-1 py-3 rounded-xl bg-blue-500/20 text-blue-400 border-2 border-blue-500/50 font-semibold hover:bg-blue-500/30 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/20 text-sm sm:text-base">
                  <PhoneIcon className="w-5 h-5" />
                  <span>Contact</span>
                </button>
              </div>
            </div>
          </div>
        </div>}

      {/* Group Tour Participants Modal */}
      {showParticipants && selectedTour && <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="w-full max-w-3xl rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl border-2 border-cyan-500/50 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                    {selectedTour.title}
                  </h2>
                  <p className="text-sm text-gray-400 flex items-center">
                    <MapPinIcon className="w-4 h-4 mr-2" />
                    {selectedTour.location}
                  </p>
                </div>
                <button onClick={() => setShowParticipants(false)} className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gray-700/50 hover:bg-gray-700 flex items-center justify-center transition-all border-2 border-white/20">
                  <XIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
                </button>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg font-bold text-white mb-4">
                Participants ({selectedTour.participants.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedTour.participants.map((participant: any, index: number) => <div key={index} className="p-4 rounded-2xl bg-gray-800/50 border-2 border-white/20 hover:border-cyan-500/70 transition-all shadow-lg">
                      <div className="flex items-center space-x-3 mb-3">
                        <img src={participant.photo} alt={participant.name} className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-cyan-500/50 shadow-lg" />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-semibold truncate">
                            {participant.name}
                          </h4>
                          <p className="text-xs text-gray-400">Participant</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <button onClick={() => {
                  setSelectedBuddy(participant);
                  setShowBuddyProfile(true);
                  setShowParticipants(false);
                }} className="py-2 rounded-xl bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-all text-xs font-medium border-2 border-blue-500/50 shadow-lg shadow-blue-500/20">
                          Profile
                        </button>
                        <button className="py-2 rounded-xl bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-all text-xs font-medium border-2 border-purple-500/50 shadow-lg shadow-purple-500/20">
                          Chat
                        </button>
                        <button className="py-2 rounded-xl bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-all text-xs font-medium border-2 border-green-500/50 shadow-lg shadow-green-500/20">
                          Contact
                        </button>
                      </div>
                    </div>)}
              </div>
            </div>
          </div>
        </div>}

      {/* Create Group Tour Modal */}
      {showCreateTour && <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="w-full max-w-2xl rounded-2xl bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl border-2 border-blue-500/50 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Create Group Tour
              </h3>
              <button onClick={() => setShowCreateTour(false)} className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gray-700/50 hover:bg-gray-700 flex items-center justify-center transition-all border-2 border-white/20">
                <XIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Tour Name
                </label>
                <input type="text" placeholder="e.g., Island Hopping Adventure" className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border-2 border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/70 transition-all shadow-lg text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Destination
                </label>
                <input type="text" placeholder="e.g., Britania Islands" className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border-2 border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/70 transition-all shadow-lg text-sm" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Date
                  </label>
                  <input type="date" className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border-2 border-white/20 text-white focus:outline-none focus:border-blue-500/70 transition-all shadow-lg text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Max Members
                  </label>
                  <input type="number" placeholder="12" className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border-2 border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/70 transition-all shadow-lg text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Description
                </label>
                <textarea rows={4} placeholder="Tell others about this tour..." className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border-2 border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/70 transition-all resize-none shadow-lg text-sm" />
              </div>
              <button className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all font-medium border-2 border-cyan-500/50 text-base">
                Create Tour
              </button>
            </div>
          </div>
        </div>}

      {/* Chat Modal */}
      {showChat && selectedBuddy && <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="w-full max-w-2xl h-[80vh] sm:h-[600px] rounded-2xl bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl border-2 border-purple-500/50 shadow-2xl flex flex-col overflow-hidden">
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <img src={selectedBuddy.photo} alt={selectedBuddy.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-purple-500/50 shadow-lg" />
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {selectedBuddy.name}
                  </h3>
                  <p className="text-xs text-gray-400">Active now</p>
                </div>
              </div>
              <button onClick={() => setShowChat(false)} className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gray-700/50 hover:bg-gray-700 flex items-center justify-center transition-all border-2 border-white/20">
                <XIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-gray-900/50">
              <div className="flex justify-start">
                <div className="max-w-[85%] sm:max-w-[70%] rounded-2xl p-3 sm:p-4 bg-gray-800/80 border-2 border-white/20 shadow-lg">
                  <p className="text-xs sm:text-sm text-gray-200">
                    Hey! I saw we're both heading to {selectedBuddy.destination}
                    . Want to explore together?
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-500 mt-2">
                    10:30 AM
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 sm:p-6 border-t border-white/10 bg-gray-900/50">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <input type="text" placeholder="Type a message..." className="flex-1 px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-gray-800/50 border-2 border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/70 transition-all shadow-lg text-sm" />
                <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/50 flex items-center justify-center transition-all border-2 border-purple-500/50 flex-shrink-0">
                  <SendIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>}
    </div>;
};
export default Connect;