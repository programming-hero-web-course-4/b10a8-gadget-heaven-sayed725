import { RiSortDesc } from "react-icons/ri";
import WishListDetails from "./WishListDetails";
const Wishlist = ({ wishLists , handleWishListSort }) => {
  return (
    <div>
      <div className="flex justify-between items-center py-10">
        <p className="text-2xl font-bold">Cart</p>

        <div className="w-[210px] flex rounded-full bg-gradient-to-r from-purple-500 via-orange-300 to-purple-500 p-1 shadow-lg">
          <button onClick={handleWishListSort} className=" flex items-center gap-3 flex-1 text-[#9538E2] font-bold text-xl bg-white px-6 py-2 rounded-full">
            Sort by Price <RiSortDesc></RiSortDesc>
          </button>
        </div>
      </div>

      <div className="pb-[100px]">
       {
        wishLists.map(wishList=><WishListDetails key={wishList.product_id} wishList={wishList}></WishListDetails>)
       }
      </div>
    </div>
  );
};

export default Wishlist;
