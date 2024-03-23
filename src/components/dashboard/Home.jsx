// App.js

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Menu, Search } from "lucide-react";

const DashboardHome = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
      <div className="flex-grow">
        {/* Your main content here */}
        <div className="flex justify-between">
        <button className="mt-4 ml-4 px-4 py-2 bg-gray-800 text-white rounded-md" onClick={toggleSidebar}><Menu className="h-5 w-5" /></button>
        <div className="text-white mr-4 mt-3 hidden md:flex">
          <form>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-2 pr-3 rounded outline-none py-1 w-64 border border-black focus:border-blue-500"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-5 w-5 text-gray-400 mr-2" />
            </div>
        </div>
          </form>
        </div>
        <div className="mt-4 mr-6 text-xl font-bold border px-1 py-1 rounded-full bg-green-950 border-black cursor-pointer">OP</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
