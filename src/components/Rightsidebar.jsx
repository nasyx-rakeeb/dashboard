import React, {useState} from "react";
import { FaGoogle } from "react-icons/fa";
import { FaEnvelope,FaChevronDown, FaChevronUp, FaPhone, FaPlus } from 'react-icons/fa';

const Rightsidebar = () => {
    const Accordian = ({ label }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded p-2 mb-2 mr-7">
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleAccordion}>
<div className="flex items-center">
  
  <span className="mr-2">{label}</span>
  <div className="rounded bg-gray-400 text-white h-2 w-2 p-2 flex items-center justify-center mr-2">
    1
  </div>
</div>

        {isOpen ? <div className="flex items-center"><span className="text-xs mr-1">close</span> <FaChevronUp size={10} /> </div> : <div className="flex items-center"><span className="text-xs mr-1 text-gray-400">view</span> <FaChevronDown className="text-gray-400" size={10} /> </div>}
      </div>
      {isOpen && (
      <div>
      <div className="flex items-center mt-4 border rounded justify-center items-center p-1">
  <FaPlus className="text-gray-500 mr-2" />
  <span className="text-gray-500">Create new {label}</span>
</div>

<div className="border rounded p-2 mb-2 mt-1">
  <div className="flex justify-between mb-2">
    <span className="text-xs">April 20, 2023</span>
    <div style={{backgroundColor: '#00BFFF', color: 'white', borderRadius: '20px', padding: "1px 4px"}} className="rounded bg-skyblue font-blue text-xs">
      Contract Sent
    </div>
  </div>
  <div className="">Sample item</div>
  <div className="font-bold">$10,000</div>
</div>
</div>

      )}
    </div>
  );
};

  return (
    <div className="py-2 h-full flex flex-col">
    {/* company */}
      <div>
        <div className="flex items-center font-bold text-lg"> Company </div> 
        <div className="flex items-center mt-2"> 
          <FaGoogle size={26} /> 
            <div className="ml-2 flex flex-col"> 
              <div className="font-bold text-xs">Google Inc</div> 
              <div className="text-xs text-gray-500">google.com</div> 
            </div> 
          </div> 
        </div>
      {/* contact box */}
      <div className="border border-gray-200 rounded-lg p-2 pr-8 mt-4 w-fit">
        <div className="flex items-center mb-2">
          <FaEnvelope className="text-gray-400 mr-2" />
          <span>example@gmail.com</span>
        </div>
        <div className="flex items-center mb-2">
          <FaPhone className="text-gray-400 mr-2" />
          <span>+11234567890</span>
        </div>
      </div>
      {/* accordians */}
      <div className="mt-4">
      <Accordian label="Deals" />
      <Accordian label="Tickets" />
      <Accordian label="Note" />
      <Accordian label="Playbook" />
      <Accordian label="Item 5" />
      <Accordian label="Sample" />
      <Accordian label="Test" />
      <Accordian label="Booking" />
      </div>
    </div>
  );
};

export default Rightsidebar;
