import React, { useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";
import { getStoredCart, getStoredWishList } from "../Utilitiz";
import { useLoaderData } from "react-router-dom";

const Dashboard = () => {
    const data = useLoaderData()
    const[isActive,setIsActive]= useState(true)
    const [carts , setCarts] = useState([])
    const [wishLists , setWishLists] = useState([])

    const handleCartSort = ()=>{
        const sortedCartList = [...data].sort((a,b)=>b.price-a.price);
        setCarts(sortedCartList)
    }


    const handleWishListSort = ()=>{
        const sortedWishList = [...data].sort((a,b)=>b.price-a.price);
        setWishLists(sortedWishList)
    }





    useEffect(()=>{
        const storedWishList = getStoredWishList()
        setWishLists(storedWishList)
    },[])

    useEffect(()=>{
        const storedCrt = getStoredCart()
        setCarts(storedCrt)
    },[])

  return (
    <div className="bg-slate-100">
      <div className="text-center pt-8 pb-8 bg-[#9538E2] text-white">
        <h3 className="text-3xl font-bold">Dashboard</h3>
        <p className="mt-4 mb-8">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>

        <div className="flex gap-6 mx-auto justify-center">
            <button onClick={()=>{setIsActive(true)}} className={`${isActive? "btn rounded-3xl text-[#9538E2]  px-10 py-2":"btn rounded-3xl text-white bg-transparent px-10 py-2 hover:text-black"}`}>Cart</button>
            <button onClick={()=>{setIsActive(false)}} className={`${isActive? "btn rounded-3xl text-white bg-transparent px-10 py-2 hover:text-black":"btn rounded-3xl text-[#9538E2]  px-10 py-2"}`}>WishList</button>
      </div>
      </div>

     <div className="w-10/12 mx-auto">
     {
        isActive? <Cart carts={carts} handleCartSort={handleCartSort}></Cart> : <Wishlist wishLists={wishLists} handleWishListSort={handleWishListSort}></Wishlist>
      }
     </div>
    
    </div>
  );
};

export default Dashboard;
