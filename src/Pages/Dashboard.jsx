import React, { useState } from "react";
import "react-tabs/style/react-tabs.css";

const Dashboard = () => {
    const[isActive,setIsActive]= useState(false)

  return (
    <div>
      <div className="text-center pt-8 pb-8 bg-[#9538E2] text-white">
        <h3 className="text-3xl font-bold">Dashboard</h3>
        <p className="mt-4 mb-8">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>

        <div className="flex gap-5 mx-auto justify-center">
            <button className="btn rounded-3xl text-[#9538E2]  px-10 py-2">Cart</button>
            <button className="btn rounded-3xl text-white bg-transparent px-10 py-2 ">WishList</button>
      </div>
      </div>
    
    </div>
  );
};

export default Dashboard;
