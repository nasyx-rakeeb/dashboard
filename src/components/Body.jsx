import Leftsidebar from "./Leftsidebar.jsx";
import Middle from "./Middle.jsx";
import Rightsidebar from "./Rightsidebar.jsx";

const Body = () => {
  return (
    <div className="grid grid-cols-12 gap-4 h-screen">
      <div className="col-span-3 bg-white" >
        <Leftsidebar />
      </div>
      <div className="col-span-6 bg-gray-100" style={{backgroundColor: "#F5F7F9"}}>
        <Middle />
      </div>
      <div className="col-span-3 bg-white">
        <Rightsidebar />
      </div>
    </div>
  );
};

export default Body;
