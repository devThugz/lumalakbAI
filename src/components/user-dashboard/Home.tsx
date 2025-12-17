import React, { useState } from 'react';
import { MapPinIcon, CloudSunIcon, CalendarIcon, PlaneIcon, ArrowRightIcon, StarIcon, SparklesIcon, SunIcon, UsersIcon, MessageCircleIcon, XIcon, SendIcon } from 'lucide-react';
interface HomeProps {
  onNavigate?: (tab: string) => void;
}
const Home = ({
  onNavigate
}: HomeProps) => {
  const [selectedBuddy, setSelectedBuddy] = useState<any>(null);
  const [message, setMessage] = useState('');
  const connectedBuddies = [{
    name: 'Maria Santos',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    destination: 'Siargao',
    status: 'online',
    lastMessage: "Hey! I saw we're both heading to Siargao. Want to explore together?",
    time: '10:30 AM'
  }, {
    name: 'John Rivera',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    destination: 'Palawan',
    status: 'online',
    lastMessage: 'Looking forward to the trip!',
    time: '9:15 AM'
  }, {
    name: 'Lisa Chen',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    destination: 'Bohol',
    status: 'offline',
    lastMessage: 'Thanks for the recommendations!',
    time: 'Yesterday'
  }];
  const previousTrips = [{
    destination: 'Boracay Island',
    date: 'Oct 2024',
    cost: 15750,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400'
  }, {
    destination: 'Palawan',
    date: 'Aug 2024',
    cost: 22400,
    image: 'https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=400'
  }, {
    destination: 'Cebu',
    date: 'Jun 2024',
    cost: 12300,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400'
  }];
  const recommendedDestinations = [{
    name: 'Tinuy-an Falls',
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800',
    distance: '12 km',
    season: 'Summer',
    rating: 4.9
  }, {
    name: 'Britania Islands',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
    distance: '45 km',
    season: 'Summer',
    rating: 4.8
  }, {
    name: 'Enchanted River',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
    distance: '28 km',
    season: 'All Year',
    rating: 5.0
  }, {
    name: 'Sohoton Cove',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    distance: '52 km',
    season: 'Dry Season',
    rating: 4.7
  }];
  const handleChatClick = (buddy: any) => {
    setSelectedBuddy(buddy);
  };
  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Sending message:', message, 'to', selectedBuddy.name);
      setMessage('');
    }
  };
  const handleViewItinerary = () => {
    if (onNavigate) {
      onNavigate('trips');
    }
  };
  const handleExploreDestination = () => {
    if (onNavigate) {
      onNavigate('explore');
    }
  };
  return <div className="space-y-4 sm:space-y-6">
      {/* Welcome Section */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-teal-600 via-orange-500 to-amber-500 p-4 sm:p-6 md:p-8 shadow-2xl shadow-teal-500/30">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="relative">
          <div className="flex items-center space-x-2 mb-1 sm:mb-2">
            <SparklesIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-300 animate-pulse" />
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
              Welcome back, Explorer!
            </h1>
          </div>
          <p className="text-sm sm:text-base text-white/90">
            Ready for your next adventure in Siargao? ✈️
          </p>
        </div>
      </div>

      {/* Weather Alerts */}
      <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-amber-500/50 p-3 sm:p-4 md:p-6 shadow-2xl shadow-amber-500/20">
        <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
          <div className="flex-shrink-0 p-2 sm:p-2.5 md:p-3 rounded-xl sm:rounded-2xl bg-amber-500/20 border border-amber-500/50 shadow-lg shadow-amber-500/30">
            <CloudSunIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-amber-400" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1 sm:mb-2">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white">
                Weather Alert
              </h3>
              <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-medium border border-amber-500/50">
                Today
              </span>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm mb-2 sm:mb-3">
              ⚠️ Rain expected at 3 PM in Siargao. Your itinerary has been
              automatically updated.
            </p>
            <button onClick={handleViewItinerary} className="text-teal-400 text-xs sm:text-sm font-medium hover:text-teal-300 transition-colors flex items-center space-x-1 group">
              <span>View Updated Itinerary</span>
              <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Left Column - Connected Travel Buddies */}
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-green-500/50 p-3 sm:p-4 md:p-6 shadow-2xl shadow-green-500/20">
          <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white flex items-center">
              <UsersIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 text-green-400" />
              <span className="hidden sm:inline">Connected Buddies</span>
              <span className="sm:hidden">Buddies</span>
            </h2>
            <button className="px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-lg sm:rounded-xl bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-all border border-green-500/50 text-xs sm:text-sm font-medium flex items-center space-x-1 group shadow-lg shadow-green-500/20">
              <span>More</span>
              <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            {connectedBuddies.map((buddy, index) => <div key={index} className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/20 hover:border-green-500/70 transition-all group bg-gradient-to-br from-gray-800/90 to-gray-900/90 shadow-lg hover:shadow-green-500/30">
                <div className="p-2 sm:p-3 md:p-4">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="relative flex-shrink-0">
                      <img src={buddy.photo} alt={buddy.name} className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-green-500/50 shadow-lg" />
                      <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full border-2 border-gray-900 shadow-lg ${buddy.status === 'online' ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`}></span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-semibold text-sm sm:text-base truncate">
                        {buddy.name}
                      </h3>
                      <p className="text-xs text-gray-400 flex items-center">
                        <MapPinIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1 flex-shrink-0" />
                        <span className="truncate">
                          Going to {buddy.destination}
                        </span>
                      </p>
                    </div>
                    <button onClick={() => handleChatClick(buddy)} className="px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-lg sm:rounded-xl bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-all text-xs sm:text-sm font-medium border border-green-500/50 shadow-lg shadow-green-500/20 flex items-center space-x-1 flex-shrink-0">
                      <MessageCircleIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">Chat</span>
                    </button>
                  </div>
                </div>
              </div>)}
          </div>
        </div>

        {/* Right Column - Previous Trips */}
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-orange-500/50 p-3 sm:p-4 md:p-6 shadow-2xl shadow-orange-500/20">
          <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white flex items-center">
              <PlaneIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 text-orange-400" />
              <span className="hidden sm:inline">Previous Trips</span>
              <span className="sm:hidden">Trips</span>
            </h2>
          </div>
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            {previousTrips.map((trip, index) => <div key={index} className="group rounded-xl sm:rounded-2xl overflow-hidden border border-white/20 hover:border-orange-500/70 transition-all shadow-lg hover:shadow-orange-500/30">
                <div className="flex items-center">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0 overflow-hidden">
                    <img src={trip.image} alt={trip.destination} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                  </div>
                  <div className="flex-1 p-2 sm:p-3 md:p-4 bg-gradient-to-br from-gray-800/90 to-gray-900/90 min-w-0">
                    <h3 className="text-white font-semibold mb-1 text-sm sm:text-base truncate">
                      {trip.destination}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm text-gray-400">
                        {trip.date}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-orange-400">
                        ₱{trip.cost.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>

      {/* Recommended Destinations Based on Season */}
      <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-teal-500/50 p-3 sm:p-4 md:p-6 shadow-2xl shadow-teal-500/20">
        <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white flex items-center">
            <SunIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 text-amber-400" />
            <span className="hidden sm:inline">Summer Destinations</span>
            <span className="sm:hidden">Summer Spots</span>
          </h2>
          <button className="text-teal-400 text-xs sm:text-sm font-medium hover:text-teal-300 transition-colors flex items-center space-x-1 group">
            <span>View All</span>
            <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
          {recommendedDestinations.map((dest, index) => <div key={index} className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/20 hover:border-teal-500/70 transition-all hover:shadow-2xl hover:shadow-teal-500/30">
              <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden">
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute top-2 right-2 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-black/50 backdrop-blur-sm flex items-center space-x-0.5 sm:space-x-1 shadow-lg border border-white/20">
                  <StarIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-400 fill-current" />
                  <span className="text-white text-xs font-bold">
                    {dest.rating}
                  </span>
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-0.5 sm:mb-1 line-clamp-1">
                    {dest.name}
                  </h3>
                  <p className="text-xs text-white/90 flex items-center">
                    <MapPinIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />
                    {dest.distance} away
                  </p>
                </div>
              </div>
              <div className="p-2 sm:p-3 md:p-4 bg-gradient-to-br from-gray-800/90 to-gray-900/90">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-medium border border-amber-500/50 truncate">
                    {dest.season}
                  </span>
                  <button onClick={handleExploreDestination} className="px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-lg sm:rounded-xl bg-gradient-to-r from-teal-500 to-orange-500 text-white hover:shadow-lg hover:shadow-teal-500/50 transition-all text-xs sm:text-sm font-medium flex-shrink-0">
                    Explore
                  </button>
                </div>
              </div>
            </div>)}
        </div>
      </div>

      {/* Chat Modal */}
      {selectedBuddy && <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative w-full max-w-2xl rounded-2xl bg-gradient-to-br from-gray-800/98 to-gray-900/98 backdrop-blur-2xl border-2 border-blue-500/50 shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img src={selectedBuddy.photo} alt={selectedBuddy.name} className="w-12 h-12 rounded-full object-cover border-2 border-green-500/50" />
                  <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-gray-900 ${selectedBuddy.status === 'online' ? 'bg-green-500' : 'bg-gray-500'}`}></span>
                </div>
                <div>
                  <h3 className="text-white font-bold">{selectedBuddy.name}</h3>
                  <p className="text-xs text-gray-400">
                    {selectedBuddy.status === 'online' ? 'Active now' : 'Offline'}
                  </p>
                </div>
              </div>
              <button onClick={() => setSelectedBuddy(null)} className="w-10 h-10 rounded-xl bg-gray-700/50 hover:bg-gray-700 flex items-center justify-center transition-all border border-white/20">
                <XIcon className="w-5 h-5 text-gray-300" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              <div className="flex justify-start">
                <div className="max-w-[80%] bg-gray-700/50 backdrop-blur-sm rounded-2xl rounded-tl-sm p-3 border border-white/10">
                  <p className="text-white text-sm">
                    {selectedBuddy.lastMessage}
                  </p>
                  <span className="text-xs text-gray-400 mt-1 block">
                    {selectedBuddy.time}
                  </span>
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex items-center space-x-2">
                <input type="text" value={message} onChange={e => setMessage(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSendMessage()} placeholder="Type a message..." className="flex-1 px-4 py-3 rounded-xl bg-gray-700/50 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 transition-all" />
                <button onClick={handleSendMessage} className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center justify-center">
                  <SendIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>}
    </div>;
};
export default Home;