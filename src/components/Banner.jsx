const Banner = () => {
    return (
       <div className="relative">
         <div className="flex flex-col justify-center items-center bg-[#9538E2] gap-8 rounded-b-2xl">
            <h1 className="text-6xl text-center text-white font-bold mt-10">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
            <p className="text-center text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            <button className="btn bg-white text-[#9538E2] font-bold mb-[270px] rounded-3xl">Shop Now</button>
        </div>
        <div className="pb-5 relative bottom-[220px]">
            <img className="h-[560px] w-8/12 mx-auto p-2 border-2 border-white rounded-2xl" src="../../public/banner.jpg" alt="" />
        </div>
       </div>
    );
};

export default Banner;