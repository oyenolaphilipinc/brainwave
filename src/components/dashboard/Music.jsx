// App.js

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Menu, Search, Code, ImageIcon, MessageSquare, Music, Settings, VideoIcon, UserRoundX, LogOut, ArrowRight } from "lucide-react";
import empty from "../../assets/empty.png"

const Music = () => {
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
            <div className="flex ml-3">
                <div className="mb-12">
                    <MessageSquare className="h-15 w-20 mr-2 md:mr-0 text-violet-500 border px-3 py-1 rounded-md border-[#0e0d15]"/>
                    </div>
                    <div>
                    <h1 className="flex text-3xl ml-1 md:ml-2 md:text-3xl">Conversation</h1>
                    <p className="text-center text-lg md:text-sm md:ml-2">Our most advanced conversation model.</p>
                </div>
            </div>
            <div>
                <div className="border w-11/12 px-2 mx-auto py-3 border-gray-700 rounded-md md:flex">
                    <input type="text" placeholder="How do i calculate the radius of a circle" className="w-full outline-none border-r-none pl-2 md:pl-4 mb-3 bg-[#0e0d15]"/><br/>
                    <button className="w-full border px-3 py-2 bg-indigo-800 border-none rounded-md md:w-56">Generate</button>
                </div>
            </div>
            <div className="mt-12">
                <img src={empty} width="400" height="400" className="mx-auto"/>
                <p className="text-center">No conversation started.</p>
            </div>
        </div>
        
          </div>
        </div>
  );
};

export default Music;
