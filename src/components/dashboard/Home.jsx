// App.js

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Menu, Search, Code, ImageIcon, MessageSquare, Music, Settings, VideoIcon, UserRoundX, LogOut } from "lucide-react";

const DashboardHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const togglePopover = () => {
    setToggle(!toggle);
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
        <div className="mt-4 mr-6 text-xl font-bold border px-1 py-1 rounded-full bg-green-950 border-black cursor-pointer" onClick={togglePopover}>OP</div>
          {toggle && (
          <div className="absolute z-10 top-15 right-0 bg-white border border-gray-300 p-3 rounded shadow-lg text-black">
            {/* Popover content */}
            <button className="flex"><Settings className='h-5 w-5 mr-2'/>Settings</button><br/>
            <button className="flex"><UserRoundX className='h-5 w-5 mr-2'/>Profile</button><br/>
            <button className="flex"><LogOut className='h-5 w-5 mr-2'/>Logout</button>
          </div>
      )}
        </div>
        <div className="mt-10">
          <h1 className="text-center text-2xl font-bold mb-2 md:text-4xl">Explore the power of AI</h1>
          <p className="text-sm text-center mb-8 md:text-lg">Chat with the smartest AI- Experience the power of AI</p>
          <div className="ml-6">
            <button className="border border-black pl-4 py-6 flex text-md rounded-md mb-4 w-11/12 cursor-pointer md:w-7/12 md:mx-auto"><MessageSquare className='h-5 w-5 mr-3 text-violet-500'/>Conversation</button>
            <button className="border border-black pl-4 py-6 flex text-md rounded-md w-11/12 mb-4 cursor-pointer md:w-7/12 md:mx-auto"><Music className='h-5 w-5 mr-3 text-emerald-500'/>Music Generation</button>
            <button className="border border-black pl-4 py-6 flex text-md rounded-md w-11/12 mb-4 cursor-pointer md:w-7/12 md:mx-auto"><ImageIcon className='h-5 w-5 mr-3 text-pink-700'/>Image Generation</button>
            <button className="border border-black pl-4 py-6 flex text-md rounded-md w-11/12 mb-4 cursor-pointer md:w-7/12 md:mx-auto"><VideoIcon className='h-5 w-5 mr-3 text-orange-700'/>Video Generation</button>
            <button className="border border-black pl-4 py-6 flex text-md rounded-md w-11/12 cursor-pointer md:w-7/12 md:mx-auto mb-12"><Code className='h-5 w-5 mr-3 text-green-700'/>Code Generation</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
