import { RiSortDesc } from "react-icons/ri";
import CartDetails from "./CartDetails";
const Cart = ({carts , handleCartSort}) => {

  return (
    <div className="">
      <div className="flex justify-between items-center py-10">
        <p className="text-2xl font-bold">Cart</p>
        <div className="flex items-center gap-6">
          <p className="text-2xl font-bold">
            Total cost: <span>999.99 $</span>
          </p>
          <div
            className="w-[210px] flex rounded-full bg-gradient-to-r from-purple-500 via-orange-300 to-purple-500 p-1 shadow-lg"
          >
            <button onClick={handleCartSort} className=" flex items-center gap-3 flex-1 text-[#9538E2] font-bold text-xl bg-white px-6 py-2 rounded-full">
            Sort by Price <RiSortDesc></RiSortDesc>
            </button>
          </div>
          <button className="btn bg-gradient-to-r from-purple-600 via-orange-300 to-purple-600 rounded-full text-white text-xl font-bold px-11 py-2 hover:text-black">Purchase</button>
        </div>
      </div>


      <div className="pb-[100px]">
       {
        carts.map(cart=><CartDetails key={cart.product_id} cart={cart}></CartDetails>)
       }
      </div>
    </div>
  );
};

export default Cart;
