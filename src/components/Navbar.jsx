import React from 'react';
import { FaSearch, FaPlus, FaEnvelope, FaBell, FaCalendarAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav style={{backgroundColor: "#1F2228"}} className="px-4 py-3 flex justify-between items-center">
      <div className="flex items-center">
        <img src="https://picsum.photos/200" alt="Logo" className="h-6 w-6 mr-2" />
        <span className="text-white text-lg font-semibold">Emerge</span>
        <div className="mx-4 h-6 border-l border-gray-600"></div>
        <span className="text-white text-lg font-light">Contacts</span>
      </div>
      
      <div className="flex items-center">
        <form action="#" method="POST">
          <div className="relative">
            <input type="text" id="search" placeholder="Search" style={{backgroundColor: "#35383E"}} className="text-white rounded-full py-2 pr-4 pl-10 focus:outline-none focus:bg-gray-700 w-40 sm:w-64 lg:w-96" />
            <label htmlFor="search" className="absolute mt-3 left-0 top-0 ml-3 flex items-center">
              <FaSearch className="text-gray-500" />
              <span className="sr-only">Search</span>
            </label>
          </div>
        </form>
        <button className="bg-orange-500 rounded-full h-8 w-8 flex items-center justify-center ml-4">
          <FaPlus className="text-white" />
        </button>
        <div className="mx-4 h-6 border-l border-gray-600"></div>
        <div className="flex items-center">
          <button className="text-gray-500 hover:text-white focus:outline-none">
            <FaEnvelope className="h-5 w-5" />
          </button>
          <button className="text-gray-500 hover:text-white focus:outline-none ml-4">
            <FaBell className="h-5 w-5" />
          </button>
          <button className="text-gray-500 hover:text-white focus:outline-none ml-4">
            <FaCalendarAlt className="h-5 w-5" />
          </button>
        </div>
        <div className="mx-4 h-6 border-l border-gray-600"></div>
        <div className="flex items-center">
          <img src="https://picsum.photos/200" alt="Profile" className="h-8 w-8 rounded-full" />
          <div className="ml-2">
            <div className="text-white font-medium">John Doe</div>
            <div className="text-gray-500 text-sm">CEO, admin</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
