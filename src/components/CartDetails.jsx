import React from "react";

const CartDetails = ({ cart }) => {
  const {
    product_title,
    product_image,
    price,
    specification,
  } = cart;
  return (
    <div className="">
      <div className="rounded-2xl p-5 mb-6 shadow-xl bg-white">
        <div className="flex justify-between items-center">
          <div className="flex gap-8 items-center">
            <img
              className="h-[130px] w-[200px] rounded-2xl object-cover"
              src={product_image}
              alt=""
            />
            <div className="flex flex-col justify-between gap-5">
              <h4 className="text-2xl font-bold">{product_title}</h4>
              <p className="opacity-70"><span className="font-bold">Description: </span>{specification}</p>
              <p className="opacity-70 font-bold">Price: $ {price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
