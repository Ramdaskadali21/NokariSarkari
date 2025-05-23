import React, { useState } from 'react';          // Add useState 
import Navbar from './components/Navbar';
import Sidebar from './components/sidebar';      // Adjust path as needed
import './index.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);  // Sidebar open state

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      {/* Pass toggleSidebar handler to Navbar */}
      <Navbar onMenuClick={toggleSidebar} />

      <div className="flex">
        {/* Pass isOpen and onClose props to Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

        <main className="flex-1 container mx-auto p-4">
          {/* Content that scrolls */}
          <h1 className="text-3xl font-bold">Welcome to your site!</h1>
          <p>Scroll down to see the navbar shrink and change style.</p>
          <div style={{ height: '1500px' }}></div> {/* Just to enable scroll */}
        </main>
      </div>

      {/* Optional overlay when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}
    </>
  );
}

export default App;
