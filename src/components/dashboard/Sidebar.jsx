// Sidebar.js

import React from 'react';
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from "lucide-react";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div className={`fixed top-0 left-0 h-full w-64 bg-gray-900 shadow-lg z-50 transform transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="p-4">
        <h1 className="text-xl font-bold text-white">BrainWave</h1>
        <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md w-full flex"><LayoutDashboard className='h-5 w-5 mr-3 text-sky-500'/> Dashboard</button>
        <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md w-full flex"><MessageSquare className='h-5 w-5 mr-3 text-violet-500'/>Coversation</button>
        <button className="mt-2 px-4 py-2 bg-gray-800 text-white rounded-md w-full flex"><Music className='h-5 w-5 mr-3 text-emerald-500'/>Music Generation</button>
        <button className="mt-2 px-4 py-2 bg-gray-800 text-white rounded-md w-full flex"><ImageIcon className='h-5 w-5 mr-3 text-pink-700'/>Image Generation</button>
        <button className="mt-2 px-4 py-2 bg-gray-800 text-white rounded-md w-full flex"><VideoIcon className='h-5 w-5 mr-3 text-orange-700'/>Video Generation</button>
        <button className="mt-2 px-4 py-2 bg-gray-800 text-white rounded-md w-full flex"><Code className='h-5 w-5 mr-3 text-green-700'/>Code Generation</button>
        <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md w-full flex"><Settings className='h-5 w-5 mr-3'/>Settings</button>
      </div>
      <button className="fixed bottom-4 left-4 px-4 py-2 bg-gray-800 text-white rounded-md">Logout</button>
      <button className="fixed top-4 right-4" onClick={toggle}>
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  );
};

export default Sidebar;
