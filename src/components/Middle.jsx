import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { FaAngleUp, FaStackOverflow, FaCalendarAlt, FaEllipsisH } from 'react-icons/fa';
import Tab1Content from "./Tab1Content.jsx"

const Middle = () => {
const [activeTab, setActiveTab] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

const [filter, setFilter] = useState('All');
  const [user, setUser] = useState('All');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleUserChange = (event) => {
    setUser(event.target.value);
  };

const tabs = [
{
label: 'Activity',
content: (<div className="flex-col mt-4">
<div className="flex mb-4">
        <div className="mr-4">
          <select value={filter} onChange={handleFilterChange} className="bg-white border border-gray-400 rounded-sm px-4 py-3 outline-0 border-0 rounded-lg">
            <option value="All">Filter activity 21/25</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
          </select>
        </div>
        <div className="">
          <select value={user} onChange={handleUserChange} className="bg-white border border-gray-400 rounded-sm px-4 py-3 outline-0 border-0 rounded-lg">
            <option value="All">All Users</option>
            <option value="User 1">User 1</option>
            <option value="User 2">User 2</option>
          </select>
        </div>
        </div>
              <p className="font-bold mb-4  font-medium text-gray-900">Upcoming activities</p>
        <div>
        <Tab1Content />
        <Tab1Content />
              <p className="font-bold mb-4  font-medium text-gray-900">Activity history</p>
             <Tab1Content />
             <Tab1Content />
             <Tab1Content />
        </div>
      </div>
      )
},
{
label: 'Notes',
content: "2"
},
{
label: 'Emails',
content: 'Content for Tab 3'
},
{
label: 'Calls',
content: 'Content for Tab 4'
},
{
label: 'Task',
content: 'Content for Tab 5'
},
{
label: 'Meeting',
content: 'Content for Tab 6'
}
];

const handleClick = (index) => {
setActiveTab(index);
};

return (
<div className="h-full flex flex-col mx-4 mt-1">
{/* search */}
<div className="bg-transparent w-full border-b border-gray-300 flex items-center">
<div className="flex items-center">
<FaSearch className="mx-2 text-gray-500" />
<input
         className="bg-transparent focus:outline-none p-2"
         type="text"
         placeholder="Search activity, notes, emails..."
       />
</div>
</div>
  {/* tab bar */}
  <div className="flex justify-center items-center mt-4 w-full" style={{backgroundColor: "#EAEEF6"}}>
  {tabs.map((tab, index) => (
    <button
      key={index}
      className={`px-4 py-3 rounded-sm ${activeTab === index ? 'bg-white' : ''} text-black text-sm w-full font-medium`}
      style={{ color: activeTab === index ? 'black' : 'gray', outline: "none" }}
      onClick={() => handleClick(index)}
    >
      {tab.label}
    </button>
  ))}
</div>
  {/* active tab content */}
  {tabs[activeTab].content}
</div>
);
};

export default Middle