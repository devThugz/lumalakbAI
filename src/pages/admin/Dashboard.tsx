import React from 'react';
import { UsersIcon, GlobeIcon, TrendingUpIcon, ShieldIcon, AlertTriangleIcon } from 'lucide-react';
const AdminDashboard = () => {
  return <div className="space-y-4 sm:space-y-6">
      <div className="bg-gray-900 p-3 sm:p-4 rounded-xl sm:rounded-2xl mb-4 border border-teal-500/20">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">
              Admin Dashboard
            </h1>
            <p className="text-sm sm:text-base text-gray-400">
              Manage your tourism platform and monitor activity
            </p>
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-teal-500 to-orange-500 hover:shadow-lg hover:shadow-teal-500/50 text-white rounded-lg sm:rounded-xl transition-all text-xs sm:text-sm font-medium">
              System Settings
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-gray-900 p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl border border-teal-500/30 flex flex-col sm:flex-row items-center shadow-lg shadow-teal-500/10">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-teal-900 flex items-center justify-center mb-2 sm:mb-0 sm:mr-3 md:mr-4">
            <UsersIcon className="h-5 w-5 sm:h-6 sm:w-6 text-teal-400" />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-sm sm:text-base md:text-lg font-medium text-gray-200">
              Total Users
            </h3>
            <p className="text-xl sm:text-2xl font-bold text-white">2,845</p>
          </div>
        </div>
        <div className="bg-gray-900 p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl border border-green-500/30 flex flex-col sm:flex-row items-center shadow-lg shadow-green-500/10">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-900 flex items-center justify-center mb-2 sm:mb-0 sm:mr-3 md:mr-4">
            <GlobeIcon className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-sm sm:text-base md:text-lg font-medium text-gray-200">
              Destinations
            </h3>
            <p className="text-xl sm:text-2xl font-bold text-white">348</p>
          </div>
        </div>
        <div className="bg-gray-900 p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl border border-orange-500/30 flex flex-col sm:flex-row items-center shadow-lg shadow-orange-500/10">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-900 flex items-center justify-center mb-2 sm:mb-0 sm:mr-3 md:mr-4">
            <TrendingUpIcon className="h-5 w-5 sm:h-6 sm:w-6 text-orange-400" />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-sm sm:text-base md:text-lg font-medium text-gray-200">
              Investments
            </h3>
            <p className="text-xl sm:text-2xl font-bold text-white">$12.4M</p>
          </div>
        </div>
        <div className="bg-gray-900 p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl border border-red-500/30 flex flex-col sm:flex-row items-center shadow-lg shadow-red-500/10">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-900 flex items-center justify-center mb-2 sm:mb-0 sm:mr-3 md:mr-4">
            <AlertTriangleIcon className="h-5 w-5 sm:h-6 sm:w-6 text-red-400" />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-sm sm:text-base md:text-lg font-medium text-gray-200">
              Issues
            </h3>
            <p className="text-xl sm:text-2xl font-bold text-white">7</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="lg:col-span-2">
          <div className="bg-gray-900 rounded-xl sm:rounded-2xl border border-teal-500/30 overflow-hidden shadow-lg shadow-teal-500/10">
            <div className="p-3 sm:p-4 border-b border-gray-700">
              <h2 className="text-base sm:text-lg md:text-xl font-medium text-white flex items-center">
                <UsersIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-teal-400" />
                User Management
              </h2>
            </div>
            <div className="p-3 sm:p-4">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead>
                    <tr>
                      <th className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        User
                      </th>
                      <th className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Role
                      </th>
                      <th className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider hidden sm:table-cell">
                        Status
                      </th>
                      <th className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-800 divide-y divide-gray-700">
                    <tr>
                      <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-teal-600 flex items-center justify-center">
                            <span className="text-white font-medium text-xs sm:text-sm">
                              JD
                            </span>
                          </div>
                          <div className="ml-2 sm:ml-4">
                            <div className="text-xs sm:text-sm font-medium text-white">
                              John Doe
                            </div>
                            <div className="text-xs text-gray-400 hidden sm:block">
                              john@example.com
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-900 text-green-300">
                          Traveller
                        </span>
                      </td>
                      <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap hidden sm:table-cell">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-teal-900 text-teal-300">
                          Active
                        </span>
                      </td>
                      <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-400">
                        <button className="text-teal-400 hover:text-teal-300 mr-2 sm:mr-3">
                          Edit
                        </button>
                        <button className="text-red-400 hover:text-red-300">
                          Disable
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-purple-600 flex items-center justify-center">
                            <span className="text-white font-medium text-xs sm:text-sm">
                              SJ
                            </span>
                          </div>
                          <div className="ml-2 sm:ml-4">
                            <div className="text-xs sm:text-sm font-medium text-white">
                              Sarah Johnson
                            </div>
                            <div className="text-xs text-gray-400 hidden sm:block">
                              sarah@example.com
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-900 text-purple-300">
                          Investor
                        </span>
                      </td>
                      <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap hidden sm:table-cell">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-teal-900 text-teal-300">
                          Active
                        </span>
                      </td>
                      <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-400">
                        <button className="text-teal-400 hover:text-teal-300 mr-2 sm:mr-3">
                          Edit
                        </button>
                        <button className="text-red-400 hover:text-red-300">
                          Disable
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-green-600 flex items-center justify-center">
                            <span className="text-white font-medium text-xs sm:text-sm">
                              RL
                            </span>
                          </div>
                          <div className="ml-2 sm:ml-4">
                            <div className="text-xs sm:text-sm font-medium text-white">
                              Robert Lee
                            </div>
                            <div className="text-xs text-gray-400 hidden sm:block">
                              robert@example.com
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-900 text-green-300">
                          Traveller
                        </span>
                      </td>
                      <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap hidden sm:table-cell">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-700 text-gray-300">
                          Inactive
                        </span>
                      </td>
                      <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-400">
                        <button className="text-teal-400 hover:text-teal-300 mr-2 sm:mr-3">
                          Edit
                        </button>
                        <button className="text-green-400 hover:text-green-300">
                          Enable
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-3 sm:mt-4 flex justify-end">
                <button className="px-3 py-1 text-xs bg-gray-700 text-gray-300 rounded hover:bg-gray-600 transition-colors">
                  View All Users
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-gray-900 rounded-xl sm:rounded-2xl border border-amber-500/30 overflow-hidden shadow-lg shadow-amber-500/10">
            <div className="p-3 sm:p-4 border-b border-gray-700">
              <h2 className="text-base sm:text-lg md:text-xl font-medium text-white flex items-center">
                <ShieldIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-amber-400" />
                System Alerts
              </h2>
            </div>
            <div className="p-3 sm:p-4">
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-red-900/30 p-2 sm:p-3 rounded-lg border border-red-800">
                  <div className="flex items-start">
                    <AlertTriangleIcon className="h-4 w-4 sm:h-5 sm:w-5 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-medium text-red-300">
                        Security Alert
                      </h4>
                      <p className="text-xs text-red-200 mt-1">
                        Multiple failed login attempts detected
                      </p>
                      <p className="text-xs text-red-300 mt-1 sm:mt-2">
                        2 hours ago
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-amber-900/30 p-2 sm:p-3 rounded-lg border border-amber-800">
                  <div className="flex items-start">
                    <AlertTriangleIcon className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-medium text-amber-300">
                        System Warning
                      </h4>
                      <p className="text-xs text-amber-200 mt-1">
                        Database server reaching 80% capacity
                      </p>
                      <p className="text-xs text-amber-300 mt-1 sm:mt-2">
                        1 day ago
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-teal-900/30 p-2 sm:p-3 rounded-lg border border-teal-800">
                  <div className="flex items-start">
                    <AlertTriangleIcon className="h-4 w-4 sm:h-5 sm:w-5 text-teal-400 mr-2 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-medium text-teal-300">
                        Information
                      </h4>
                      <p className="text-xs text-teal-200 mt-1">
                        System maintenance scheduled for 12/15/2023
                      </p>
                      <p className="text-xs text-teal-300 mt-1 sm:mt-2">
                        3 days ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3 sm:mt-4">
                <button className="w-full px-3 py-2 text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 rounded transition-colors">
                  View All Alerts
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default AdminDashboard;