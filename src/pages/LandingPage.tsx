import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, CompassIcon, PlaneIcon, SparklesIcon, GlobeIcon, UsersIcon, TrendingUpIcon, ShieldIcon, ArrowRightIcon, StarIcon, CheckCircleIcon } from 'lucide-react';
import Logo from '../components/common/Logo';
const LandingPage = () => {
  const features = [{
    icon: SparklesIcon,
    title: 'AI-Powered Planning',
    description: 'Let AI create perfect itineraries based on your preferences and budget',
    color: 'from-teal-500 to-cyan-500'
  }, {
    icon: MapPinIcon,
    title: 'Smart Exploration',
    description: 'Discover hidden gems and popular destinations with interactive maps',
    color: 'from-orange-500 to-amber-500'
  }, {
    icon: UsersIcon,
    title: 'Connect with Travelers',
    description: 'Find travel buddies and share experiences with like-minded explorers',
    color: 'from-green-500 to-emerald-500'
  }, {
    icon: TrendingUpIcon,
    title: 'Real-time Weather',
    description: 'Get weather predictions and automatic itinerary adjustments',
    color: 'from-blue-500 to-indigo-500'
  }];
  const destinations = [{
    name: 'Siargao Island',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
    rating: 4.9,
    trips: '2.4k'
  }, {
    name: 'Palawan',
    image: 'https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=800',
    rating: 5.0,
    trips: '3.1k'
  }, {
    name: 'Boracay',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    rating: 4.8,
    trips: '4.2k'
  }];
  const testimonials = [{
    name: 'Maria Santos',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'LumalakbAI made planning my trip so easy! The AI suggestions were spot-on.',
    rating: 5
  }, {
    name: 'John Rivera',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Found amazing travel buddies through the app. Best travel experience ever!',
    rating: 5
  }, {
    name: 'Lisa Chen',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: 'The weather predictions saved my vacation. Highly recommend!',
    rating: 5
  }];
  return <div className="min-h-screen bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-xl border-b border-teal-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Logo size="lg" />
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Link to="/login" className="px-3 py-2 sm:px-4 sm:py-2 rounded-xl text-white hover:bg-teal-500/10 transition-all text-sm sm:text-base">
                Sign In
              </Link>
              <Link to="/register" className="px-3 py-2 sm:px-6 sm:py-3 rounded-xl bg-gradient-to-r from-teal-500 to-orange-500 text-white hover:shadow-lg hover:shadow-teal-500/50 transition-all font-medium text-sm sm:text-base">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-teal-500/20 border border-teal-500/50 mb-4 sm:mb-6">
              <SparklesIcon className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400" />
              <span className="text-teal-300 text-xs sm:text-sm font-medium">
                AI-Powered Travel Planning
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4">
              Your Next Adventure
              <br />
              <span className="bg-gradient-to-r from-teal-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                Starts Here
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              Experience the future of travel planning with AI-powered
              itineraries, real-time weather updates, and a community of
              explorers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 px-4">
              <Link to="/register" className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-teal-500 to-orange-500 text-white hover:shadow-2xl hover:shadow-teal-500/50 transition-all font-bold text-base sm:text-lg flex items-center justify-center space-x-2">
                <span>Start Exploring</span>
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all font-bold text-base sm:text-lg border border-white/20">
                Watch Demo
              </button>
            </div>
          </div>
          {/* Hero Image/Animation */}
          <div className="relative max-w-5xl mx-auto mt-8 sm:mt-16">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-orange-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-teal-500/30 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200" alt="Travel" className="w-full h-48 sm:h-64 md:h-96 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Why Choose LumalakbAI?
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
              Cutting-edge technology meets seamless travel planning
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => {
            const Icon = feature.icon;
            return <div key={index} className="group p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 hover:border-teal-500/50 transition-all hover:shadow-xl hover:shadow-teal-500/20">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400">
                    {feature.description}
                  </p>
                </div>;
          })}
          </div>
        </div>
      </section>
      {/* Popular Destinations */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Popular Destinations
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
              Explore the most loved travel spots
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {destinations.map((dest, index) => <div key={index} className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 hover:border-teal-500/50 transition-all hover:shadow-2xl hover:shadow-teal-500/20">
                <div className="relative h-56 sm:h-64 md:h-80 overflow-hidden">
                  <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 px-2 py-1 sm:px-3 sm:py-1 rounded-full bg-black/50 backdrop-blur-sm flex items-center space-x-1 border border-white/20">
                    <StarIcon className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-xs sm:text-sm font-bold">
                      {dest.rating}
                    </span>
                  </div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                      {dest.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/90">
                      {dest.trips} trips planned
                    </p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              What Travelers Say
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
              Join thousands of happy explorers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => <div key={index} className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 hover:border-orange-500/50 transition-all">
                <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                  <img src={testimonial.photo} alt={testimonial.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-orange-500/50" />
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white">
                      {testimonial.name}
                    </h4>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => <StarIcon key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />)}
                    </div>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-300">
                  {testimonial.text}
                </p>
              </div>)}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-teal-500 to-orange-500 p-6 sm:p-12 text-center shadow-2xl">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 px-4">
                Join LumalakbAI today and experience the future of travel
                planning
              </p>
              <Link to="/register" className="inline-flex items-center space-x-2 px-6 py-3 sm:px-8 sm:py-4 rounded-xl bg-white text-teal-600 hover:bg-gray-100 transition-all font-bold text-base sm:text-lg shadow-xl">
                <span>Get Started Free</span>
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 border-t border-teal-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <Logo size="md" />
            <p className="text-sm sm:text-base text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} LumalakbAI. All rights reserved.
            </p>
            <div className="flex space-x-4 sm:space-x-6">
              <Link to="/privacy" className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition-colors">
                Terms
              </Link>
              <Link to="/contact" className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default LandingPage;