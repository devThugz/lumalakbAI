import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUpIcon, DollarSignIcon, BarChart4Icon, MapPinIcon } from 'lucide-react';
const data = [{
  name: 'Bali',
  roi: 12.5,
  investment: 2.5
}, {
  name: 'Thailand',
  roi: 10.8,
  investment: 1.8
}, {
  name: 'Croatia',
  roi: 9.3,
  investment: 3.2
}, {
  name: 'Portugal',
  roi: 8.7,
  investment: 2.1
}, {
  name: 'Mexico',
  roi: 11.2,
  investment: 1.5
}];
const Invest = () => {
  return <div>
      <div className="bg-gray-900 p-4 rounded-xl mb-4">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-xl font-bold text-white mb-2">
              Investor Marketplace
            </h1>
            <p className="text-gray-400">
              Connect with tourism investment opportunities worldwide
            </p>
          </div>
          <div>
            <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors">
              List Your Project
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="bg-gray-900 p-4 rounded-xl flex items-center">
          <div className="w-12 h-12 rounded-full bg-green-900 flex items-center justify-center mr-4">
            <DollarSignIcon className="h-6 w-6 text-green-400" />
          </div>
          <div>
            <div className="text-sm text-gray-400">
              Total Investment Opportunities
            </div>
            <div className="text-2xl font-bold text-white">$48.3M</div>
          </div>
        </div>
        <div className="bg-gray-900 p-4 rounded-xl flex items-center">
          <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center mr-4">
            <TrendingUpIcon className="h-6 w-6 text-blue-400" />
          </div>
          <div>
            <div className="text-sm text-gray-400">Average ROI</div>
            <div className="text-2xl font-bold text-white">10.5%</div>
          </div>
        </div>
        <div className="bg-gray-900 p-4 rounded-xl flex items-center">
          <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center mr-4">
            <BarChart4Icon className="h-6 w-6 text-purple-400" />
          </div>
          <div>
            <div className="text-sm text-gray-400">Active Projects</div>
            <div className="text-2xl font-bold text-white">124</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-gray-900 rounded-xl overflow-hidden">
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-lg font-medium text-white">
              Top Investment Destinations
            </h2>
          </div>
          <div className="p-4 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5
            }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" tick={{
                fill: '#9CA3AF'
              }} />
                <YAxis yAxisId="left" orientation="left" stroke="#3B82F6" tick={{
                fill: '#9CA3AF'
              }} />
                <YAxis yAxisId="right" orientation="right" stroke="#10B981" tick={{
                fill: '#9CA3AF'
              }} />
                <Tooltip contentStyle={{
                backgroundColor: '#1F2937',
                border: '1px solid #374151',
                borderRadius: '0.375rem',
                color: '#F9FAFB'
              }} />
                <Bar yAxisId="left" dataKey="roi" fill="#3B82F6" name="ROI %" radius={[4, 4, 0, 0]} />
                <Bar yAxisId="right" dataKey="investment" fill="#10B981" name="Investment (M$)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-gray-900 rounded-xl overflow-hidden">
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-lg font-medium text-white">
              Featured Projects
            </h2>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-gray-200">
                    Beachfront Resort
                  </h3>
                  <span className="text-xs bg-green-900 text-green-400 px-2 py-1 rounded-full">
                    12% ROI
                  </span>
                </div>
                <div className="flex items-center text-xs text-gray-400 mb-2">
                  <MapPinIcon className="h-3 w-3 mr-1" />
                  <span>Bali, Indonesia</span>
                </div>
                <p className="text-xs text-gray-400 mb-2">
                  New luxury resort development with high tourism growth
                  potential.
                </p>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">$2.5M funding needed</span>
                  <span className="text-blue-400">62% funded</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-1.5 mt-1 mb-2">
                  <div className="bg-blue-500 h-1.5 rounded-full" style={{
                  width: '62%'
                }}></div>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs py-1.5 rounded transition-colors">
                  View Details
                </button>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-gray-200">
                    Eco-Tourism Lodge
                  </h3>
                  <span className="text-xs bg-green-900 text-green-400 px-2 py-1 rounded-full">
                    9% ROI
                  </span>
                </div>
                <div className="flex items-center text-xs text-gray-400 mb-2">
                  <MapPinIcon className="h-3 w-3 mr-1" />
                  <span>Costa Rica</span>
                </div>
                <p className="text-xs text-gray-400 mb-2">
                  Sustainable lodging in Costa Rica's rainforest region.
                </p>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">$800K funding needed</span>
                  <span className="text-blue-400">38% funded</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-1.5 mt-1 mb-2">
                  <div className="bg-blue-500 h-1.5 rounded-full" style={{
                  width: '38%'
                }}></div>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs py-1.5 rounded transition-colors">
                  View Details
                </button>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-gray-200">
                    Historic Hotel Renovation
                  </h3>
                  <span className="text-xs bg-green-900 text-green-400 px-2 py-1 rounded-full">
                    11% ROI
                  </span>
                </div>
                <div className="flex items-center text-xs text-gray-400 mb-2">
                  <MapPinIcon className="h-3 w-3 mr-1" />
                  <span>Lisbon, Portugal</span>
                </div>
                <p className="text-xs text-gray-400 mb-2">
                  Restoration of 19th century hotel in prime tourist district.
                </p>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">$1.8M funding needed</span>
                  <span className="text-blue-400">75% funded</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-1.5 mt-1 mb-2">
                  <div className="bg-blue-500 h-1.5 rounded-full" style={{
                  width: '75%'
                }}></div>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs py-1.5 rounded transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Invest;