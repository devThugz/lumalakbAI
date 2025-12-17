import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [{
  name: 'Jan',
  visitors: 4000,
  investment: 2400
}, {
  name: 'Feb',
  visitors: 3000,
  investment: 1398
}, {
  name: 'Mar',
  visitors: 2000,
  investment: 9800
}, {
  name: 'Apr',
  visitors: 2780,
  investment: 3908
}, {
  name: 'May',
  visitors: 1890,
  investment: 4800
}, {
  name: 'Jun',
  visitors: 2390,
  investment: 3800
}, {
  name: 'Jul',
  visitors: 3490,
  investment: 4300
}];
const TourismTrends = () => {
  return <div className="h-full">
      <div className="flex justify-between mb-4">
        <div className="space-y-1">
          <h3 className="text-sm font-medium text-gray-300">Tourism Growth</h3>
          <div className="flex items-baseline">
            <span className="text-xl font-bold text-white">+24.8%</span>
            <span className="text-xs text-green-400 ml-2">↑ 12.3%</span>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="px-2 py-1 text-xs bg-blue-600 text-white rounded">
            Visitors
          </button>
          <button className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded">
            Investment
          </button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart data={data} margin={{
        top: 10,
        right: 10,
        left: -20,
        bottom: 0
      }}>
          <defs>
            <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="colorInvestment" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#10B981" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" tick={{
          fill: '#9CA3AF',
          fontSize: 10
        }} />
          <YAxis tick={{
          fill: '#9CA3AF',
          fontSize: 10
        }} />
          <Tooltip contentStyle={{
          backgroundColor: '#1F2937',
          border: '1px solid #374151',
          borderRadius: '0.375rem',
          color: '#F9FAFB'
        }} />
          <Area type="monotone" dataKey="visitors" stroke="#3B82F6" fillOpacity={1} fill="url(#colorVisitors)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>;
};
export default TourismTrends;