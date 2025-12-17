import React, { useState, Fragment } from 'react';
import { PlaneIcon, CalendarIcon, MapPinIcon, DollarSignIcon, PlusIcon, XIcon, CheckCircleIcon, ClockIcon, TrendingUpIcon, AlertCircleIcon, SparklesIcon, PlayCircleIcon, CalendarCheckIcon, ArrowRightIcon, ChevronDownIcon, ChevronUpIcon, StarIcon, CloudSunIcon, CloudRainIcon, SunIcon, WindIcon, DropletIcon, AlertTriangleIcon, CheckIcon, LockIcon, UsersIcon, MessageCircleIcon, ThumbsUpIcon, TrendingDownIcon, LinkIcon, ZapIcon, TrashIcon, EditIcon, InfoIcon, SearchIcon } from 'lucide-react';
const Trips = () => {
  const [activeTab, setActiveTab] = useState('ongoing');
  const [showBooking, setShowBooking] = useState(false);
  const [expandedTrip, setExpandedTrip] = useState<number | null>(null);
  const [showWeatherModal, setShowWeatherModal] = useState(false);
  const [selectedTripForWeather, setSelectedTripForWeather] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showItineraryGenerator, setShowItineraryGenerator] = useState(false);
  const [showFlightRecommendations, setShowFlightRecommendations] = useState(false);
  // New state for Details and Manage modals
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedTripDetails, setSelectedTripDetails] = useState<any>(null);
  const [showManageModal, setShowManageModal] = useState(false);
  const [selectedTripManage, setSelectedTripManage] = useState<any>(null);
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);
  // Progressive booking state
  const [bookingStep, setBookingStep] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFlight, setSelectedFlight] = useState<string>('');
  const [selectedSpots, setSelectedSpots] = useState<string[]>([]);
  // const [selectedHotel, setSelectedHotel] = useState<string>('') // Removed as per new flow requirements (focus on spots -> transport -> flight)
  const [selectedTransportation, setSelectedTransportation] = useState<string>('');
  const [showBookingConfirmation, setShowBookingConfirmation] = useState(false);
  const [pendingBooking, setPendingBooking] = useState<any>(null);
  const [itineraryForm, setItineraryForm] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    airline: '',
    budget: '',
    interests: [] as string[],
    transportation: '',
    hotel: '',
    spots: [] as string[]
  });
  // State for managing trips
  const [trips, setTrips] = useState({
    ongoing: [{
      id: 1,
      name: 'Siargao Adventure',
      destination: 'Siargao Island',
      startDate: 'Nov 12, 2024',
      endDate: 'Nov 16, 2024',
      cost: 18750,
      status: 'Active',
      progress: 75,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600',
      flight: {
        airline: 'Cebu Pacific',
        number: '5J 813',
        departure: '6:30 AM',
        arrival: '8:15 AM'
      },
      weather: {
        temp: 28,
        condition: 'Partly Cloudy',
        icon: CloudSunIcon,
        humidity: 75,
        wind: 12,
        rain: 20,
        status: 'good'
      },
      itinerary: [{
        time: '8:00 AM',
        activity: 'Cloud 9 Surfing',
        status: 'completed'
      }, {
        time: '12:00 PM',
        activity: 'Lunch at Shaka',
        status: 'completed'
      }, {
        time: '3:00 PM',
        activity: 'Magpupungko Pools',
        status: 'active'
      }, {
        time: '6:00 PM',
        activity: 'Sunset Viewing',
        status: 'pending'
      }]
    }],
    upcoming: [{
      id: 2,
      name: 'Bohol Heritage Tour',
      destination: 'Bohol',
      startDate: 'Dec 20, 2024',
      endDate: 'Dec 24, 2024',
      cost: 22400,
      status: 'Confirmed',
      progress: 0,
      image: 'https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=600',
      flight: {
        airline: 'Philippine Airlines',
        number: 'PR 2991',
        departure: '8:00 AM',
        arrival: '9:30 AM'
      },
      weather: {
        temp: 29,
        condition: 'Sunny',
        icon: SunIcon,
        humidity: 65,
        wind: 8,
        rain: 5,
        status: 'excellent'
      },
      itinerary: [{
        time: '9:00 AM',
        activity: 'Chocolate Hills',
        status: 'pending'
      }, {
        time: '1:00 PM',
        activity: 'Tarsier Sanctuary',
        status: 'pending'
      }, {
        time: '4:00 PM',
        activity: 'Loboc River Cruise',
        status: 'pending'
      }]
    }, {
      id: 3,
      name: 'Palawan Island Hopping',
      destination: 'El Nido, Palawan',
      startDate: 'Jan 15, 2025',
      endDate: 'Jan 20, 2025',
      cost: 28900,
      status: 'Confirmed',
      progress: 0,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600',
      flight: {
        airline: 'AirAsia',
        number: 'Z2 771',
        departure: '10:15 AM',
        arrival: '12:00 PM'
      },
      weather: {
        temp: 29,
        condition: 'Sunny',
        icon: SunIcon,
        humidity: 65,
        wind: 8,
        rain: 5,
        status: 'excellent'
      },
      itinerary: [{
        time: '8:00 AM',
        activity: 'Big Lagoon',
        status: 'pending'
      }, {
        time: '11:00 AM',
        activity: 'Small Lagoon',
        status: 'pending'
      }, {
        time: '2:00 PM',
        activity: 'Secret Beach',
        status: 'pending'
      }]
    }],
    completed: [{
      id: 4,
      name: 'Boracay Beach Getaway',
      destination: 'Boracay Island',
      startDate: 'Oct 10, 2024',
      endDate: 'Oct 15, 2024',
      cost: 15750,
      status: 'Completed',
      progress: 100,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600',
      flight: {
        airline: 'Cebu Pacific',
        number: '5J 567',
        departure: '7:00 AM',
        arrival: '8:30 AM'
      },
      weather: {
        temp: 28,
        condition: 'Partly Cloudy',
        icon: CloudSunIcon,
        humidity: 75,
        wind: 12,
        rain: 20,
        status: 'good'
      },
      itinerary: [{
        time: '9:00 AM',
        activity: 'White Beach',
        status: 'completed'
      }, {
        time: '2:00 PM',
        activity: 'Puka Beach',
        status: 'completed'
      }, {
        time: '5:00 PM',
        activity: 'Sunset Sailing',
        status: 'completed'
      }]
    }, {
      id: 5,
      name: 'Cebu City Explorer',
      destination: 'Cebu City',
      startDate: 'Jun 5, 2024',
      endDate: 'Jun 8, 2024',
      cost: 12300,
      status: 'Completed',
      progress: 100,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600',
      flight: {
        airline: 'Philippine Airlines',
        number: 'PR 1843',
        departure: '6:00 AM',
        arrival: '7:15 AM'
      },
      weather: {
        temp: 28,
        condition: 'Partly Cloudy',
        icon: CloudSunIcon,
        humidity: 75,
        wind: 12,
        rain: 20,
        status: 'good'
      },
      itinerary: [{
        time: '10:00 AM',
        activity: "Magellan's Cross",
        status: 'completed'
      }, {
        time: '1:00 PM',
        activity: 'Lechon Lunch',
        status: 'completed'
      }, {
        time: '4:00 PM',
        activity: 'Tops Lookout',
        status: 'completed'
      }]
    }]
  });
  // Popular flight routes with social proof
  const popularRoutes = [{
    route: 'Manila → Siargao',
    travelers: 342,
    trend: 'up',
    avgPrice: 3200,
    bestDeal: 2800,
    savings: 400
  }, {
    route: 'Manila → Palawan',
    travelers: 289,
    trend: 'up',
    avgPrice: 4100,
    bestDeal: 3600,
    savings: 500
  }, {
    route: 'Cebu → Siargao',
    travelers: 156,
    trend: 'stable',
    avgPrice: 2400,
    bestDeal: 2100,
    savings: 300
  }, {
    route: 'Manila → Bohol',
    travelers: 234,
    trend: 'up',
    avgPrice: 3800,
    bestDeal: 3200,
    savings: 600
  }];
  const bookingOptions = {
    flights: [{
      id: 1,
      name: 'Cebu Pacific',
      route: 'Manila → Siargao',
      destination: 'Siargao',
      price: 3200,
      rating: 4.5,
      reviews: 1234,
      departure: '6:30 AM',
      arrival: '8:15 AM',
      number: '5J 813',
      travelers: 45,
      recommended: true,
      dealBadge: 'Best Value',
      availableFor: ['Siargao']
    }, {
      id: 2,
      name: 'Philippine Airlines',
      route: 'Manila → Siargao',
      destination: 'Siargao',
      price: 4500,
      rating: 4.7,
      reviews: 892,
      departure: '8:00 AM',
      arrival: '9:45 AM',
      number: 'PR 2991',
      travelers: 32,
      recommended: false,
      dealBadge: 'Premium',
      availableFor: ['Siargao']
    }, {
      id: 3,
      name: 'AirAsia',
      route: 'Manila → Palawan',
      destination: 'Palawan',
      price: 3800,
      rating: 4.6,
      reviews: 1567,
      departure: '9:00 AM',
      arrival: '10:45 AM',
      number: 'Z2 771',
      travelers: 38,
      recommended: true,
      dealBadge: 'Best Value',
      availableFor: ['Palawan']
    }, {
      id: 4,
      name: 'Cebu Pacific',
      route: 'Manila → Boracay',
      destination: 'Boracay',
      price: 2800,
      rating: 4.4,
      reviews: 2345,
      departure: '7:15 AM',
      arrival: '8:30 AM',
      number: '5J 567',
      travelers: 52,
      recommended: false,
      dealBadge: 'Budget',
      availableFor: ['Boracay']
    }],
    transportation: [{
      id: 1,
      name: 'Siargao Car Rental',
      type: 'SUV',
      price: 2500,
      rating: 4.8,
      reviews: 342,
      capacity: '7 passengers',
      features: 'AC, GPS, Insurance',
      availableFor: ['Siargao']
    }, {
      id: 2,
      name: 'Island Wheels',
      type: 'Motorcycle',
      price: 500,
      rating: 4.6,
      reviews: 789,
      capacity: '2 passengers',
      features: 'Helmet included',
      availableFor: ['Siargao']
    }, {
      id: 3,
      name: 'Palawan Van Service',
      type: 'Van',
      price: 3500,
      rating: 4.7,
      reviews: 234,
      capacity: '12 passengers',
      features: 'AC, WiFi, Driver',
      availableFor: ['Palawan']
    }, {
      id: 4,
      name: 'Boracay Tricycle',
      type: 'Tricycle',
      price: 300,
      rating: 4.3,
      reviews: 567,
      capacity: '4 passengers',
      features: 'Local transport',
      availableFor: ['Boracay']
    }],
    hotels: [{
      id: 1,
      name: 'Siargao Bleu Resort',
      location: 'General Luna',
      destination: 'Siargao',
      price: 4500,
      rating: 4.9,
      reviews: 567,
      amenities: 'Pool, Restaurant, WiFi',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400'
    }, {
      id: 2,
      name: 'Harana Surf Resort',
      location: 'Cloud 9',
      destination: 'Siargao',
      price: 3200,
      rating: 4.7,
      reviews: 892,
      amenities: 'Beach Access, Surf Lessons',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400'
    }, {
      id: 3,
      name: 'El Nido Resorts',
      location: 'El Nido',
      destination: 'Palawan',
      price: 8900,
      rating: 5.0,
      reviews: 1234,
      amenities: 'Luxury, Spa, Private Beach',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400'
    }, {
      id: 4,
      name: 'Shangri-La Boracay',
      location: 'Boracay',
      destination: 'Boracay',
      price: 12000,
      rating: 4.9,
      reviews: 2345,
      amenities: 'Luxury, Multiple Pools, Spa',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400'
    }],
    spots: [{
      id: 1,
      name: 'Cloud 9 Surfing',
      location: 'General Luna',
      destination: 'Siargao',
      price: 1500,
      rating: 4.9,
      reviews: 1234,
      type: 'Water Sports',
      image: 'https://images.unsplash.com/photo-1502933691298-84fc14542831?w=400'
    }, {
      id: 2,
      name: 'Magpupungko Pools',
      location: 'Pilar',
      destination: 'Siargao',
      price: 100,
      rating: 4.8,
      reviews: 892,
      type: 'Natural Attraction',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400'
    }, {
      id: 3,
      name: 'Sugba Lagoon',
      location: 'Del Carmen',
      destination: 'Siargao',
      price: 1200,
      rating: 4.7,
      reviews: 567,
      type: 'Island Hopping',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400'
    }, {
      id: 4,
      name: 'Big Lagoon',
      location: 'El Nido',
      destination: 'Palawan',
      price: 200,
      rating: 4.9,
      reviews: 3456,
      type: 'Island Hopping',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400'
    }, {
      id: 5,
      name: 'Secret Lagoon',
      location: 'El Nido',
      destination: 'Palawan',
      price: 200,
      rating: 4.8,
      reviews: 2890,
      type: 'Island Hopping',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400'
    }, {
      id: 6,
      name: 'White Beach',
      location: 'Boracay',
      destination: 'Boracay',
      price: 0,
      rating: 4.8,
      reviews: 5678,
      type: 'Beach',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400'
    }]
  };
  const tabs = [{
    id: 'ongoing',
    label: 'Ongoing',
    count: trips.ongoing.length,
    icon: PlayCircleIcon,
    gradient: 'from-green-500 to-emerald-600',
    borderColor: 'border-green-500/50',
    shadowColor: 'shadow-green-500/30',
    bgColor: 'bg-green-500/20',
    textColor: 'text-green-400',
    description: 'Active trips in progress'
  }, {
    id: 'upcoming',
    label: 'Upcoming',
    count: trips.upcoming.length,
    icon: CalendarCheckIcon,
    gradient: 'from-blue-500 to-cyan-600',
    borderColor: 'border-blue-500/50',
    shadowColor: 'shadow-blue-500/30',
    bgColor: 'bg-blue-500/20',
    textColor: 'text-blue-400',
    description: 'Scheduled future trips'
  }, {
    id: 'completed',
    label: 'Completed',
    count: trips.completed.length,
    icon: CheckCircleIcon,
    gradient: 'from-purple-500 to-pink-600',
    borderColor: 'border-purple-500/50',
    shadowColor: 'shadow-purple-500/30',
    bgColor: 'bg-purple-500/20',
    textColor: 'text-purple-400',
    description: 'Past adventures'
  }];
  const currentTrips = trips[activeTab as keyof typeof trips];
  const getWeatherStatus = (status: string) => {
    const statusConfig = {
      excellent: {
        color: 'green',
        text: 'Perfect Weather',
        icon: '☀️'
      },
      good: {
        color: 'blue',
        text: 'Good Weather',
        icon: '🌤️'
      },
      caution: {
        color: 'yellow',
        text: 'Weather Caution',
        icon: '🌦️'
      },
      bad: {
        color: 'red',
        text: 'Bad Weather',
        icon: '⛈️'
      }
    };
    return statusConfig[status as keyof typeof statusConfig] || statusConfig.good;
  };
  // Filtered Data Helpers
  const getFilteredSpots = () => {
    if (!searchQuery) return bookingOptions.spots;
    return bookingOptions.spots.filter(spot => spot.name.toLowerCase().includes(searchQuery.toLowerCase()) || spot.location.toLowerCase().includes(searchQuery.toLowerCase()) || spot.destination.toLowerCase().includes(searchQuery.toLowerCase()));
  };
  const getFilteredTransportation = () => {
    if (selectedSpots.length === 0) return [];
    // Get the destination of the first selected spot to filter transportation
    const firstSpot = bookingOptions.spots.find(s => s.name === selectedSpots[0]);
    if (!firstSpot) return [];
    return bookingOptions.transportation.filter(t => t.availableFor.includes(firstSpot.destination));
  };
  const getFilteredFlights = () => {
    if (selectedSpots.length === 0) return [];
    // Get the destination of the first selected spot to filter flights
    const firstSpot = bookingOptions.spots.find(s => s.name === selectedSpots[0]);
    if (!firstSpot) return [];
    return bookingOptions.flights.filter(f => f.availableFor.includes(firstSpot.destination));
  };
  const handleNextStep = () => {
    if (bookingStep === 1 && selectedSpots.length > 0) {
      setBookingStep(2);
    } else if (bookingStep === 2 && selectedTransportation) {
      setBookingStep(3);
    }
  };
  const handlePreviousStep = () => {
    if (bookingStep > 1) {
      setBookingStep(bookingStep - 1);
    }
  };
  const handleCompleteBooking = () => {
    const spotsCost = selectedSpots.reduce((total, spotName) => {
      const spot = bookingOptions.spots.find(s => s.name === spotName);
      return total + (spot?.price || 0);
    }, 0);
    const transportCost = bookingOptions.transportation.find(t => t.name === selectedTransportation)?.price || 0;
    const flightCost = bookingOptions.flights.find(f => f.name === selectedFlight)?.price || 0;
    const totalCost = spotsCost + transportCost + flightCost;
    const flightDetails = bookingOptions.flights.find(f => f.name === selectedFlight);
    // Determine destination from selected spots
    const firstSpot = bookingOptions.spots.find(s => s.name === selectedSpots[0]);
    const destination = firstSpot ? firstSpot.destination : 'Unknown Destination';
    const newTrip = {
      id: Date.now(),
      name: `${destination} Adventure`,
      destination: destination,
      startDate: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }),
      endDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }),
      cost: totalCost,
      status: 'Active',
      progress: 0,
      image: firstSpot?.image || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600',
      flight: {
        airline: selectedFlight || 'TBA',
        number: flightDetails?.number || 'TBA',
        departure: flightDetails?.departure || 'TBA',
        arrival: flightDetails?.arrival || 'TBA'
      },
      weather: {
        temp: 28,
        condition: 'Partly Cloudy',
        icon: CloudSunIcon,
        humidity: 75,
        wind: 12,
        rain: 20,
        status: 'good'
      },
      itinerary: selectedSpots.map((spot, idx) => ({
        time: `${9 + idx * 3}:00 AM`,
        activity: spot,
        status: 'pending'
      })),
      spotsCost,
      transportCost,
      flightCost
    };
    // Store pending booking and show confirmation modal
    setPendingBooking(newTrip);
    setShowBookingConfirmation(true);
  };
  const confirmBooking = () => {
    if (!pendingBooking) return;
    setTrips(prev => ({
      ...prev,
      ongoing: [...prev.ongoing, pendingBooking]
    }));
    // Reset booking state and close modals
    setSelectedSpots([]);
    setSelectedTransportation('');
    setSelectedFlight('');
    setSearchQuery('');
    setBookingStep(1);
    setShowBooking(false);
    setShowBookingConfirmation(false);
    setPendingBooking(null);
    setActiveTab('ongoing');
  };
  const cancelBookingConfirmation = () => {
    setShowBookingConfirmation(false);
    setPendingBooking(null);
  };
  const handleGenerateItinerary = () => {
    if (!itineraryForm.destination || !itineraryForm.startDate || !itineraryForm.endDate) {
      alert('Please fill in destination and dates to generate itinerary');
      return;
    }
    const selectedFlightData = bookingOptions.flights.find(f => f.name === itineraryForm.airline);
    const selectedTransportData = bookingOptions.transportation.find(t => t.name === itineraryForm.transportation);
    const selectedHotelData = bookingOptions.hotels.find(h => h.name === itineraryForm.hotel);
    const flightCost = selectedFlightData?.price || 0;
    const transportCost = selectedTransportData?.price || 0;
    const hotelCost = selectedHotelData?.price || 0;
    const totalCost = flightCost + transportCost + hotelCost;
    const newTrip = {
      id: Date.now(),
      name: `${itineraryForm.destination} Adventure`,
      destination: itineraryForm.destination,
      startDate: new Date(itineraryForm.startDate).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }),
      endDate: new Date(itineraryForm.endDate).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }),
      cost: totalCost,
      status: 'Active',
      progress: 0,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600',
      flight: {
        airline: itineraryForm.airline || 'TBA',
        number: selectedFlightData?.number || 'TBA',
        departure: selectedFlightData?.departure || 'TBA',
        arrival: selectedFlightData?.arrival || 'TBA'
      },
      weather: {
        temp: 28,
        condition: 'Partly Cloudy',
        icon: CloudSunIcon,
        humidity: 75,
        wind: 12,
        rain: 20,
        status: 'good'
      },
      itinerary: [{
        time: '9:00 AM',
        activity: 'Check-in & Explore',
        status: 'pending'
      }, {
        time: '12:00 PM',
        activity: 'Local Cuisine',
        status: 'pending'
      }, {
        time: '3:00 PM',
        activity: 'Main Attraction',
        status: 'pending'
      }]
    };
    setTrips(prev => ({
      ...prev,
      ongoing: [...prev.ongoing, newTrip]
    }));
    setItineraryForm({
      destination: '',
      startDate: '',
      endDate: '',
      airline: '',
      budget: '',
      interests: [],
      transportation: '',
      hotel: '',
      spots: []
    });
    setShowItineraryGenerator(false);
    setActiveTab('ongoing');
    alert(`🎉 Trip created successfully!\n\nYour ${itineraryForm.destination} adventure has been added to Ongoing trips!`);
  };
  const toggleSpotSelection = (spotName: string) => {
    setSelectedSpots(prev => prev.includes(spotName) ? prev.filter(s => s !== spotName) : [...prev, spotName]);
  };
  const resetBooking = () => {
    setSelectedFlight('');
    setSelectedSpots([]);
    setSelectedTransportation('');
    setBookingStep(1);
    setShowBooking(false);
    setSearchQuery('');
  };
  // New Handlers for View Details and Manage
  const handleViewDetails = (trip: any) => {
    setSelectedTripDetails(trip);
    setShowDetailsModal(true);
  };
  const handleManageTrip = (trip: any) => {
    setSelectedTripManage(trip);
    setShowManageModal(true);
    setShowCancelConfirm(false);
  };
  const handleCancelTrip = () => {
    if (!selectedTripManage) return;
    // Remove from all categories
    setTrips(prev => ({
      ongoing: prev.ongoing.filter(t => t.id !== selectedTripManage.id),
      upcoming: prev.upcoming.filter(t => t.id !== selectedTripManage.id),
      completed: prev.completed.filter(t => t.id !== selectedTripManage.id)
    }));
    setShowManageModal(false);
    setShowCancelConfirm(false);
    setSelectedTripManage(null);
    // In a real app, we would use a toast notification here
    alert('Trip cancelled successfully.');
  };
  return <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white flex items-center">
          <PlaneIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mr-2 sm:mr-3 text-blue-400 flex-shrink-0" />
          <span>My Trips</span>
        </h1>
        <div className="flex flex-row items-center gap-2 w-full sm:w-auto">
          <button onClick={() => setShowFlightRecommendations(true)} className="flex-1 sm:flex-none px-2 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white hover:shadow-lg hover:shadow-orange-500/50 transition-all font-medium flex items-center justify-center space-x-1 sm:space-x-2 border-2 border-orange-500/50 text-xs sm:text-base">
            <span className="truncate">Popular</span>
          </button>
          <button onClick={() => setShowItineraryGenerator(true)} className="flex-1 sm:flex-none px-2 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all font-medium flex items-center justify-center space-x-1 sm:space-x-2 border-2 border-purple-500/50 text-xs sm:text-base">
            <SparklesIcon className="w-3 h-3 sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="truncate">Generate</span>
          </button>
          <button onClick={() => setShowBooking(true)} className="flex-1 sm:flex-none px-2 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all font-medium flex items-center justify-center space-x-1 sm:space-x-2 border-2 border-blue-500/50 text-xs sm:text-base">
            <PlusIcon className="w-3 h-3 sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="truncate">Book</span>
          </button>
        </div>
      </div>

      {/* ... (Existing Modals: Flight Recommendations, AI Insights, Trip Cards, Weather, Details, Manage, Itinerary Generator) ... */}
      {/* I'm keeping the existing modals above as they were, just updating the Booking Modal below */}

      {/* Popular Flight Routes Modal */}
      {showFlightRecommendations && <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm">
          <div className="w-full sm:max-w-4xl rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl border-2 border-orange-500/50 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 z-10 bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl border-b-2 border-orange-500/30 p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg animate-pulse flex-shrink-0">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-2xl font-bold text-white">
                      Popular Flight Routes
                    </h3>
                    <p className="text-xs sm:text-sm text-orange-300">
                      See where travelers are flying & get the best deals
                    </p>
                  </div>
                </div>
                <button onClick={() => setShowFlightRecommendations(false)} className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gray-700/50 hover:bg-gray-700 flex items-center justify-center transition-all border-2 border-white/20 hover:border-white/40 group flex-shrink-0">
                  <XIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>
            <div className="p-4 sm:p-6 space-y-4">
              {popularRoutes.map((route, index) => <div key={index} className="rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-2 border-white/20 hover:border-orange-500/50 transition-all p-4 sm:p-6 shadow-lg group">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-2">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <PlaneIcon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400 flex-shrink-0" />
                        <h4 className="text-lg sm:text-xl font-bold text-white">
                          {route.route}
                        </h4>
                        {route.trend === 'up' && <div className="flex items-center space-x-1 px-2 py-1 rounded-full bg-green-500/20 border border-green-500/50 flex-shrink-0">
                            <TrendingUpIcon className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                            <span className="text-xs font-bold text-green-400">
                              Trending
                            </span>
                          </div>}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <UsersIcon className="w-4 h-4" />
                          <span>{route.travelers} travelers this week</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
                      <p className="text-xs text-gray-400 mb-1">
                        Average Price
                      </p>
                      <p className="text-base sm:text-lg font-bold text-white">
                        ₱{route.avgPrice.toLocaleString()}
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/30">
                      <p className="text-xs text-gray-400 mb-1">Best Deal</p>
                      <p className="text-base sm:text-lg font-bold text-green-400">
                        ₱{route.bestDeal.toLocaleString()}
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/30">
                      <p className="text-xs text-gray-400 mb-1">You Save</p>
                      <p className="text-base sm:text-lg font-bold text-orange-400">
                        ₱{route.savings.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <button className="w-full py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white hover:shadow-lg hover:shadow-orange-500/50 transition-all font-bold flex items-center justify-center space-x-2 text-sm sm:text-base">
                    <span>View Flights</span>
                    <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>)}
            </div>
          </div>
        </div>}

      {/* AI-Powered Trip Insights */}
      <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-cyan-900/30 backdrop-blur-xl border-2 border-purple-500/50 p-4 sm:p-6 shadow-2xl shadow-purple-500/30">
        <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/50 animate-pulse flex-shrink-0">
            <SparklesIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-white truncate">
              AI Trip Insights
            </h2>
            <p className="text-xs sm:text-sm text-purple-300 truncate">
              Smart recommendations for your journey
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gray-800/50 border-2 border-green-500/30 shadow-lg hover:shadow-green-500/40 transition-all cursor-pointer group">
            <div className="flex items-center space-x-2 mb-1 sm:mb-2">
              <TrendingUpIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 group-hover:scale-110 transition-transform flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-gray-300 truncate">
                Budget Optimization
              </span>
            </div>
            <p className="text-base sm:text-lg font-bold text-white">
              Save ₱3,200
            </p>
            <p className="text-xs text-gray-400 line-clamp-2">
              AI found better deals for your upcoming trips
            </p>
          </div>
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gray-800/50 border-2 border-blue-500/30 shadow-lg hover:shadow-blue-500/40 transition-all cursor-pointer group">
            <div className="flex items-center space-x-2 mb-1 sm:mb-2">
              <ClockIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 group-hover:scale-110 transition-transform flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-gray-300 truncate">
                Time Saved
              </span>
            </div>
            <p className="text-base sm:text-lg font-bold text-white">
              4.5 hours
            </p>
            <p className="text-xs text-gray-400 line-clamp-2">
              Optimized itinerary reduces travel time
            </p>
          </div>
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gray-800/50 border-2 border-orange-500/30 shadow-lg hover:shadow-orange-500/40 transition-all cursor-pointer group">
            <div className="flex items-center space-x-2 mb-1 sm:mb-2">
              <AlertCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 group-hover:scale-110 transition-transform flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-gray-300 truncate">
                Weather Alert
              </span>
            </div>
            <p className="text-base sm:text-lg font-bold text-white">
              Rain Expected
            </p>
            <p className="text-xs text-gray-400 line-clamp-2">
              Dec 22 - Itinerary auto-adjusted
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Highlight Card Buttons - Trip Categories */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4">
        {tabs.map(tab => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`group relative overflow-hidden rounded-lg sm:rounded-2xl border-2 transition-all duration-300 transform ${isActive ? `${tab.borderColor} shadow-xl ${tab.shadowColor} scale-105` : 'border-white/20 hover:border-white/40 hover:scale-102 shadow-lg'}`}>
              <div className={`absolute inset-0 bg-gradient-to-br transition-all duration-300 ${isActive ? tab.gradient : 'from-gray-800/50 to-gray-900/50'}`}></div>
              <div className="relative p-2 sm:p-4 backdrop-blur-xl">
                <div className="flex flex-col sm:flex-row items-center sm:justify-between mb-1 sm:mb-2">
                  <div className={`w-6 h-6 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 mb-1 sm:mb-0 ${isActive ? `bg-white/20 ${tab.shadowColor} ${isActive && 'animate-pulse'}` : 'bg-gray-700/50 group-hover:bg-gray-700'}`}>
                    <Icon className={`w-3 h-3 sm:w-5 sm:h-5 transition-all duration-300 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'}`} />
                  </div>
                  <div className={`px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-full font-bold text-xs sm:text-base border-2 transition-all duration-300 ${isActive ? `bg-white/20 text-white border-white/50 shadow-lg ${tab.shadowColor}` : 'bg-gray-700/50 text-gray-400 border-white/20 group-hover:border-white/30'}`}>
                    {tab.count}
                  </div>
                </div>
                <h3 className={`text-xs sm:text-lg font-bold transition-all duration-300 mb-0 sm:mb-1 text-center sm:text-left ${isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                  {tab.label}
                </h3>
                <p className={`text-[10px] sm:text-xs transition-all duration-300 line-clamp-1 text-center sm:text-left hidden sm:block ${isActive ? 'text-white/80' : 'text-gray-500 group-hover:text-gray-400'}`}>
                  {tab.description}
                </p>
                {isActive && <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>}
              </div>
            </button>;
      })}
      </div>

      {/* Interactive Trip Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {currentTrips.map(trip => {
        const WeatherIcon = trip.weather.icon;
        const weatherStatus = getWeatherStatus(trip.weather.status);
        return <div key={trip.id} className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white/20 hover:border-blue-500/70 transition-all hover:shadow-2xl hover:shadow-blue-500/30 group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl">
              <div className="relative h-40 sm:h-48 overflow-hidden cursor-pointer">
                <img src={trip.image} alt={trip.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                  <span className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-bold border-2 ${trip.status === 'Active' ? 'bg-green-500/20 text-green-400 border-green-500/50 shadow-lg shadow-green-500/30 animate-pulse' : trip.status === 'Confirmed' ? 'bg-blue-500/20 text-blue-400 border-blue-500/50 shadow-lg shadow-blue-500/30' : 'bg-gray-500/20 text-gray-400 border-gray-500/50'}`}>
                    {trip.status}
                  </span>
                </div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5 sm:mb-1 line-clamp-1">
                    {trip.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/90 flex items-center">
                    <MapPinIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                    <span className="truncate">{trip.destination}</span>
                  </p>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5 sm:mb-1">
                      Duration
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-white truncate">
                      {trip.startDate}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      to {trip.endDate}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400 mb-0.5 sm:mb-1">
                      Total Cost
                    </p>
                    <p className="text-base sm:text-lg font-bold text-white">
                      ₱{trip.cost.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <button onClick={() => handleViewDetails(trip)} className="flex-1 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all text-xs sm:text-sm font-medium border-2 border-blue-500/50 flex items-center justify-center space-x-1.5 sm:space-x-2 group/btn">
                    <span>View Details</span>
                    <ArrowRightIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <button onClick={() => handleManageTrip(trip)} className="flex-1 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-gray-700/50 text-gray-300 hover:bg-gray-700 hover:text-white transition-all text-xs sm:text-sm font-medium border-2 border-white/20 hover:border-white/40">
                    Manage
                  </button>
                </div>
              </div>
            </div>;
      })}
      </div>

      {/* Weather Forecast Modal */}
      {showWeatherModal && <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm">
          <div className="w-full sm:max-w-4xl rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl border-2 border-blue-500/50 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 z-10 bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl border-b-2 border-blue-500/30 p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg sm:text-2xl font-bold text-white flex items-center">
                  <CloudSunIcon className="w-6 h-6 sm:w-7 sm:h-7 mr-2 sm:mr-3 text-blue-400 flex-shrink-0" />
                  Weather Forecast
                </h3>
                <button onClick={() => setShowWeatherModal(false)} className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gray-700/50 hover:bg-gray-700 flex items-center justify-center transition-all border-2 border-white/20 hover:border-white/40 group flex-shrink-0">
                  <XIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <p className="text-gray-300 text-center">
                Weather forecast details would appear here
              </p>
            </div>
          </div>
        </div>}

      {/* View Details Modal */}
      {showDetailsModal && selectedTripDetails && <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm">
          <div className="w-full sm:max-w-4xl rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl border-2 border-blue-500/50 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 z-10 bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl border-b-2 border-blue-500/30 p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg flex-shrink-0">
                    <InfoIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-2xl font-bold text-white">
                      Trip Details
                    </h3>
                    <p className="text-xs sm:text-sm text-blue-300 line-clamp-1">
                      {selectedTripDetails.name}
                    </p>
                  </div>
                </div>
                <button onClick={() => setShowDetailsModal(false)} className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gray-700/50 hover:bg-gray-700 flex items-center justify-center transition-all border-2 border-white/20 hover:border-white/40 group flex-shrink-0">
                  <XIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>

            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              {/* Trip Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="rounded-2xl overflow-hidden border-2 border-white/10 h-48 sm:h-64">
                  <img src={selectedTripDetails.image} alt={selectedTripDetails.name} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="p-3 sm:p-4 rounded-xl bg-gray-800/50 border border-white/10">
                      <p className="text-xs text-gray-400 mb-1">Destination</p>
                      <p className="text-white font-bold flex items-center text-sm sm:text-base">
                        <MapPinIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-blue-400 flex-shrink-0" />
                        <span className="truncate">
                          {selectedTripDetails.destination}
                        </span>
                      </p>
                    </div>
                    <div className="p-3 sm:p-4 rounded-xl bg-gray-800/50 border border-white/10">
                      <p className="text-xs text-gray-400 mb-1">Total Cost</p>
                      <p className="text-white font-bold flex items-center text-sm sm:text-base">
                        <DollarSignIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-green-400 flex-shrink-0" />
                        ₱{selectedTripDetails.cost.toLocaleString()}
                      </p>
                    </div>
                    <div className="p-3 sm:p-4 rounded-xl bg-gray-800/50 border border-white/10">
                      <p className="text-xs text-gray-400 mb-1">Start Date</p>
                      <p className="text-white font-bold flex items-center text-sm sm:text-base">
                        <CalendarIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-orange-400 flex-shrink-0" />
                        {selectedTripDetails.startDate}
                      </p>
                    </div>
                    <div className="p-3 sm:p-4 rounded-xl bg-gray-800/50 border border-white/10">
                      <p className="text-xs text-gray-400 mb-1">End Date</p>
                      <p className="text-white font-bold flex items-center text-sm sm:text-base">
                        <CalendarIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-orange-400 flex-shrink-0" />
                        {selectedTripDetails.endDate}
                      </p>
                    </div>
                  </div>
                  <div className="p-3 sm:p-4 rounded-xl bg-gray-800/50 border border-white/10">
                    <p className="text-xs text-gray-400 mb-2">Status</p>
                    <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-bold border ${selectedTripDetails.status === 'Active' ? 'bg-green-500/20 text-green-400 border-green-500/50' : selectedTripDetails.status === 'Confirmed' ? 'bg-blue-500/20 text-blue-400 border-blue-500/50' : 'bg-gray-500/20 text-gray-400 border-gray-500/50'}`}>
                      {selectedTripDetails.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Flight Details */}
              <div className="rounded-2xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 p-4 sm:p-6">
                <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 flex items-center">
                  <PlaneIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-400" />
                  Flight Information
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Airline</p>
                    <p className="text-white font-semibold text-sm sm:text-base">
                      {selectedTripDetails.flight.airline}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Flight No.</p>
                    <p className="text-white font-semibold text-sm sm:text-base">
                      {selectedTripDetails.flight.number}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Departure</p>
                    <p className="text-white font-semibold text-sm sm:text-base">
                      {selectedTripDetails.flight.departure}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Arrival</p>
                    <p className="text-white font-semibold text-sm sm:text-base">
                      {selectedTripDetails.flight.arrival}
                    </p>
                  </div>
                </div>
              </div>

              {/* Itinerary */}
              <div className="rounded-2xl bg-gray-800/30 border border-white/10 p-4 sm:p-6">
                <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 flex items-center">
                  <ClockIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-purple-400" />
                  Itinerary
                </h4>
                <div className="space-y-3 sm:space-y-4">
                  {selectedTripDetails.itinerary.map((item: any, idx: number) => <div key={idx} className="flex items-center p-3 rounded-xl bg-gray-800/50 border border-white/5">
                        <div className="w-16 sm:w-20 text-xs sm:text-sm font-bold text-blue-400 flex-shrink-0">
                          {item.time}
                        </div>
                        <div className="flex-1 text-white font-medium text-xs sm:text-sm truncate px-2">
                          {item.activity}
                        </div>
                        <div className={`px-2 py-1 rounded text-[10px] sm:text-xs font-bold flex-shrink-0 ${item.status === 'completed' ? 'text-green-400 bg-green-500/10' : item.status === 'active' ? 'text-blue-400 bg-blue-500/10' : 'text-gray-400 bg-gray-500/10'}`}>
                          {item.status}
                        </div>
                      </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>}

      {/* Manage Trip Modal */}
      {showManageModal && selectedTripManage && <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl border-2 border-white/20 shadow-2xl">
            <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Manage Trip
              </h3>
              <button onClick={() => setShowManageModal(false)} className="w-8 h-8 rounded-lg bg-gray-700/50 hover:bg-gray-700 flex items-center justify-center transition-all">
                <XIcon className="w-4 h-4 text-gray-300" />
              </button>
            </div>

            <div className="p-4 sm:p-6 space-y-4">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={selectedTripManage.image} alt={selectedTripManage.name} className="w-full h-full object-cover" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-base sm:text-lg font-bold text-white truncate">
                    {selectedTripManage.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 truncate">
                    {selectedTripManage.destination}
                  </p>
                </div>
              </div>

              {!showCancelConfirm ? <div className="space-y-3">
                  <button onClick={() => alert('Edit functionality coming soon!')} className="w-full py-3 px-4 rounded-xl bg-gray-700/50 hover:bg-gray-700 border border-white/10 hover:border-white/30 transition-all flex items-center justify-between group">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                        <EditIcon className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-white text-sm sm:text-base">
                          Edit Trip Details
                        </p>
                        <p className="text-xs text-gray-400">
                          Modify dates, guests, or preferences
                        </p>
                      </div>
                    </div>
                    <ArrowRightIcon className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                  </button>

                  <button onClick={() => setShowCancelConfirm(true)} className="w-full py-3 px-4 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 hover:border-red-500/50 transition-all flex items-center justify-between group">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 flex-shrink-0">
                        <TrashIcon className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-red-400 text-sm sm:text-base">
                          Cancel Booking
                        </p>
                        <p className="text-xs text-red-300/70">
                          Permanently remove this trip
                        </p>
                      </div>
                    </div>
                    <ArrowRightIcon className="w-5 h-5 text-red-500/50 group-hover:text-red-400 transition-colors" />
                  </button>
                </div> : <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30">
                    <div className="flex items-start space-x-3">
                      <AlertTriangleIcon className="w-6 h-6 text-red-400 flex-shrink-0" />
                      <div>
                        <h5 className="font-bold text-red-400 mb-1 text-sm sm:text-base">
                          Are you sure?
                        </h5>
                        <p className="text-xs sm:text-sm text-red-200/80">
                          This action cannot be undone. This will permanently
                          cancel your trip to{' '}
                          <span className="font-bold text-white">
                            {selectedTripManage.destination}
                          </span>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 pt-2">
                    <button onClick={() => setShowCancelConfirm(false)} className="flex-1 py-3 rounded-xl bg-gray-700 hover:bg-gray-600 text-white font-medium transition-colors text-sm sm:text-base">
                      Keep Trip
                    </button>
                    <button onClick={handleCancelTrip} className="flex-1 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold shadow-lg shadow-red-500/30 transition-all text-sm sm:text-base">
                      Yes, Cancel Trip
                    </button>
                  </div>
                </div>}
            </div>
          </div>
        </div>}

      {/* AI Itinerary Generator Modal */}
      {showItineraryGenerator && <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm">
          <div className="w-full sm:max-w-4xl rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl border-2 border-purple-500/50 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 z-10 bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl border-b-2 border-purple-500/30 p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg animate-pulse flex-shrink-0">
                    <SparklesIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-2xl font-bold text-white">
                      AI Itinerary Generator
                    </h3>
                    <p className="text-xs sm:text-sm text-purple-300">
                      Let AI create your perfect trip plan
                    </p>
                  </div>
                </div>
                <button onClick={() => setShowItineraryGenerator(false)} className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gray-700/50 hover:bg-gray-700 flex items-center justify-center transition-all border-2 border-white/20 hover:border-white/40 group flex-shrink-0">
                  <XIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>
            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              {/* Step 1: Destination & Dates */}
              <div className="rounded-2xl bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border-2 border-blue-500/50 p-4 sm:p-6">
                <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 flex items-center">
                  <MapPinIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-400" />
                  Step 1: Destination & Dates
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                      Destination
                    </label>
                    <input type="text" placeholder="e.g., Siargao" value={itineraryForm.destination} onChange={e => setItineraryForm({
                  ...itineraryForm,
                  destination: e.target.value
                })} className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-gray-800/50 border-2 border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-all text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                      Start Date
                    </label>
                    <input type="date" value={itineraryForm.startDate} onChange={e => setItineraryForm({
                  ...itineraryForm,
                  startDate: e.target.value
                })} className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-gray-800/50 border-2 border-white/20 text-white focus:outline-none focus:border-blue-500/50 transition-all text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                      End Date
                    </label>
                    <input type="date" value={itineraryForm.endDate} onChange={e => setItineraryForm({
                  ...itineraryForm,
                  endDate: e.target.value
                })} className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-gray-800/50 border-2 border-white/20 text-white focus:outline-none focus:border-blue-500/50 transition-all text-sm" />
                  </div>
                </div>
              </div>

              {/* Step 2: Flight Selection */}
              <div className="rounded-2xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-2 border-purple-500/50 p-4 sm:p-6">
                <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 flex items-center">
                  <PlaneIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-purple-400" />
                  Step 2: Choose Your Flight
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                  {bookingOptions.flights.map(flight => <button key={flight.id} onClick={() => setItineraryForm({
                ...itineraryForm,
                airline: flight.name
              })} className={`p-3 sm:p-4 rounded-xl border-2 transition-all text-left ${itineraryForm.airline === flight.name ? 'bg-purple-500/20 border-purple-500/50 shadow-lg' : 'bg-gray-800/50 border-white/20 hover:border-purple-500/30'}`}>
                      <p className="text-sm font-bold text-white mb-1">
                        {flight.name}
                      </p>
                      <p className="text-xs text-gray-400 mb-2">
                        {flight.departure} - {flight.arrival}
                      </p>
                      <p className="text-base sm:text-lg font-bold text-purple-400">
                        ₱{flight.price.toLocaleString()}
                      </p>
                    </button>)}
                </div>
              </div>

              {/* Step 3: Transportation */}
              <div className="rounded-2xl bg-gradient-to-br from-green-900/30 to-teal-900/30 border-2 border-green-500/50 p-4 sm:p-6">
                <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 flex items-center">
                  🚗 Step 3: Local Transportation
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                  {bookingOptions.transportation.map(transport => <button key={transport.id} onClick={() => setItineraryForm({
                ...itineraryForm,
                transportation: transport.name
              })} className={`p-3 sm:p-4 rounded-xl border-2 transition-all text-left ${itineraryForm.transportation === transport.name ? 'bg-green-500/20 border-green-500/50 shadow-lg' : 'bg-gray-800/50 border-white/20 hover:border-green-500/30'}`}>
                      <p className="text-sm font-bold text-white mb-1">
                        {transport.name}
                      </p>
                      <p className="text-xs text-gray-400 mb-2">
                        {transport.type}
                      </p>
                      <p className="text-base sm:text-lg font-bold text-green-400">
                        ₱{transport.price.toLocaleString()}/day
                      </p>
                    </button>)}
                </div>
              </div>

              {/* Step 4: Budget & Interests */}
              <div className="rounded-2xl bg-gradient-to-br from-orange-900/30 to-red-900/30 border-2 border-orange-500/50 p-4 sm:p-6">
                <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 flex items-center">
                  <DollarSignIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-orange-400" />
                  Step 4: Budget & Interests
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                      Total Budget (₱)
                    </label>
                    <input type="number" placeholder="e.g., 25000" value={itineraryForm.budget} onChange={e => setItineraryForm({
                  ...itineraryForm,
                  budget: e.target.value
                })} className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-gray-800/50 border-2 border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-all text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                    Travel Interests
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {['Beach', 'Adventure', 'Culture', 'Food', 'Nature', 'Nightlife', 'Shopping', 'Relaxation'].map(interest => <button key={interest} onClick={() => {
                  const interests = itineraryForm.interests.includes(interest) ? itineraryForm.interests.filter(i => i !== interest) : [...itineraryForm.interests, interest];
                  setItineraryForm({
                    ...itineraryForm,
                    interests
                  });
                }} className={`py-2 px-3 rounded-xl text-xs sm:text-sm font-medium transition-all border-2 ${itineraryForm.interests.includes(interest) ? 'bg-orange-500/20 text-orange-400 border-orange-500/50' : 'bg-gray-800/50 text-gray-400 border-white/20 hover:border-orange-500/30'}`}>
                        {interest}
                      </button>)}
                  </div>
                </div>
              </div>

              {/* Generate Button */}
              <button onClick={handleGenerateItinerary} disabled={!itineraryForm.destination || !itineraryForm.startDate || !itineraryForm.endDate} className="w-full py-3 sm:py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all font-bold text-base sm:text-lg flex items-center justify-center space-x-3 border-2 border-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed">
                <SparklesIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Generate My Perfect Itinerary</span>
              </button>
            </div>
          </div>
        </div>}

      {/* Progressive Booking Modal */}
      {showBooking && <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-6xl rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl border-2 border-blue-500/50 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 z-10 bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl border-b-2 border-blue-500/30 p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-2xl font-bold text-white">
                  Book Your Trip
                </h3>
                <button onClick={resetBooking} className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gray-700/50 hover:bg-gray-700 flex items-center justify-center transition-all border-2 border-white/20 hover:border-white/40 group flex-shrink-0">
                  <XIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 group-hover:text-white transition-colors" />
                </button>
              </div>

              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                {[{
              step: 1,
              label: 'Select Spots',
              icon: '🏖️',
              completed: bookingStep > 1,
              active: bookingStep === 1
            }, {
              step: 2,
              label: 'Transportation',
              icon: '🚗',
              completed: bookingStep > 2,
              active: bookingStep === 2
            }, {
              step: 3,
              label: 'Flights',
              icon: '✈️',
              completed: false,
              active: bookingStep === 3
            }].map((item, index) => <Fragment key={item.step}>
                    <div className="flex flex-col items-center flex-1">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-lg sm:text-xl font-bold border-2 transition-all ${item.completed ? 'bg-green-500/20 text-green-400 border-green-500/50 shadow-lg shadow-green-500/30' : item.active ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white border-blue-400 shadow-lg shadow-blue-500/50' : 'bg-gray-700/30 text-gray-600 border-gray-700'}`}>
                        {item.completed ? <CheckIcon className="w-5 h-5 sm:w-6 sm:h-6" /> : item.icon}
                      </div>
                      <p className={`text-[10px] sm:text-xs mt-1 sm:mt-2 font-medium text-center ${item.completed ? 'text-green-400' : item.active ? 'text-blue-400' : 'text-gray-500'}`}>
                        {item.label}
                      </p>
                    </div>
                    {index < 2 && <div className="flex flex-col items-center flex-1 px-1 sm:px-2">
                        <div className={`flex-1 h-0.5 w-full transition-all ${item.completed ? 'bg-green-500' : 'bg-gray-700'}`} />
                      </div>}
                  </Fragment>)}
              </div>
            </div>

            <div className="p-4 sm:p-6">
              {/* Step 1: Tourist Spots Selection */}
              {bookingStep === 1 && <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <h4 className="text-base sm:text-lg font-bold text-white flex items-center">
                      <MapPinIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-400" />
                      Select Tourist Spots
                    </h4>

                    {/* Search Bar */}
                    <div className="relative w-full sm:w-64">
                      <input type="text" placeholder="Search location..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-800/50 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-all text-sm" />
                      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                  </div>

                  {/* Spots Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                    {getFilteredSpots().map(spot => <div key={spot.id} onClick={() => toggleSpotSelection(spot.name)} className={`relative p-3 rounded-xl border-2 cursor-pointer transition-all flex flex-col space-y-3 group ${selectedSpots.includes(spot.name) ? 'bg-blue-500/20 border-blue-500/50 shadow-lg shadow-blue-500/20' : 'bg-gray-800/50 border-white/10 hover:border-white/30 hover:bg-gray-800/80'}`}>
                        <div className="relative h-32 w-full rounded-lg overflow-hidden">
                          <img src={spot.image} alt={spot.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                          <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md flex items-center space-x-1">
                            <StarIcon className="w-3 h-3 text-yellow-400 fill-current" />
                            <span className="text-xs font-bold text-white">
                              {spot.rating}
                            </span>
                          </div>
                          {selectedSpots.includes(spot.name) && <div className="absolute inset-0 bg-blue-500/30 flex items-center justify-center backdrop-blur-[1px]">
                              <CheckCircleIcon className="w-10 h-10 text-white drop-shadow-lg" />
                            </div>}
                        </div>

                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <h5 className="font-bold text-white text-sm sm:text-base line-clamp-1">
                              {spot.name}
                            </h5>
                          </div>
                          <p className="text-xs text-gray-400 flex items-center mt-1">
                            <MapPinIcon className="w-3 h-3 mr-1" />
                            {spot.location}
                          </p>
                          <div className="flex justify-between items-center mt-3">
                            <span className="px-2 py-1 rounded-md bg-gray-700/50 text-[10px] text-gray-300 border border-white/10">
                              {spot.type}
                            </span>
                            <p className="text-sm font-bold text-blue-400">
                              {spot.price === 0 ? 'Free' : `₱${spot.price.toLocaleString()}`}
                            </p>
                          </div>
                        </div>
                      </div>)}
                  </div>

                  {/* Selection Summary */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="text-sm text-gray-400">
                      <span className="text-white font-bold">
                        {selectedSpots.length}
                      </span>{' '}
                      spots selected
                    </div>
                    <button onClick={handleNextStep} disabled={selectedSpots.length === 0} className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all font-bold text-base flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed">
                      <span>Next Step</span>
                      <ArrowRightIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>}

              {/* Step 2: Transportation Selection */}
              {bookingStep === 2 && <div className="space-y-6">
                  <div className="rounded-2xl bg-gradient-to-br from-green-900/30 to-teal-900/30 border-2 border-green-500/50 p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 flex items-center">
                          🚗 Select Transportation
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-400">
                          Options available for your selected destinations
                        </p>
                      </div>
                    </div>

                    {getFilteredTransportation().length > 0 ? <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                        {getFilteredTransportation().map(transport => <button key={transport.id} onClick={() => setSelectedTransportation(transport.name)} className={`p-4 sm:p-6 rounded-2xl border-2 transition-all text-left relative ${selectedTransportation === transport.name ? 'border-green-500 bg-green-500/20 shadow-lg shadow-green-500/30' : 'border-white/20 bg-gray-800/50 hover:border-green-500/50 cursor-pointer'}`}>
                            <div className="flex items-center justify-between mb-3">
                              <div className="text-2xl sm:text-3xl">🚗</div>
                              {selectedTransportation === transport.name && <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-500 flex items-center justify-center">
                                  <CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                </div>}
                            </div>
                            <h5 className="text-base sm:text-lg font-bold text-white mb-1">
                              {transport.name}
                            </h5>
                            <p className="text-xs sm:text-sm text-gray-400 mb-2">
                              {transport.type}
                            </p>
                            <p className="text-lg sm:text-xl font-bold text-green-400">
                              ₱{transport.price.toLocaleString()}/day
                            </p>
                          </button>)}
                      </div> : <div className="text-center py-8 text-gray-400">
                        No transportation options found for this location.
                      </div>}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex space-x-3 sm:space-x-4 pt-4 border-t border-white/10">
                    <button onClick={handlePreviousStep} className="px-6 py-3 rounded-xl bg-gray-700/50 text-white hover:bg-gray-700 transition-all font-bold text-base border-2 border-white/20">
                      Back
                    </button>
                    <div className="flex-1"></div>
                    <button onClick={handleNextStep} disabled={!selectedTransportation} className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all font-bold text-base flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed">
                      <span>Next Step</span>
                      <ArrowRightIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>}

              {/* Step 3: Flight Selection */}
              {bookingStep === 3 && <div className="space-y-6">
                  <div className="rounded-2xl bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-2 border-blue-500/50 p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 flex items-center">
                          ✈️ Select Flight
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-400">
                          Flights to your destination
                        </p>
                      </div>
                    </div>

                    {getFilteredFlights().length > 0 ? <div className="space-y-3 sm:space-y-4">
                        {getFilteredFlights().map(flight => <button key={flight.id} onClick={() => setSelectedFlight(flight.name)} className={`w-full p-4 sm:p-6 rounded-2xl border-2 transition-all text-left relative ${selectedFlight === flight.name ? 'border-blue-500 bg-blue-500/20 shadow-lg shadow-blue-500/30' : 'border-white/20 bg-gray-800/50 hover:border-blue-500/50 cursor-pointer'}`}>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                              <div className="flex items-center space-x-3 sm:space-x-4">
                                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-blue-500 to-purple-600`}>
                                  <PlaneIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                </div>
                                <div className="min-w-0">
                                  <div className="flex items-center space-x-2 mb-1">
                                    <h5 className="text-base sm:text-lg font-bold truncate text-white">
                                      {flight.name}
                                    </h5>
                                    {flight.recommended && <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-[10px] sm:text-xs font-bold border border-green-500/50 flex-shrink-0">
                                        Recommended
                                      </span>}
                                  </div>
                                  <p className="text-xs sm:text-sm mb-2 truncate text-gray-400">
                                    {flight.route}
                                  </p>
                                  <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm">
                                    <div className="flex items-center space-x-1 text-gray-300">
                                      <span>{flight.departure}</span>
                                      <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                                      <span>{flight.arrival}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center justify-between sm:block text-right">
                                {selectedFlight === flight.name && <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-500 flex items-center justify-center mb-0 sm:mb-2 ml-auto">
                                    <CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                  </div>}
                                <p className="text-lg sm:text-2xl font-bold text-white">
                                  ₱{flight.price.toLocaleString()}
                                </p>
                              </div>
                            </div>
                          </button>)}
                      </div> : <div className="text-center py-8 text-gray-400">
                        No flights found for this destination.
                      </div>}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex space-x-3 sm:space-x-4 pt-4 border-t border-white/10">
                    <button onClick={handlePreviousStep} className="px-6 py-3 rounded-xl bg-gray-700/50 text-white hover:bg-gray-700 transition-all font-bold text-base border-2 border-white/20">
                      Back
                    </button>
                    <div className="flex-1"></div>
                    <button onClick={handleCompleteBooking} disabled={!selectedFlight} className="px-8 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-lg hover:shadow-green-500/50 transition-all font-bold text-base flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed">
                      <CheckIcon className="w-5 h-5" />
                      <span>Book Trip</span>
                    </button>
                  </div>
                </div>}
            </div>
          </div>
        </div>}

      {/* Booking Confirmation Modal */}
      {showBookingConfirmation && pendingBooking && <div className="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-2xl rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl border-2 border-green-500/50 shadow-2xl">
            <div className="p-4 sm:p-6 border-b-2 border-green-500/30">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg flex-shrink-0">
                  <CheckCircleIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Confirm Your Booking
                  </h3>
                  <p className="text-sm text-gray-400">
                    Review your trip details before confirming
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6 space-y-6">
              {/* Trip Summary */}
              <div className="rounded-xl bg-gray-800/50 border border-white/10 p-4">
                <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                  <MapPinIcon className="w-5 h-5 mr-2 text-blue-400" />
                  Trip Summary
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Destination:</span>
                    <span className="text-white font-semibold">
                      {pendingBooking.destination}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white font-semibold">
                      {pendingBooking.startDate} - {pendingBooking.endDate}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Flight:</span>
                    <span className="text-white font-semibold">
                      {pendingBooking.flight.airline} (
                      {pendingBooking.flight.number})
                    </span>
                  </div>
                </div>
              </div>

              {/* Cost Breakdown */}
              <div className="rounded-xl bg-gray-800/50 border border-white/10 p-4">
                <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                  <DollarSignIcon className="w-5 h-5 mr-2 text-green-400" />
                  Cost Breakdown
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">
                      Tourist Spots ({selectedSpots.length}):
                    </span>
                    <span className="text-white">
                      ₱{pendingBooking.spotsCost.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Transportation:</span>
                    <span className="text-white">
                      ₱{pendingBooking.transportCost.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Flight:</span>
                    <span className="text-white">
                      ₱{pendingBooking.flightCost.toLocaleString()}
                    </span>
                  </div>
                  <div className="border-t border-white/10 pt-2 mt-2">
                    <div className="flex justify-between">
                      <span className="text-lg font-bold text-white">
                        Total Cost:
                      </span>
                      <span className="text-2xl font-bold text-green-400">
                        ₱{pendingBooking.cost.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Selected Spots */}
              <div className="rounded-xl bg-gray-800/50 border border-white/10 p-4">
                <h4 className="text-lg font-bold text-white mb-3">
                  Selected Tourist Spots
                </h4>
                <div className="space-y-2">
                  {selectedSpots.map((spot, idx) => <div key={idx} className="flex items-center space-x-2 text-sm">
                      <CheckCircleIcon className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span className="text-gray-300">{spot}</span>
                    </div>)}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 pt-4">
                <button onClick={cancelBookingConfirmation} className="flex-1 py-3 rounded-xl bg-gray-700/50 text-white hover:bg-gray-700 transition-all font-bold text-base border-2 border-white/20 hover:border-white/40">
                  Cancel
                </button>
                <button onClick={confirmBooking} className="flex-1 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-lg hover:shadow-green-500/50 transition-all font-bold text-base flex items-center justify-center space-x-2 border-2 border-green-500/50">
                  <CheckIcon className="w-5 h-5" />
                  <span>Confirm Booking</span>
                </button>
              </div>
            </div>
          </div>
        </div>}
    </div>;
};
export default Trips;