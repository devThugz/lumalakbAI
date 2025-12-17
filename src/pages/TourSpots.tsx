import React, { useState } from 'react';
import { MapPinIcon, EyeIcon, PlusIcon, ImageIcon, CalendarIcon, DollarSignIcon, StarIcon, EditIcon, TrashIcon, UploadIcon } from 'lucide-react';
const TourSpots = () => {
  const [activeTab, setActiveTab] = useState('mySpots');
  const tourSpots = [{
    id: 1,
    name: 'Crystal Blue Lagoon',
    location: 'Phuket, Thailand',
    category: 'Natural Attraction',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A stunning turquoise lagoon surrounded by limestone cliffs.',
    status: 'active',
    visitors: 1245,
    investorInterest: 7,
    rating: 4.8
  }, {
    id: 2,
    name: 'Ancient Temple Complex',
    location: 'Siem Reap, Cambodia',
    category: 'Cultural Site',
    image: 'https://images.unsplash.com/photo-1564511287875-f5c9a3d68557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Explore ancient temples with intricate stone carvings and rich history.',
    status: 'active',
    visitors: 2450,
    investorInterest: 5,
    rating: 4.9
  }, {
    id: 3,
    name: 'Mountain Zipline Adventure',
    location: 'Queenstown, New Zealand',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1581439645268-ea7bbe6bd091?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Experience the thrill of ziplining through mountain valleys.',
    status: 'draft',
    visitors: 0,
    investorInterest: 2,
    rating: 0
  }];
  const renderTabContent = () => {
    switch (activeTab) {
      case 'mySpots':
        return <MySpots spots={tourSpots} />;
      case 'analytics':
        return <Analytics spots={tourSpots} />;
      case 'investors':
        return <Investors spots={tourSpots} />;
      case 'create':
        return <CreateSpot />;
      default:
        return <MySpots spots={tourSpots} />;
    }
  };
  return <div className="space-y-6">
      <div className="bg-gray-900 p-4 rounded-xl">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-xl font-bold text-white mb-2">
              Tour Spot Management
            </h1>
            <p className="text-gray-400">
              Create and manage your tourist attractions
            </p>
          </div>
          <button onClick={() => setActiveTab('create')} className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors flex items-center">
            <PlusIcon className="h-4 w-4 mr-1" />
            New Tour Spot
          </button>
        </div>
      </div>
      <div className="bg-gray-900 rounded-xl overflow-hidden">
        <div className="flex border-b border-gray-700">
          <button className={`px-4 py-3 text-sm font-medium ${activeTab === 'mySpots' ? 'text-white border-b-2 border-purple-500' : 'text-gray-400 hover:text-gray-200'}`} onClick={() => setActiveTab('mySpots')}>
            My Tour Spots
          </button>
          <button className={`px-4 py-3 text-sm font-medium ${activeTab === 'analytics' ? 'text-white border-b-2 border-purple-500' : 'text-gray-400 hover:text-gray-200'}`} onClick={() => setActiveTab('analytics')}>
            Analytics
          </button>
          <button className={`px-4 py-3 text-sm font-medium ${activeTab === 'investors' ? 'text-white border-b-2 border-purple-500' : 'text-gray-400 hover:text-gray-200'}`} onClick={() => setActiveTab('investors')}>
            Investor Leads
          </button>
        </div>
        <div className="p-4">{renderTabContent()}</div>
      </div>
    </div>;
};
const MySpots = ({
  spots
}: {
  spots: any[];
}) => {
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {spots.map(spot => <div key={spot.id} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-gray-600 transition-colors">
          <div className="relative h-40">
            <img src={spot.image} alt={spot.name} className="w-full h-full object-cover" />
            <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${spot.status === 'active' ? 'bg-green-900 text-green-300' : spot.status === 'draft' ? 'bg-yellow-900 text-yellow-300' : 'bg-gray-700 text-gray-300'}`}>
              {spot.status.charAt(0).toUpperCase() + spot.status.slice(1)}
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-white">{spot.name}</h3>
              {spot.status === 'active' && <div className="flex items-center text-yellow-400">
                  <StarIcon className="h-4 w-4 mr-1" />
                  <span className="text-sm">{spot.rating}</span>
                </div>}
            </div>
            <div className="flex items-center text-xs text-gray-400 mb-2">
              <MapPinIcon className="h-3 w-3 mr-1" />
              <span>{spot.location}</span>
            </div>
            <div className="mb-2">
              <span className="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded">
                {spot.category}
              </span>
            </div>
            <p className="text-xs text-gray-400 mb-3">{spot.description}</p>
            {spot.status === 'active' && <div className="flex justify-between text-xs text-gray-400 mb-3">
                <span>{spot.visitors} visitors</span>
                <span>{spot.investorInterest} investor inquiries</span>
              </div>}
            <div className="flex space-x-2">
              <button className="flex-1 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white text-xs py-1.5 rounded transition-colors">
                <EyeIcon className="h-3 w-3 mr-1" />
                View Details
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded text-gray-300 transition-colors">
                <EditIcon className="h-4 w-4" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-red-900 hover:bg-red-800 rounded text-red-300 transition-colors">
                <TrashIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>)}
    </div>;
};
const Analytics = ({
  spots
}: {
  spots: any[];
}) => {
  return <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <h3 className="text-sm font-medium text-gray-300 mb-2">
            Total Visitors
          </h3>
          <div className="text-2xl font-bold text-white">3,695</div>
          <div className="text-xs text-green-400 mt-1">
            ↑ 12.3% from last month
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <h3 className="text-sm font-medium text-gray-300 mb-2">
            Investor Interest
          </h3>
          <div className="text-2xl font-bold text-white">14</div>
          <div className="text-xs text-green-400 mt-1">
            ↑ 27.8% from last month
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <h3 className="text-sm font-medium text-gray-300 mb-2">
            Average Rating
          </h3>
          <div className="text-2xl font-bold text-white flex items-center">
            4.85
            <StarIcon className="h-5 w-5 text-yellow-400 ml-1" />
          </div>
          <div className="text-xs text-green-400 mt-1">
            ↑ 0.2 from last month
          </div>
        </div>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
        <h3 className="text-sm font-medium text-gray-300 mb-4">
          Visitor Traffic
        </h3>
        <div className="h-60 flex items-center justify-center">
          <p className="text-gray-500">
            Visitor traffic chart would appear here
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <h3 className="text-sm font-medium text-gray-300 mb-4">
            Top Performing Spots
          </h3>
          <div className="space-y-3">
            {spots.filter(spot => spot.status === 'active').map(spot => <div key={spot.id} className="flex items-center">
                  <div className="w-10 h-10 rounded overflow-hidden mr-3">
                    <img src={spot.image} alt={spot.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white">
                      {spot.name}
                    </div>
                    <div className="text-xs text-gray-400">
                      {spot.visitors} visitors
                    </div>
                  </div>
                  <div className="flex items-center text-yellow-400">
                    <StarIcon className="h-4 w-4 mr-1" />
                    <span className="text-sm">{spot.rating}</span>
                  </div>
                </div>)}
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <h3 className="text-sm font-medium text-gray-300 mb-4">
            Visitor Demographics
          </h3>
          <div className="h-48 flex items-center justify-center">
            <p className="text-gray-500">
              Visitor demographics chart would appear here
            </p>
          </div>
        </div>
      </div>
    </div>;
};
const Investors = ({
  spots
}: {
  spots: any[];
}) => {
  return <div className="space-y-6">
      <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
        <h3 className="text-sm font-medium text-white mb-4">Investor Leads</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Investor
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Tour Spot
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Interest Level
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                      <span className="text-white font-medium">JD</span>
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-medium text-white">
                        John Davis
                      </div>
                      <div className="text-xs text-gray-400">
                        john@venturecapital.com
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="text-sm text-white">Crystal Blue Lagoon</div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-900 text-green-300">
                    High
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-400">
                  June 15, 2023
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-blue-400">
                  <button className="text-blue-400 hover:text-blue-300">
                    View Details
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center">
                      <span className="text-white font-medium">ML</span>
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-medium text-white">
                        Maria Lee
                      </div>
                      <div className="text-xs text-gray-400">
                        maria@asianinvestors.com
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="text-sm text-white">
                    Ancient Temple Complex
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-900 text-yellow-300">
                    Medium
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-400">
                  June 12, 2023
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-blue-400">
                  <button className="text-blue-400 hover:text-blue-300">
                    View Details
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-600 flex items-center justify-center">
                      <span className="text-white font-medium">RK</span>
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-medium text-white">
                        Robert Kim
                      </div>
                      <div className="text-xs text-gray-400">
                        robert@ecoinvest.com
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="text-sm text-white">Crystal Blue Lagoon</div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-900 text-green-300">
                    High
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-400">
                  June 10, 2023
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-blue-400">
                  <button className="text-blue-400 hover:text-blue-300">
                    View Details
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
        <h3 className="text-sm font-medium text-white mb-4">
          Investment Opportunities
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-sm font-medium text-white">
                Infrastructure Expansion
              </h4>
              <span className="text-xs bg-blue-900 text-blue-300 px-2 py-1 rounded-full">
                $250K - $500K
              </span>
            </div>
            <p className="text-xs text-gray-300 mb-3">
              Seeking investment for infrastructure expansion at Crystal Blue
              Lagoon to accommodate growing visitor numbers.
            </p>
            <div className="flex justify-between">
              <button className="px-3 py-1.5 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors">
                Edit Proposal
              </button>
              <button className="px-3 py-1.5 text-xs bg-green-600 hover:bg-green-700 text-white rounded transition-colors">
                View Interested Investors (3)
              </button>
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-sm font-medium text-white">
                Eco-Lodge Development
              </h4>
              <span className="text-xs bg-blue-900 text-blue-300 px-2 py-1 rounded-full">
                $800K - $1.2M
              </span>
            </div>
            <p className="text-xs text-gray-300 mb-3">
              Development of sustainable eco-lodges near Ancient Temple Complex
              to provide accommodation for visitors.
            </p>
            <div className="flex justify-between">
              <button className="px-3 py-1.5 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors">
                Edit Proposal
              </button>
              <button className="px-3 py-1.5 text-xs bg-green-600 hover:bg-green-700 text-white rounded transition-colors">
                View Interested Investors (1)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
const CreateSpot = () => {
  return <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
      <h3 className="text-lg font-medium text-white mb-4">
        Create New Tour Spot
      </h3>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Spot Name
            </label>
            <input type="text" className="bg-gray-700 block w-full py-2 px-3 border border-gray-600 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Enter spot name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Location
            </label>
            <input type="text" className="bg-gray-700 block w-full py-2 px-3 border border-gray-600 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="City, Country" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Category
          </label>
          <select className="bg-gray-700 block w-full py-2 px-3 border border-gray-600 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option value="">Select category</option>
            <option value="natural">Natural Attraction</option>
            <option value="cultural">Cultural Site</option>
            <option value="adventure">Adventure</option>
            <option value="entertainment">Entertainment</option>
            <option value="dining">Dining</option>
            <option value="accommodation">Accommodation</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Description
          </label>
          <textarea rows={4} className="bg-gray-700 block w-full py-2 px-3 border border-gray-600 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Describe your tour spot"></textarea>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Opening Hours
            </label>
            <div className="flex items-center space-x-2">
              <CalendarIcon className="h-5 w-5 text-gray-500" />
              <input type="text" className="bg-gray-700 block w-full py-2 px-3 border border-gray-600 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="e.g. 9AM-5PM, Monday-Sunday" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Entry Fee (if applicable)
            </label>
            <div className="flex items-center space-x-2">
              <DollarSignIcon className="h-5 w-5 text-gray-500" />
              <input type="text" className="bg-gray-700 block w-full py-2 px-3 border border-gray-600 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="e.g. $10 per person" />
            </div>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Upload Images
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-600 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-400">
                <label htmlFor="file-upload" className="relative cursor-pointer bg-gray-700 rounded-md font-medium text-blue-400 hover:text-blue-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                  <span className="px-2 py-1">Upload files</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-400">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end space-x-3 pt-4">
          <button type="button" className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors">
            Save as Draft
          </button>
          <button type="button" className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors flex items-center">
            <UploadIcon className="h-4 w-4 mr-1" />
            Publish Tour Spot
          </button>
        </div>
      </div>
    </div>;
};
export default TourSpots;