import React from "react";
import { MdDateRange } from "react-icons/md";
import { MdOutlineModeComment } from "react-icons/md";

const Reviews = () => {
  return (
    <div>
      <div className="text-center pt-8 pb-[50px] bg-[#9538E2] text-white flex flex-col gap-5">
        <h3 className="text-3xl font-bold">Our Top Product Reviews</h3>
        <p className="mt-4">
          Explore Our Customers Opinions to Manage best products for your
          usecase with a great value!
        </p>
        <input
          className="py-10 px-[300px] mx-auto text-center rounded-3xl bg-slate-100 text-[#9538E2] text-2xl font-semibold"
          type="text"
          placeholder="Add a Review?"
        />
        <div className="">
          <input
            className="py-2 px-10 mx-auto rounded-xl text-center font-semibold bg-slate-100"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="py-2  px-10 mx-auto rounded-xl ml-10 text-center font-semibold bg-slate-100"
            type="text"
            placeholder="Your Email"
          />
          <button className="py-2 px-10 rounded-xl ml-10 bg-white text-[#9538E2] hover:bg-slate-300 border-2 border-[#2a0e41] hover:border-black">
            Upload Your Review
          </button>
        </div>
      </div>



      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-5 gap-6">
        <div className="card bg-base-100 h-[395px] shadow-xl">
          <figure className="px-5 pt-5">
            <img
              src="https://i.ibb.co.com/yQfK2KF/Samsung-Galaxy-S24-ultra-Titanium-Gray-800x800.jpg"
              alt="Shoes"
              className="rounded-xl h-[180px] border-2 object-contain w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Samsung Galaxy S24 Ultra</h2>
            <p className="opacity-70">The Samsung Galaxy S24 Ultra is a powerful and feature-rich smartphone with a stunning display, impressive camera system, and long-lasting battery life. However, some users may find it too large and heavy...... <span className="text-bold">Read More</span></p>
            <div className="flex justify-end gap-8 items-center pt-2">
                <div>
                    <p className="flex gap-1 justify-center opacity-70 items-center"> <MdDateRange />  23 October,2024</p>
                </div>
                <div> 
                    <p className="flex gap-1 justify-center opacity-70 items-center"> <MdOutlineModeComment />  20</p>
                </div>
            </div>
          </div>
        </div>


        <div className="card bg-base-100 h-[395px] shadow-xl">
          <figure className="px-5 pt-5">
            <img
              src="https://i.ibb.co.com/CQsDc8z/Macbook-Pro-14.webp"
              alt="Shoes"
              className="rounded-xl h-[180px] border-2 object-contain w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Apple MacBook Pro 14</h2>
            <p className="opacity-70">The Apple MacBook Pro 14 offers incredible performance thanks to its powerful M2 Pro chip. It boasts a stunning Liquid Retina XDR display and long battery life, making it a great choice for professionals and creative individuals...... <span className="text-bold">Read More</span></p>

            <div className="flex justify-end gap-8 items-center pt-2">
                <div>
                    <p className="flex gap-1 justify-center opacity-70 items-center"> <MdDateRange />  1 November,2024</p>
                </div>
                <div> 
                    <p className="flex gap-1 justify-center opacity-70 items-center"> <MdOutlineModeComment />  20</p>
                </div>
            </div>
           
          </div>
        </div>


        <div className="card bg-base-100 h-[395px] shadow-xl">
          <figure className="px-5 pt-5">
            <img
              src="https://i.ibb.co.com/5n8XQ6t/galaxy-watch6-classic.webp"
              alt="Shoes"
              className="rounded-xl h-[180px] border-2 object-contain w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Samsung Galaxy Watch 6 Classic</h2>
            <p className="opacity-70">The Samsung Galaxy Watch 6 offers a vibrant display, improved performance, and advanced health features. However, its battery life could be better, especially for heavy users...... <span className="text-bold">Read More</span></p>

            <div className="flex justify-end gap-8 items-center pt-2">
                <div>
                    <p className="flex gap-1 justify-center opacity-70 items-center"> <MdDateRange />  6 November,2024</p>
                </div>
                <div> 
                    <p className="flex gap-1 justify-center opacity-70 items-center"> <MdOutlineModeComment />  20</p>
                </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Reviews;
