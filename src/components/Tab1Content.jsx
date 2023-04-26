import React, { useState } from 'react';
import { FaAngleUp, FaAngleDown, FaCalendar, FaEllipsisH } from 'react-icons/fa';

const Container = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
      <>

       <div className="bg-white p-4 mb-4">
      <div className="flex items-center justify-between border-b-2 border-gray-200 pb-2">
        <div className="flex items-center">
          <button onClick={handleToggle} className="text-gray-500 mr-2">
            {isOpen ? <FaAngleUp /> : <FaAngleDown />}
          </button>
          <div className="bg-blue-500 rounded-full p-1.5 mr-2">
          </div>
          <div>
            <p className="text-gray-800 font-semibold">
              <span className="font-bold">Task</span> Created <span className="font-bold">Nasyx Rakeeb</span>
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-gray-400 mr-2 items-center flex">
           <span className="mr-2"><FaCalendar /> </span>26 Apr 2023
          </p>
          <button className="text-gray-500">
            <FaEllipsisH />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="flex mt-4">
          <div className="mr-4">
            <img src="https://randomuser.me/api/portraits/women/22.jpg" className="rounded-full w-6 h-6" alt="Profile" />
          </div>
          <div>
            <p className="font-bold mb-2">Hello inside container body</p>
            <p className="text-gray-500 text-sm mb-4">
              Lorem ipsum dolor sit amet
            </p>
            <div className="border border-gray-200 rounded-lg grid grid-cols-3">
              <div className="border-r border-gray-200 py-4 px-6">
                <p className="text-gray-500 text-sm mb-1">Remainder</p>
                <p className="font-bold text-sm">random text</p>
              </div>
              <div className="border-r border-gray-200 py-4 px-6">
                <p className="text-gray-500 text-sm mb-1">Task priority</p>
                <div className="flex items-center">
                  <div className="bg-red-500 rounded-full w-3 h-3 mr-2" />
                  <p className="font-bold text-sm text-red-500">High</p>
                </div>
              </div>
              <div className="py-4 px-6">
                <p className="text-gray-500 text-sm mb-1">Assigned to</p>
                <p className="font-bold text-sm">John Doe</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Container;
