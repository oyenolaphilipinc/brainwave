// App.js

import React, { useState } from 'react';
import Sidebar from './Sidebar';

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
        <button className="mt-4 ml-4 px-4 py-2 bg-gray-800 text-white rounded-md" onClick={toggleSidebar}>Open Sidebar</button>
      </div>
    </div>
  );
};

export default DashboardHome;
