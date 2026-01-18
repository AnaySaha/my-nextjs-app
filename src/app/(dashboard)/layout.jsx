import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen grid grid-cols-12 bg-gray-50">
      
      {/* Sidebar */}
      <aside className="col-span-12 md:col-span-3 lg:col-span-2 bg-white border-r shadow-sm p-6">
        <h2 className="text-xl font-bold mb-6 text-gray-800">
          Dashboard
        </h2>

        <ul className="space-y-3">
          <li className="px-4 py-2 rounded-lg cursor-pointer font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition">
            User List
          </li>
          <li className="px-4 py-2 rounded-lg cursor-pointer font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition">
            Services
          </li>
          <li className="px-4 py-2 rounded-lg cursor-pointer font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition">
            Orders
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="col-span-12 md:col-span-9 lg:col-span-10 p-6">
        <div className="bg-white rounded-xl shadow-sm p-6 min-h-[calc(100vh-3rem)]">
          {children}
        </div>
      </main>

    </div>
  );
}
