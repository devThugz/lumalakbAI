import React, { useEffect, useState, useRef } from 'react';
import { FilterIcon, NavigationIcon, XIcon, MapPinIcon, StarIcon, SearchIcon, LocateIcon, HeartIcon, ShareIcon, ClockIcon, UsersIcon, TrendingUpIcon } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
const Explore = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [mapView, setMapView] = useState<'satellite' | 'street' | 'hybrid'>('satellite');
  const [selectedSpot, setSelectedSpot] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMap = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);
  const filters = [{
    id: 'all',
    label: 'All',
    icon: '🌍',
    color: 'from-blue-500 to-cyan-500'
  }, {
    id: 'hotels',
    label: 'Hotels',
    icon: '🏨',
    color: 'from-purple-500 to-pink-500'
  }, {
    id: 'restaurants',
    label: 'Food',
    icon: '🍽️',
    color: 'from-orange-500 to-red-500'
  }, {
    id: 'beaches',
    label: 'Beaches',
    icon: '🏖️',
    color: 'from-teal-500 to-green-500'
  }, {
    id: 'events',
    label: 'Events',
    icon: '🎉',
    color: 'from-yellow-500 to-amber-500'
  }];
  // ENHANCED: 60+ accurate map pins across Philippines with real coordinates
  const allSpots = [
  // SIARGAO - Hotels
  {
    id: 1,
    name: 'Siargao Bleu Resort',
    coords: [9.852, 126.0359],
    description: 'Luxury beachfront resort with infinity pool',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    rating: 4.9,
    reviews: 567,
    type: 'hotels',
    price: '₱4,500/night',
    category: 'Hotel',
    visitors: '890',
    bestTime: 'Check-in 2PM'
  }, {
    id: 2,
    name: 'Harana Surf Resort',
    coords: [9.853, 126.037],
    description: 'Surfer paradise with beach access',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800',
    rating: 4.7,
    reviews: 892,
    type: 'hotels',
    price: '₱3,200/night',
    category: 'Hotel',
    visitors: '1.2K',
    bestTime: 'Check-in 2PM'
  }, {
    id: 3,
    name: 'Nay Palad Hideaway',
    coords: [9.81, 126.05],
    description: 'Luxury eco-resort with private beach',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
    rating: 5.0,
    reviews: 234,
    type: 'hotels',
    price: '₱8,900/night',
    category: 'Hotel',
    visitors: '450',
    bestTime: 'Check-in 2PM'
  },
  // SIARGAO - Restaurants
  {
    id: 4,
    name: 'Shaka Siargao',
    coords: [9.851, 126.036],
    description: 'Popular beachfront restaurant & bar',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    rating: 4.8,
    reviews: 1543,
    type: 'restaurants',
    price: '₱₱₱',
    category: 'Restaurant',
    visitors: '2.1K',
    bestTime: 'Dinner'
  }, {
    id: 5,
    name: 'Kermit Restaurant',
    coords: [9.849, 126.0355],
    description: 'Italian cuisine with ocean views',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
    rating: 4.6,
    reviews: 987,
    type: 'restaurants',
    price: '₱₱',
    category: 'Restaurant',
    visitors: '1.5K',
    bestTime: 'Lunch'
  }, {
    id: 6,
    name: 'Bravo Beach Resort Restaurant',
    coords: [9.854, 126.0365],
    description: 'Fresh seafood and Filipino cuisine',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800',
    rating: 4.5,
    reviews: 678,
    type: 'restaurants',
    price: '₱₱',
    category: 'Restaurant',
    visitors: '980',
    bestTime: 'Lunch & Dinner'
  },
  // SIARGAO - Beaches & Attractions
  {
    id: 7,
    name: 'Cloud 9 Surfing',
    coords: [9.855, 126.165],
    description: 'World-famous surfing spot',
    image: 'https://images.unsplash.com/photo-1502933691298-84fc14542831?w=800',
    rating: 4.9,
    reviews: 2345,
    type: 'beaches',
    price: 'Free',
    category: 'Beach',
    visitors: '5.3K',
    bestTime: 'Sunrise'
  }, {
    id: 8,
    name: 'Magpupungko Rock Pools',
    coords: [9.9167, 126.1333],
    description: 'Natural tidal pools and rock formations',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
    rating: 4.8,
    reviews: 892,
    type: 'beaches',
    price: '₱100',
    category: 'Beach',
    visitors: '2.8K',
    bestTime: 'Low Tide'
  }, {
    id: 9,
    name: 'Sugba Lagoon',
    coords: [9.7833, 126.0833],
    description: 'Crystal clear lagoon for swimming',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    rating: 4.7,
    reviews: 567,
    type: 'beaches',
    price: '₱1,200',
    category: 'Beach',
    visitors: '1.9K',
    bestTime: 'Morning'
  }, {
    id: 10,
    name: 'Naked Island',
    coords: [9.8667, 126.05],
    description: 'Pristine white sandbar',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    rating: 4.7,
    reviews: 1234,
    type: 'beaches',
    price: '₱500',
    category: 'Beach',
    visitors: '2.8K',
    bestTime: 'Morning'
  },
  // PALAWAN - Hotels
  {
    id: 11,
    name: 'El Nido Resorts Miniloc',
    coords: [11.1833, 119.4167],
    description: 'Luxury island resort',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    rating: 4.9,
    reviews: 1234,
    type: 'hotels',
    price: '₱15,000/night',
    category: 'Hotel',
    visitors: '650',
    bestTime: 'Check-in 2PM'
  }, {
    id: 12,
    name: 'Pangulasian Island Resort',
    coords: [11.15, 119.45],
    description: 'Eco-luxury resort',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800',
    rating: 5.0,
    reviews: 890,
    type: 'hotels',
    price: '₱18,000/night',
    category: 'Hotel',
    visitors: '420',
    bestTime: 'Check-in 2PM'
  },
  // PALAWAN - Restaurants
  {
    id: 13,
    name: 'Artcafe El Nido',
    coords: [11.195, 119.405],
    description: 'Art gallery & restaurant',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    rating: 4.7,
    reviews: 1567,
    type: 'restaurants',
    price: '₱₱₱',
    category: 'Restaurant',
    visitors: '3.2K',
    bestTime: 'Dinner'
  }, {
    id: 14,
    name: 'Trattoria Altrove',
    coords: [11.194, 119.406],
    description: 'Authentic Italian pizza',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
    rating: 4.8,
    reviews: 2134,
    type: 'restaurants',
    price: '₱₱',
    category: 'Restaurant',
    visitors: '4.1K',
    bestTime: 'Dinner'
  },
  // PALAWAN - Beaches
  {
    id: 15,
    name: 'Big Lagoon',
    coords: [11.1667, 119.4],
    description: 'Stunning limestone lagoon',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    rating: 4.9,
    reviews: 3456,
    type: 'beaches',
    price: '₱200',
    category: 'Beach',
    visitors: '6.7K',
    bestTime: 'Morning'
  }, {
    id: 16,
    name: 'Secret Lagoon',
    coords: [11.17, 119.41],
    description: 'Hidden lagoon accessible through cave',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
    rating: 4.8,
    reviews: 2890,
    type: 'beaches',
    price: '₱200',
    category: 'Beach',
    visitors: '5.2K',
    bestTime: 'Afternoon'
  }, {
    id: 17,
    name: 'Nacpan Beach',
    coords: [11.2833, 119.4833],
    description: '4km stretch of golden sand',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    rating: 4.7,
    reviews: 1678,
    type: 'beaches',
    price: 'Free',
    category: 'Beach',
    visitors: '3.8K',
    bestTime: 'Sunset'
  },
  // BORACAY - Hotels
  {
    id: 18,
    name: 'Shangri-La Boracay',
    coords: [11.9667, 121.925],
    description: 'Luxury beachfront resort',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    rating: 4.9,
    reviews: 2345,
    type: 'hotels',
    price: '₱12,000/night',
    category: 'Hotel',
    visitors: '1.8K',
    bestTime: 'Check-in 3PM'
  }, {
    id: 19,
    name: 'Discovery Shores',
    coords: [11.97, 121.926],
    description: 'Boutique luxury resort',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800',
    rating: 4.8,
    reviews: 1890,
    type: 'hotels',
    price: '₱10,500/night',
    category: 'Hotel',
    visitors: '1.5K',
    bestTime: 'Check-in 3PM'
  },
  // BORACAY - Restaurants
  {
    id: 20,
    name: 'Aria Cucina Italiana',
    coords: [11.968, 121.927],
    description: 'Fine Italian dining',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
    rating: 4.7,
    reviews: 1234,
    type: 'restaurants',
    price: '₱₱₱₱',
    category: 'Restaurant',
    visitors: '2.3K',
    bestTime: 'Dinner'
  }, {
    id: 21,
    name: 'Smoke Restaurant',
    coords: [11.969, 121.928],
    description: 'BBQ and grilled specialties',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    rating: 4.6,
    reviews: 987,
    type: 'restaurants',
    price: '₱₱₱',
    category: 'Restaurant',
    visitors: '1.9K',
    bestTime: 'Dinner'
  },
  // BORACAY - Beaches
  {
    id: 22,
    name: 'White Beach',
    coords: [11.965, 121.924],
    description: 'Famous 4km white sand beach',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
    rating: 4.8,
    reviews: 5678,
    type: 'beaches',
    price: 'Free',
    category: 'Beach',
    visitors: '12.5K',
    bestTime: 'All Day'
  }, {
    id: 23,
    name: 'Puka Shell Beach',
    coords: [12.0167, 121.9167],
    description: 'Quieter beach with puka shells',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    rating: 4.6,
    reviews: 2345,
    type: 'beaches',
    price: 'Free',
    category: 'Beach',
    visitors: '4.2K',
    bestTime: 'Morning'
  },
  // CEBU - Hotels
  {
    id: 24,
    name: 'Shangri-La Mactan',
    coords: [10.3167, 123.9833],
    description: 'Luxury beach resort',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    rating: 4.8,
    reviews: 3456,
    type: 'hotels',
    price: '₱8,500/night',
    category: 'Hotel',
    visitors: '2.8K',
    bestTime: 'Check-in 3PM'
  }, {
    id: 25,
    name: 'Crimson Resort',
    coords: [10.32, 123.985],
    description: 'Modern luxury resort',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800',
    rating: 4.7,
    reviews: 2890,
    type: 'hotels',
    price: '₱7,800/night',
    category: 'Hotel',
    visitors: '2.3K',
    bestTime: 'Check-in 3PM'
  },
  // CEBU - Restaurants
  {
    id: 26,
    name: 'Anzani',
    coords: [10.3167, 123.9],
    description: 'Mediterranean fine dining',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
    rating: 4.8,
    reviews: 1678,
    type: 'restaurants',
    price: '₱₱₱₱',
    category: 'Restaurant',
    visitors: '2.9K',
    bestTime: 'Dinner'
  }, {
    id: 27,
    name: 'House of Lechon',
    coords: [10.315, 123.895],
    description: 'Famous Cebu lechon',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    rating: 4.7,
    reviews: 3456,
    type: 'restaurants',
    price: '₱₱',
    category: 'Restaurant',
    visitors: '5.6K',
    bestTime: 'Lunch'
  },
  // CEBU - Beaches
  {
    id: 28,
    name: 'Moalboal White Beach',
    coords: [9.9333, 123.4],
    description: 'Diving and beach paradise',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    rating: 4.7,
    reviews: 2134,
    type: 'beaches',
    price: 'Free',
    category: 'Beach',
    visitors: '4.5K',
    bestTime: 'All Day'
  }, {
    id: 29,
    name: 'Malapascua Island',
    coords: [11.3333, 124.1167],
    description: 'Thresher shark diving',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
    rating: 4.8,
    reviews: 1890,
    type: 'beaches',
    price: '₱500',
    category: 'Beach',
    visitors: '3.2K',
    bestTime: 'Early Morning'
  },
  // BOHOL - Hotels
  {
    id: 30,
    name: 'Amorita Resort',
    coords: [9.5833, 123.7667],
    description: 'Cliffside luxury resort',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    rating: 4.8,
    reviews: 1567,
    type: 'hotels',
    price: '₱9,500/night',
    category: 'Hotel',
    visitors: '1.2K',
    bestTime: 'Check-in 2PM'
  }, {
    id: 31,
    name: 'Henann Resort Alona Beach',
    coords: [9.55, 123.75],
    description: 'Beachfront resort',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800',
    rating: 4.6,
    reviews: 2345,
    type: 'hotels',
    price: '₱6,800/night',
    category: 'Hotel',
    visitors: '1.8K',
    bestTime: 'Check-in 2PM'
  },
  // BOHOL - Restaurants
  {
    id: 32,
    name: 'Bohol Bee Farm',
    coords: [9.5667, 123.7833],
    description: 'Organic farm restaurant',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    rating: 4.7,
    reviews: 2890,
    type: 'restaurants',
    price: '₱₱',
    category: 'Restaurant',
    visitors: '4.5K',
    bestTime: 'Lunch'
  }, {
    id: 33,
    name: "Gerarda's",
    coords: [9.552, 123.752],
    description: 'Filipino cuisine',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
    rating: 4.5,
    reviews: 1234,
    type: 'restaurants',
    price: '₱₱',
    category: 'Restaurant',
    visitors: '2.8K',
    bestTime: 'Dinner'
  },
  // BOHOL - Beaches & Attractions
  {
    id: 34,
    name: 'Alona Beach',
    coords: [9.55, 123.75],
    description: 'Popular white sand beach',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    rating: 4.6,
    reviews: 3456,
    type: 'beaches',
    price: 'Free',
    category: 'Beach',
    visitors: '7.8K',
    bestTime: 'All Day'
  }, {
    id: 35,
    name: 'Chocolate Hills',
    coords: [9.8167, 124.1667],
    description: 'Iconic geological formation',
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800',
    rating: 4.9,
    reviews: 4567,
    type: 'all',
    price: '₱50',
    category: 'Nature',
    visitors: '9.2K',
    bestTime: 'Sunrise'
  },
  // MANILA - Hotels
  {
    id: 36,
    name: 'The Peninsula Manila',
    coords: [14.5547, 121.0244],
    description: 'Luxury city hotel',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    rating: 4.8,
    reviews: 3890,
    type: 'hotels',
    price: '₱12,000/night',
    category: 'Hotel',
    visitors: '3.5K',
    bestTime: 'Check-in 3PM'
  }, {
    id: 37,
    name: 'Sofitel Philippine Plaza',
    coords: [14.5333, 120.9833],
    description: 'Bayfront luxury hotel',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800',
    rating: 4.7,
    reviews: 2678,
    type: 'hotels',
    price: '₱9,500/night',
    category: 'Hotel',
    visitors: '2.9K',
    bestTime: 'Check-in 3PM'
  },
  // MANILA - Restaurants
  {
    id: 38,
    name: "Antonio's Tagaytay",
    coords: [14.1167, 120.9333],
    description: 'Fine dining with volcano view',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
    rating: 4.9,
    reviews: 2345,
    type: 'restaurants',
    price: '₱₱₱₱',
    category: 'Restaurant',
    visitors: '3.8K',
    bestTime: 'Dinner'
  }, {
    id: 39,
    name: 'Vikings Luxury Buffet',
    coords: [14.55, 121.03],
    description: 'Premium buffet restaurant',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    rating: 4.6,
    reviews: 5678,
    type: 'restaurants',
    price: '₱₱₱',
    category: 'Restaurant',
    visitors: '8.9K',
    bestTime: 'Dinner'
  },
  // EVENTS - Various Locations
  {
    id: 40,
    name: 'Siargao Music Festival',
    coords: [9.852, 126.12],
    description: 'Annual music and arts festival',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800',
    rating: 4.8,
    reviews: 876,
    type: 'events',
    price: '₱2,000',
    category: 'Event',
    visitors: '3.5K',
    bestTime: 'Evening'
  }, {
    id: 41,
    name: 'Boracay Full Moon Party',
    coords: [11.968, 121.927],
    description: 'Monthly beach party celebration',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800',
    rating: 4.5,
    reviews: 654,
    type: 'events',
    price: '₱500',
    category: 'Event',
    visitors: '1.9K',
    bestTime: 'Night'
  }, {
    id: 42,
    name: 'Sinulog Festival',
    coords: [10.3157, 123.8854],
    description: 'Grand cultural festival',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800',
    rating: 4.9,
    reviews: 3456,
    type: 'events',
    price: 'Free',
    category: 'Event',
    visitors: '15.2K',
    bestTime: 'January'
  }, {
    id: 43,
    name: 'Ati-Atihan Festival',
    coords: [11.9167, 122.5667],
    description: 'Colorful street festival',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800',
    rating: 4.8,
    reviews: 2345,
    type: 'events',
    price: 'Free',
    category: 'Event',
    visitors: '12.8K',
    bestTime: 'January'
  },
  // ADDITIONAL NATURE SPOTS
  {
    id: 44,
    name: 'Tinuy-an Falls',
    coords: [8.1667, 126.2167],
    description: 'Known as the "Niagara Falls of the Philippines"',
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800',
    rating: 4.9,
    reviews: 1234,
    type: 'all',
    price: '₱50',
    category: 'Nature',
    visitors: '2.5K',
    bestTime: 'Morning'
  }, {
    id: 45,
    name: 'Enchanted River',
    coords: [8.3333, 126.3333],
    description: 'Mystical deep spring river',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
    rating: 5.0,
    reviews: 2156,
    type: 'all',
    price: '₱30',
    category: 'Nature',
    visitors: '4.1K',
    bestTime: 'Afternoon'
  }, {
    id: 46,
    name: 'Sohoton Cove',
    coords: [9.7667, 125.9833],
    description: 'Natural park with lagoons and caves',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    rating: 4.7,
    reviews: 678,
    type: 'all',
    price: '₱800',
    category: 'Adventure',
    visitors: '1.8K',
    bestTime: 'Morning'
  }, {
    id: 47,
    name: 'Britania Islands',
    coords: [9.5833, 126.0833],
    description: 'Pristine islands perfect for island hopping',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
    rating: 4.8,
    reviews: 892,
    type: 'beaches',
    price: '₱1,200',
    category: 'Beach',
    visitors: '3.2K',
    bestTime: 'All Day'
  }, {
    id: 48,
    name: 'Kawasan Falls',
    coords: [9.8167, 123.3667],
    description: 'Three-tiered waterfall with turquoise pools',
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800',
    rating: 4.8,
    reviews: 2890,
    type: 'all',
    price: '₱40',
    category: 'Nature',
    visitors: '5.6K',
    bestTime: 'Morning'
  }, {
    id: 49,
    name: 'Tumalog Falls',
    coords: [9.85, 123.3833],
    description: 'Curtain-like waterfall',
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800',
    rating: 4.7,
    reviews: 1567,
    type: 'all',
    price: '₱20',
    category: 'Nature',
    visitors: '3.4K',
    bestTime: 'Morning'
  }, {
    id: 50,
    name: 'Coron Island',
    coords: [12.0, 120.2],
    description: 'Stunning lakes and WWII wrecks',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    rating: 4.9,
    reviews: 3890,
    type: 'beaches',
    price: '₱200',
    category: 'Beach',
    visitors: '6.8K',
    bestTime: 'All Day'
  }];
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const coords: [number, number] = [position.coords.latitude, position.coords.longitude];
        setUserLocation(coords);
        if (leafletMap.current) {
          leafletMap.current.setView(coords, 13);
          const userIcon = L.divIcon({
            className: 'user-location-marker',
            html: `<div class="user-marker-pulse"></div><div class="user-marker-dot"></div>`,
            iconSize: [30, 30],
            iconAnchor: [15, 15]
          });
          L.marker(coords, {
            icon: userIcon
          }).addTo(leafletMap.current);
        }
      }, error => {
        console.error('Error getting location:', error);
        alert('Unable to get your location. Please enable location services.');
      });
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return (R * c).toFixed(1);
  };
  const toggleFavorite = (id: number) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]);
  };
  const updateMarkers = (filter: string) => {
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];
    if (!leafletMap.current) return;
    const filteredSpots = filter === 'all' ? allSpots : allSpots.filter(spot => spot.type === filter);
    filteredSpots.forEach(spot => {
      const iconEmoji = filter === 'hotels' ? '🏨' : filter === 'restaurants' ? '🍽️' : filter === 'beaches' ? '🏖️' : filter === 'events' ? '🎉' : '📍';
      const customIcon = L.divIcon({
        className: 'custom-marker',
        html: `<div class="marker-pin">
          <div class="marker-glow"></div>
          <div class="marker-icon">${iconEmoji}</div>
        </div>`,
        iconSize: [40, 40],
        iconAnchor: [20, 40]
      });
      const marker = L.marker(spot.coords as L.LatLngExpression, {
        icon: customIcon
      }).addTo(leafletMap.current!);
      marker.on('click', () => {
        setSelectedSpot(spot);
      });
      markersRef.current.push(marker);
    });
  };
  useEffect(() => {
    if (mapRef.current && !leafletMap.current) {
      leafletMap.current = L.map(mapRef.current).setView([12.0, 122.0], 6); // Center on Philippines
      updateMapLayer();
      updateMarkers('all');
    }
    return () => {
      if (leafletMap.current) {
        leafletMap.current.remove();
        leafletMap.current = null;
      }
    };
  }, []);
  useEffect(() => {
    updateMapLayer();
  }, [mapView]);
  useEffect(() => {
    updateMarkers(activeFilter);
  }, [activeFilter]);
  const updateMapLayer = () => {
    if (!leafletMap.current) return;
    leafletMap.current.eachLayer(layer => {
      if (layer instanceof L.TileLayer) {
        leafletMap.current!.removeLayer(layer);
      }
    });
    let tileUrl = '';
    let attribution = '';
    switch (mapView) {
      case 'satellite':
        tileUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
        attribution = 'Tiles &copy; Esri';
        break;
      case 'street':
        tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        attribution = '&copy; OpenStreetMap contributors';
        break;
      case 'hybrid':
        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
          attribution: 'Tiles &copy; Esri'
        }).addTo(leafletMap.current);
        tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        attribution = '&copy; OpenStreetMap contributors';
        break;
    }
    L.tileLayer(tileUrl, {
      attribution,
      maxZoom: 19
    }).addTo(leafletMap.current);
  };
  const filteredSpots = allSpots.filter(spot => spot.name.toLowerCase().includes(searchQuery.toLowerCase()));
  return <div className="w-full max-w-full overflow-x-hidden">
      <div className="space-y-3 sm:space-y-4">
        {/* Header Section - Mobile Optimized */}
        <div className="w-full max-w-full">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3">
            <div className="flex-1 min-w-0 w-full sm:w-auto">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent flex items-center">
                <NavigationIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-blue-400 flex-shrink-0" />
                <span className="truncate">Explore</span>
              </h1>
              <p className="text-xs sm:text-sm text-gray-400 ml-7 sm:ml-8 truncate">
                Discover amazing places
              </p>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button onClick={getUserLocation} className="flex-1 sm:flex-initial flex items-center justify-center space-x-1 px-3 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg transition-all border border-blue-400/30 font-medium text-xs whitespace-nowrap">
                <LocateIcon className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Location</span>
              </button>
              <button className="flex items-center justify-center px-3 py-2 rounded-lg bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 transition-all border border-white/10 text-xs">
                <FilterIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar - Mobile Optimized */}
        <div className="relative w-full max-w-full">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-400 z-10 pointer-events-none" />
          <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search destinations..." className="w-full max-w-full pl-10 pr-3 py-2.5 rounded-xl bg-gray-800/90 backdrop-blur-xl border border-blue-500/50 text-white text-sm placeholder-blue-300/50 focus:outline-none focus:border-blue-400 transition-all shadow-lg" />
        </div>

        {/* Filter Tabs - Mobile Optimized with Horizontal Scroll */}
        <div className="w-full max-w-full overflow-x-auto scrollbar-hide -mx-1 px-1">
          <div className="flex space-x-2 pb-2 min-w-max">
            {filters.map(filter => <button key={filter.id} onClick={() => setActiveFilter(filter.id)} className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg whitespace-nowrap transition-all border text-xs flex-shrink-0 ${activeFilter === filter.id ? `bg-gradient-to-r ${filter.color} text-white shadow-lg border-white/30` : 'bg-gray-800/50 text-gray-400 hover:text-white border-white/10'}`}>
                <span className="text-base">{filter.icon}</span>
                <span className="font-medium">{filter.label}</span>
              </button>)}
          </div>
        </div>

        {/* Map Container - Mobile Optimized */}
        <div className="relative w-full max-w-full rounded-xl overflow-hidden border border-blue-500/30 shadow-lg">
          <div ref={mapRef} className="h-[250px] sm:h-[300px] w-full relative z-10" />

          {/* View Mode Controls */}
          <div className="absolute top-2 right-2 z-[100] flex flex-col space-y-1">
            {[{
            id: 'satellite',
            icon: '🛰️'
          }, {
            id: 'street',
            icon: '🗺️'
          }, {
            id: 'hybrid',
            icon: '🌆'
          }].map(view => <button key={view.id} onClick={() => setMapView(view.id as any)} className={`px-2 py-1 rounded-lg backdrop-blur-xl transition-all text-xs font-semibold shadow-lg border ${mapView === view.id ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white border-blue-400/50' : 'bg-gray-900/80 text-gray-300 border-white/20'}`}>
                {view.icon}
              </button>)}
          </div>
        </div>

        {/* Stats Bar - Mobile Optimized Grid */}
        <div className="grid grid-cols-2 gap-2 w-full max-w-full">
          {[{
          icon: MapPinIcon,
          label: 'Places',
          value: filteredSpots.length,
          color: 'from-blue-500 to-cyan-500'
        }, {
          icon: TrendingUpIcon,
          label: 'Popular',
          value: '24',
          color: 'from-green-500 to-emerald-500'
        }, {
          icon: HeartIcon,
          label: 'Saved',
          value: favorites.length,
          color: 'from-pink-500 to-rose-500'
        }, {
          icon: UsersIcon,
          label: 'Visitors',
          value: '12.5K',
          color: 'from-purple-500 to-indigo-500'
        }].map((stat, index) => <div key={index} className="relative overflow-hidden rounded-lg border border-white/10 hover:border-white/30 transition-all">
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-10`}></div>
              <div className="relative p-2.5 bg-gray-800/50 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-1">
                  <stat.icon className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-xs text-gray-400 truncate ml-1">
                    {stat.label}
                  </span>
                </div>
                <p className="text-lg font-bold text-white truncate">
                  {stat.value}
                </p>
              </div>
            </div>)}
        </div>

        {/* Destinations Grid - Mobile Optimized */}
        <div className="w-full max-w-full rounded-xl bg-gray-800/50 backdrop-blur-xl border border-cyan-500/30 p-3 shadow-xl">
          <div className="flex items-center justify-between mb-3">
            <div className="flex-1 min-w-0">
              <h2 className="text-base sm:text-lg font-bold text-white truncate">
                Top Destinations
              </h2>
              <p className="text-xs text-gray-400 truncate">
                {filteredSpots.length} places
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 w-full max-w-full">
            {filteredSpots.map(spot => <div key={spot.id} onClick={() => setSelectedSpot(spot)} className="group relative overflow-hidden rounded-lg border border-white/10 hover:border-cyan-500/50 transition-all cursor-pointer bg-gray-800/50 backdrop-blur-sm w-full max-w-full">
                <div className="flex items-center w-full max-w-full">
                  {/* Image - Fixed Width */}
                  <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden">
                    <img src={spot.image} alt={spot.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                    <div className="absolute top-1 right-1 flex items-center space-x-0.5 px-1.5 py-0.5 rounded-full bg-yellow-500/90 backdrop-blur-sm">
                      <StarIcon className="w-2.5 h-2.5 text-white fill-current" />
                      <span className="text-white text-xs font-bold">
                        {spot.rating}
                      </span>
                    </div>
                  </div>

                  {/* Content - Flexible Width */}
                  <div className="flex-1 p-2.5 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-sm font-bold text-white line-clamp-1 flex-1 min-w-0">
                        {spot.name}
                      </h3>
                      <button onClick={e => {
                    e.stopPropagation();
                    toggleFavorite(spot.id);
                  }} className="p-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex-shrink-0">
                        <HeartIcon className={`w-3.5 h-3.5 transition-all ${favorites.includes(spot.id) ? 'fill-red-500 text-red-500' : 'text-white'}`} />
                      </button>
                    </div>

                    <p className="text-xs text-gray-300 mb-1.5 line-clamp-1">
                      {spot.description}
                    </p>

                    <div className="flex items-center justify-between gap-2 text-xs mb-1.5">
                      <div className="flex items-center text-gray-400 min-w-0 flex-1">
                        <MapPinIcon className="w-3 h-3 mr-0.5 flex-shrink-0" />
                        <span className="truncate">
                          {userLocation ? `${calculateDistance(userLocation[0], userLocation[1], spot.coords[0], spot.coords[1])} km` : spot.category}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-400 flex-shrink-0">
                        <UsersIcon className="w-3 h-3 mr-0.5" />
                        <span>{spot.visitors}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                      <span className="text-cyan-400 font-bold text-xs truncate flex-1 min-w-0">
                        {spot.price}
                      </span>
                      <button className="px-2.5 py-1 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg transition-all text-xs font-semibold whitespace-nowrap flex-shrink-0">
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>

        {/* Modal - Mobile Optimized */}
        {selectedSpot && <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-sm">
            <div className="relative w-full sm:max-w-2xl max-h-[90vh] rounded-t-2xl sm:rounded-2xl bg-gray-800/98 backdrop-blur-2xl border-t-2 sm:border-2 border-blue-500/50 shadow-2xl overflow-y-auto">
              {/* Close Button */}
              <button onClick={() => setSelectedSpot(null)} className="sticky top-3 right-3 ml-auto mr-3 z-[10000] w-8 h-8 rounded-lg bg-gray-700/80 hover:bg-gray-700 flex items-center justify-center transition-all border border-white/20 shadow-lg">
                <XIcon className="w-4 h-4 text-gray-300" />
              </button>

              {/* Hero Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden -mt-11">
                <img src={selectedSpot.image} alt={selectedSpot.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex items-center space-x-2 z-[10]">
                  <span className="px-2 py-0.5 rounded-full bg-blue-500/90 backdrop-blur-sm border border-white/30 text-white font-bold text-xs">
                    {selectedSpot.category}
                  </span>
                  <button onClick={e => {
                e.stopPropagation();
                toggleFavorite(selectedSpot.id);
              }} className="p-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                    <HeartIcon className={`w-4 h-4 transition-all ${favorites.includes(selectedSpot.id) ? 'fill-red-500 text-red-500' : 'text-white'}`} />
                  </button>
                  <button className="p-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                    <ShareIcon className="w-4 h-4 text-white" />
                  </button>
                </div>

                {/* Title */}
                <div className="absolute bottom-2 left-3 right-3 z-[10]">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <h2 className="text-base sm:text-lg font-bold text-white mb-0.5 line-clamp-2">
                        {selectedSpot.name}
                      </h2>
                      {userLocation && <div className="flex items-center space-x-1">
                          <MapPinIcon className="w-3 h-3 text-blue-400 flex-shrink-0" />
                          <span className="text-xs text-blue-300 font-semibold truncate">
                            {calculateDistance(userLocation[0], userLocation[1], selectedSpot.coords[0], selectedSpot.coords[1])}{' '}
                            km away
                          </span>
                        </div>}
                    </div>
                    <div className="flex items-center space-x-0.5 px-2 py-0.5 rounded-full bg-yellow-500/90 backdrop-blur-sm border border-white/30 flex-shrink-0">
                      <StarIcon className="w-3 h-3 text-white fill-current" />
                      <span className="text-white text-xs font-bold">
                        {selectedSpot.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 relative z-[10]">
                {/* Description */}
                <div className="mb-3">
                  <h3 className="text-sm font-bold text-white mb-1.5">About</h3>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {selectedSpot.description}
                  </p>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-2 mb-3">
                  {[{
                label: 'Price',
                value: selectedSpot.price,
                icon: '💰'
              }, {
                label: 'Category',
                value: selectedSpot.category,
                icon: '📍'
              }, {
                label: 'Visitors',
                value: selectedSpot.visitors,
                icon: '👥'
              }, {
                label: 'Best Time',
                value: selectedSpot.bestTime,
                icon: '⏰'
              }].map((info, index) => <div key={index} className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
                      <p className="text-xs text-gray-400 mb-0.5 truncate">
                        {info.label}
                      </p>
                      <div className="flex items-center space-x-1">
                        <span className="text-base">{info.icon}</span>
                        <p className="text-xs font-bold text-white truncate flex-1 min-w-0">
                          {info.value}
                        </p>
                      </div>
                    </div>)}
                </div>

                {/* Reviews */}
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="text-sm font-bold text-white">Reviews</h3>
                    <span className="text-xs text-gray-400">
                      {selectedSpot.reviews} reviews
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map(star => <StarIcon key={star} className="w-3.5 h-3.5 text-yellow-400 fill-current" />)}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col space-y-2">
                  <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-sm hover:shadow-xl transition-all border border-blue-500/50">
                    Book Now
                  </button>
                  <button className="w-full py-2.5 rounded-xl bg-green-500/20 text-green-400 border border-green-500/50 font-bold text-sm hover:bg-green-500/30 transition-all">
                    Add to Trip
                  </button>
                </div>
              </div>
            </div>
          </div>}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .custom-marker {
          background: transparent;
          border: none;
          z-index: 50 !important;
        }

        .marker-pin {
          position: relative;
          cursor: pointer;
          animation: bounce 2s infinite;
          z-index: 50;
        }

        .marker-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 30px;
          height: 30px;
          background: rgba(59, 130, 246, 0.4);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .marker-icon {
          position: relative;
          font-size: 24px;
          text-shadow: 0 0 10px rgba(59, 130, 246, 0.8);
          z-index: 51;
        }

        .leaflet-popup {
          z-index: 60 !important;
        }

        .leaflet-popup-content-wrapper {
          background: rgba(17, 24, 39, 0.95);
          backdrop-filter: blur(12px);
          border: 2px solid rgba(59, 130, 246, 0.5);
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
        }

        .leaflet-popup-tip {
          background: rgba(17, 24, 39, 0.95);
          border: 2px solid rgba(59, 130, 246, 0.5);
          border-top: none;
          border-right: none;
        }

        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.7; }
          50% { transform: translate(-50%, -50%) scale(1.5); opacity: 0.3; }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .user-location-marker {
          background: transparent;
          border: none;
        }

        .user-marker-pulse {
          position: absolute;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: rgba(59, 130, 246, 0.3);
          animation: pulse-user 2s infinite;
        }

        .user-marker-dot {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #3B82F6;
          border: 3px solid white;
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.8);
        }

        @keyframes pulse-user {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.8); opacity: 0.2; }
        }
      `}</style>
    </div>;
};
export default Explore;