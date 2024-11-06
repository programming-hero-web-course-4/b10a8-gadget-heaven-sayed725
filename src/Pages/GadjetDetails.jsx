import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import { addToCart, addToWishList, getStoredWishList} from '../Utilitiz';



const GadjetDetails = () => {
    const {id} = useParams()
    const data = useLoaderData()
    const [gadget , setGadget] = useState({})
    const [currentRating, setCurrentRating] = useState(0)
    const [isWishList, setIsWishList] = useState(false)
    
    useEffect(()=>{
        const singleData = data.find(gadget=>gadget.product_id==id)
        setGadget(singleData)
        const addWishList = getStoredWishList()
        const isExist = addWishList.find(item=> item.product_id == singleData.product_id) 
        if(isExist){
            setIsWishList(true)
        }
    },[data,id])

    const{product_title,product_image,price,specification,description,rating} = gadget
    const ratingChanged = (newRating) => {
        setCurrentRating(newRating)
      };

     const handleAddToCart = (gadget)=>{
        addToCart(gadget)
     }

     const handleAddToWishList = (gadget)=>{
        addToWishList(gadget)
        setIsWishList(true)
     }




    return (
        <div className='relative pb-[400px]'>
           <div className='text-center pt-8 pb-[240px] bg-[#9538E2] text-white'>
            <h3 className='text-3xl font-bold'>Product Details</h3>
            <p className='mt-4'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
           </div>
           <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 p-8 w-10/12 mx-auto justify-between rounded-xl absolute top-[160px] left-[133px] z-10 bg-white shadow-xl'>
            <div className='border-2 rounded-xl'>
                <img className='rounded-xl object-cover h-[500px] w-full' src={product_image} alt="" />
            </div>
            <div className='w-full flex flex-col gap-4'>
                <h2 className='text-3xl font-semibold'>{product_title}</h2>
                <p className='text-xl font-semibold'>Price: $ {price} </p>
                <button className='text-[#309C08] bg-[#309C081A] rounded-3xl px-3 py-2 w-[100px]'>In Stock</button>
                <p className='text-[#09080F99]'>{description}</p>
                <p className='font-bold text-xl'>Specification</p>
               <div className='list-decimal'>
                {
                 specification &&  specification.map((spec,index)=>(<li key={index} className='text-[#09080F99]'>{spec}</li>))
                }
               </div>
               <p className='flex items-center gap-2'>Rating : {rating} <FaStar className='text-yellow-500'></FaStar> </p>
              <div className='flex gap-4 items-center'> <ReactStars count={5}
               onChange={ratingChanged}
                 size={24}
                activeColor="#ffd700"></ReactStars> <p className=' bg-slate-100 px-2 py-1 rounded-3xl'>{currentRating}</p></div>

               <div className='flex flex-grow gap-4 items-center'>
                <button onClick={()=>handleAddToCart(gadget)} className='btn bg-[#9538E2] text-white rounded-3xl'>Add To Cart <p><BsCart3 /></p></button>
                <button disabled={isWishList} onClick={()=>handleAddToWishList(gadget)} className='btn text-2xl border-2 rounded-full p-3 '><FaRegHeart></FaRegHeart></button>
               </div>
               </div> 
           </div>
        </div>
    );
};

export default GadjetDetails;