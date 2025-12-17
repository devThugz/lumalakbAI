import React, { useState } from 'react';
import { UserIcon, SettingsIcon, MapPinIcon, HeartIcon, BellIcon, GlobeIcon, ShieldIcon, CameraIcon, CheckCircleIcon, TrophyIcon, StarIcon, AwardIcon } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
const Profile = () => {
  const {
    user,
    logout
  } = useAuth();
  const [activeSection, setActiveSection] = useState('preferences');
  const savedDestinations = [{
    name: 'Tinuy-an Falls',
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=400',
    location: 'Surigao del Sur',
    description: 'Majestic three-tiered waterfall',
    rating: 4.9
  }, {
    name: 'Britania Islands',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400',
    location: 'Surigao del Sur',
    description: 'Pristine island paradise',
    rating: 4.8
  }, {
    name: 'Enchanted River',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400',
    location: 'Surigao del Sur',
    description: 'Crystal clear blue waters',
    rating: 5.0
  }, {
    name: 'Sohoton Cove',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    location: 'Surigao del Norte',
    description: 'Hidden lagoons and caves',
    rating: 4.7
  }];
  const achievements = [{
    title: 'Explorer',
    icon: TrophyIcon,
    description: '10+ trips completed',
    color: 'from-yellow-500 to-orange-500'
  }, {
    title: 'Globetrotter',
    icon: GlobeIcon,
    description: 'Visited 5+ countries',
    color: 'from-blue-500 to-cyan-500'
  }, {
    title: 'Social Butterfly',
    icon: StarIcon,
    description: 'Connected with 20+ buddies',
    color: 'from-purple-500 to-pink-500'
  }];
  return <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white flex items-center">
          <UserIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mr-2 sm:mr-3 text-teal-400" />
          My Profile
        </h1>
        <button onClick={logout} className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all text-xs sm:text-sm font-medium border border-red-500/30">
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-teal-500/30 p-4 sm:p-6 shadow-2xl">
            <div className="text-center">
              <div className="relative inline-block mb-3 sm:mb-4">
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-teal-500/50 shadow-lg shadow-teal-500/30">
                  {user?.photoUrl ? <img src={user.photoUrl} alt={user.name} className="w-full h-full object-cover" /> : <div className="w-full h-full bg-gradient-to-br from-teal-500 to-orange-500 flex items-center justify-center">
                      <UserIcon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white" />
                    </div>}
                </div>
                <button className="absolute bottom-0 right-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-teal-500 to-orange-500 hover:shadow-lg hover:shadow-teal-500/50 flex items-center justify-center transition-all">
                  <CameraIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </button>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
                {user?.name}
              </h2>
              <p className="text-sm sm:text-base text-gray-400 mb-2">
                {user?.email}
              </p>
              <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">
                <MapPinIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Cagwait, Surigao del Sur</span>
              </div>

              {/* Travel Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30">
                  <p className="text-xl sm:text-2xl font-bold text-teal-400">
                    12
                  </p>
                  <p className="text-xs text-gray-400">Trips</p>
                </div>
                <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/30">
                  <p className="text-xl sm:text-2xl font-bold text-orange-400">
                    8
                  </p>
                  <p className="text-xs text-gray-400">Countries</p>
                </div>
                <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-500/20 to-teal-500/20 border border-green-500/30">
                  <p className="text-xl sm:text-2xl font-bold text-green-400">
                    24K
                  </p>
                  <p className="text-xs text-gray-400">Miles</p>
                </div>
              </div>

              {/* Loyalty Progress */}
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <TrophyIcon className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      Gold Status
                    </span>
                  </div>
                  <span className="text-xs text-amber-400">2,450 pts</span>
                </div>
                <div className="h-2 w-full bg-gray-700/50 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full shadow-lg shadow-amber-500/50"></div>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  550 pts to Platinum
                </p>
              </div>

              <div className="space-y-2">
                <button onClick={() => setActiveSection('preferences')} className={`w-full py-2 rounded-lg sm:rounded-xl transition-all text-xs sm:text-sm font-medium ${activeSection === 'preferences' ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30' : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 border border-white/10'}`}>
                  Travel Preferences
                </button>
                <button onClick={() => setActiveSection('settings')} className={`w-full py-2 rounded-lg sm:rounded-xl transition-all text-xs sm:text-sm font-medium ${activeSection === 'settings' ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30' : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 border border-white/10'}`}>
                  Account Settings
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          {activeSection === 'preferences' && <>
              {/* Achievements */}
              <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-yellow-500/30 p-4 sm:p-6 shadow-2xl">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center">
                  <AwardIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-yellow-400" />
                  Achievements
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                  {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return <div key={index} className="p-3 sm:p-4 rounded-2xl bg-gray-800/50 border border-white/10 hover:border-yellow-500/50 transition-all group">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-3 sm:mb-4 shadow-lg`}>
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <h4 className="text-white font-semibold mb-1">
                          {achievement.title}
                        </h4>
                        <p className="text-xs text-gray-400">
                          {achievement.description}
                        </p>
                      </div>;
              })}
                </div>
              </div>

              {/* Travel Preferences */}
              <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-blue-500/30 p-4 sm:p-6 shadow-2xl">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center">
                  <GlobeIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-blue-400" />
                  Travel Preferences
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                      Travel Interests
                    </label>
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      {['Beach', 'Mountain', 'Culture', 'Adventure', 'Food', 'Nature'].map(interest => <button key={interest} className="py-2 px-3 sm:px-4 rounded-lg sm:rounded-xl bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-all text-xs sm:text-sm font-medium flex items-center justify-between border border-blue-500/30">
                          <span>{interest}</span>
                          <CheckCircleIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>)}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                      Preferred Budget Range
                    </label>
                    <div className="space-y-2">
                      <input type="range" min="0" max="50000" className="w-full h-1.5 sm:h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500" />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>₱0</span>
                        <span>₱25,000</span>
                        <span>₱50,000</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                      Travel Mood
                    </label>
                    <select className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-gray-800/50 border border-white/10 text-white focus:outline-none focus:border-blue-500/50 transition-all">
                      <option>Adventure</option>
                      <option>Relaxation</option>
                      <option>Cultural</option>
                      <option>Romantic</option>
                      <option>Family-friendly</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Notification Settings */}
              <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-purple-500/30 p-4 sm:p-6 shadow-2xl">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center">
                  <BellIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-purple-400" />
                  Notification Settings
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {[{
                title: 'Trip Reminders',
                description: 'Get notified about upcoming trips'
              }, {
                title: 'Weather Alerts',
                description: 'Receive weather updates for destinations'
              }, {
                title: 'Travel Buddy Requests',
                description: 'Notifications for new buddy requests'
              }, {
                title: 'Group Tour Invites',
                description: 'Get invited to group tours'
              }].map((setting, index) => <div key={index} className="flex items-center justify-between p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all border border-white/10">
                      <div>
                        <p className="font-medium text-white">
                          {setting.title}
                        </p>
                        <p className="text-xs text-gray-400">
                          {setting.description}
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-7 h-4 sm:w-8 sm:h-5 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-blue-500 peer-checked:to-purple-600"></div>
                      </label>
                    </div>)}
                </div>
              </div>

              {/* Language Preference */}
              <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/30 p-4 sm:p-6 shadow-2xl">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center">
                  <GlobeIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-cyan-400" />
                  Language & Region
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                      Language
                    </label>
                    <select className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-gray-800/50 border border-white/10 text-white focus:outline-none focus:border-cyan-500/50 transition-all">
                      <option>English</option>
                      <option>Filipino</option>
                      <option>Spanish</option>
                      <option>Japanese</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                      Currency
                    </label>
                    <select className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-gray-800/50 border border-white/10 text-white focus:outline-none focus:border-cyan-500/50 transition-all">
                      <option>PHP (₱)</option>
                      <option>USD ($)</option>
                      <option>EUR (€)</option>
                      <option>JPY (¥)</option>
                    </select>
                  </div>
                </div>
              </div>
            </>}

          {activeSection === 'settings' && <>
              {/* Account Settings */}
              <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-blue-500/30 p-4 sm:p-6 shadow-2xl">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center">
                  <SettingsIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-blue-400" />
                  Account Settings
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input type="text" defaultValue={user?.name} className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-gray-800/50 border border-white/10 text-white focus:outline-none focus:border-blue-500/50 transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input type="email" defaultValue={user?.email} className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-gray-800/50 border border-white/10 text-white focus:outline-none focus:border-blue-500/50 transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input type="tel" placeholder="+63 912 345 6789" className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-gray-800/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                      Location
                    </label>
                    <input type="text" defaultValue="Cagwait, Surigao del Sur" className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-gray-800/50 border border-white/10 text-white focus:outline-none focus:border-blue-500/50 transition-all" />
                  </div>
                  <button className="w-full py-2 sm:py-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all font-medium text-xs sm:text-sm">
                    Save Changes
                  </button>
                </div>
              </div>

              {/* Security Settings */}
              <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-green-500/30 p-4 sm:p-6 shadow-2xl">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center">
                  <ShieldIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-green-400" />
                  Security
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                      Current Password
                    </label>
                    <input type="password" placeholder="••••••••" className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-gray-800/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                      New Password
                    </label>
                    <input type="password" placeholder="••••••••" className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-gray-800/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                      Confirm New Password
                    </label>
                    <input type="password" placeholder="••••••••" className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-gray-800/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 transition-all" />
                  </div>
                  <button className="w-full py-2 sm:py-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-green-500 to-teal-500 text-white hover:shadow-lg hover:shadow-green-500/50 transition-all font-medium text-xs sm:text-sm">
                    Update Password
                  </button>
                </div>
              </div>
            </>}
        </div>
      </div>

      {/* Saved Destinations */}
      <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-pink-500/30 p-4 sm:p-6 shadow-2xl">
        <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center shadow-lg">
            <HeartIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-current" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white">
            Saved Destinations
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {savedDestinations.map((dest, index) => <div key={index} className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 hover:border-pink-500/50 transition-all hover:shadow-xl hover:shadow-pink-500/20">
              <div className="relative h-32 sm:h-40 overflow-hidden">
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <button className="absolute top-2 right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-all">
                  <HeartIcon className="w-3 h-3 sm:w-4 sm:h-4 text-pink-500 fill-current" />
                </button>
                <div className="absolute top-2 left-2 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full bg-black/50 backdrop-blur-sm flex items-center space-x-0.5 sm:space-x-1">
                  <StarIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-400 fill-current" />
                  <span className="text-white text-xs sm:text-sm font-bold">
                    {dest.rating}
                  </span>
                </div>
              </div>
              <div className="p-3 sm:p-4 bg-gradient-to-br from-gray-800/90 to-gray-900/90">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-1">
                  {dest.name}
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 mb-2 flex items-center">
                  <MapPinIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                  {dest.location}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mb-3">
                  {dest.description}
                </p>
                <button className="w-full py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-pink-500 to-red-500 text-white hover:shadow-lg hover:shadow-pink-500/50 transition-all text-xs sm:text-sm font-medium">
                  Plan Trip
                </button>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};
export default Profile;