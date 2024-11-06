import { RiSortDesc } from "react-icons/ri";
import CartDetails from "./CartDetails";
import { useEffect, useState } from "react";
const Cart = ({carts , handleCartSort , handlePurchase}) => {

    const [isActive, setIsActive] = useState(true)

    useEffect(()=>{
        if(carts.length>0){
            setIsActive(false)
        }
    },[carts])

   

const sum = 0
 const totalCost = carts.reduce((sum,carts)=>sum+carts.price,0)

  return (
    <div className="">
      <div className="flex flex-col sm:flex-row justify-between items-center py-10">
        <p className="text-2xl font-bold">Cart</p>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <p className="text-2xl font-bold">
            Total cost: <span> $ {totalCost}</span>
          </p>
          <div
            className="w-[210px] flex rounded-full bg-gradient-to-r from-purple-500 via-orange-300 to-purple-500 p-1 shadow-lg"
          >
            <button onClick={handleCartSort} className=" flex items-center gap-3 flex-1 text-[#9538E2] font-bold text-xl bg-white px-6 py-2 rounded-full">
            Sort by Price <RiSortDesc></RiSortDesc>
            </button>
          </div>
          <button onClick={()=>document.getElementById('my_modal_5').showModal()} disabled={isActive}
           className="btn bg-gradient-to-r from-purple-600 via-orange-300 to-purple-600 rounded-full text-white text-xl font-bold px-11 py-2 hover:text-black">Purchase</button>
        </div>
      </div>

     <div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn hidden" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box flex flex-col justify-center items-center">
    <img className="h-[70px] w-[70px]" src="/Group.png" alt="" />
    <h3 className="font-bold text-2xl mt-7">Payment Successfully</h3>
    <p className="py-4">Thanks for purchasing.</p>
    <p>Total: ${totalCost}</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button onClick={handlePurchase}
        className="btn rounded-full">Close</button>
      </form>
    </div>
  </div>
</dialog>
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
