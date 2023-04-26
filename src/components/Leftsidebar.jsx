import {
    FaArrowLeft,
    FaPlus,
    FaEnvelope,
    FaPhone,
    FaEllipsisH
} from 'react-icons/fa';
import {
    useState
} from "react";
const profilePic = 'https://randomuser.me/api/portraits/men/1.jpg'; // Sample profile picture

const Leftsidebar = () => {
    const [activeTab,
        setActiveTab] = useState("leads");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="bg-white h-full">
    {/* back button */}
      <div className="flex items-center p-4">
        <FaArrowLeft className="text-gray-700 mr-2 text-xs" />
        <span className="text-gray-700 text-xs font-semibold">Back</span>
        </div>
      {/* profile */}
      <div className="flex flex-col items-center mt-1">
        <img src={profilePic} alt="Profile" className="rounded-full h-20 w-20 mb-2" />
        <span className="text-gray-700 font-bold font-medium">John Doe</span>
        <div className="flex items-center mt-1">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png" alt="Google Logo" className="h-3.5 mr-1" />
          <span className="text-gray-500 text-sm">Google</span>
        </div>
    </div>
      {/* icons */}
                   <div className="flex justify-center mt-4">
        <div className="flex flex-col items-center">
          <div className="bg-gray-100 rounded-full p-2 mb-1">
            <FaPlus className="text-xs text-gray-500" />
        </div>
          <p className="text-xs text-gray-500 font-medium">
Add
        </p>
        </div>
        <div className="flex flex-col items-center ml-4">
          <div className="bg-gray-100 rounded-full p-2 mb-1">
            <FaEnvelope className="text-xs text-gray-500" />
            </div>
          <p className="text-xs text-gray-500 font-medium">
Email
            </p>
        </div>
        <div className="flex flex-col items-center ml-4">
          <div className="bg-gray-100 rounded-full p-2 mb-1">
            <FaPhone className="text-xs text-gray-500" />
            </div>
          <p className="text-xs text-gray-500 font-medium">
Call
            </p>
        </div>
        <div className="flex flex-col items-center ml-4">
          <div className="bg-gray-100 rounded-full p-2 mb-1">
            <FaEllipsisH className="text-xs text-gray-500" />
            </div>
          <p className="text-xs text-gray-500 font-medium">
More
            </p>
        </div>
    </div>
      {/* orange button */}
      <div className="mt-4 flex justify-center">
  <button style={ { width: "80%" }} className="bg-orange-500 text-xs text-white py-2 px-4 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50">
    Convert to contact
  </button>
    </div>
    {/* online status */}
    <div className="mt-4 flex items-center justify-center">
  <div className="flex items-center">
    <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
    <span className="text-xs text-gray-500">Last activity: today at 10:45 AM</span>
    </div>
    </div>
    {/* tabs */}
     <div className="flex justify-between items-center mt-4 border-b border-gray-300 mx-6">
        <div
        className={`text-sm ${
        activeTab === "leads" ? "border-b-2 border-black font-bold": "text-gray-500"
        }`}
        onClick={() => handleTabClick("leads")}
        >
          Leads info
    </div>
        <div
        className={`text-sm ${
        activeTab === "address" ? "border-b-2 border-black font-bold": "text-gray-500"
        }`}
        onClick={() => handleTabClick("address")}
        >
          Address info
    </div>
    </div>
      {/* Tab Content */}
      {activeTab === "leads" ? (
        <div className="mt-4 mx-6">
          <div className="text-gray-500 ">
Email:
        </div>
          <div>
user@example.com
        </div>
          <div className="text-gray-500  mt-3">
Phone:
        </div>
          <div>
123-456-7890
        </div>
          <div className="text-gray-500  mt-3">
Lead:
        </div>
          <div>
Lead Name
        </div>
          <div className="text-gray-500  mt-2">
Owner:
        </div>
          <div>
Owner Name
        </div>
          <div className="text-gray-500  mt-3">
Name:
        </div>
          <div>
User Name
        </div>
        </div>
    ): (
        <div className="mt-4 mx-6">
          <div className="text-gray-500">
Address:
        </div>
          <div>
123 Main St
        </div>
          <div className="text-gray-500 mt-3">
City:
        </div>
          <div>
San Francisco
        </div>
          <div className="text-gray-500 mt-3">
State:
        </div>
          <div>
CA
        </div>
          <div className="text-gray-500 mt-3">
Zip:
        </div>
          <div>
12345
        </div>
         <div className="text-gray-500 mt-3">
Password:
        </div>
          <div>
12345678
        </div>
        </div>
        
    )}
</div>
);
};

const LabelValue = ({
label, value
}) => {
// Custom component for displaying label and value pairs
return (
<div className="flex flex-col mb-2">
      <span className="text-gray-400 text-sm">{label}</span>
      <span className="text-black">{value}</span>
</div>
);
};

export default Leftsidebar;