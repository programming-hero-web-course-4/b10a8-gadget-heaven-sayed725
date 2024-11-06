import { toast } from "react-toastify";


// cart function 
const getStoredCart = ()=>{
const storedCartListStr = localStorage.getItem('cart-list')
if(storedCartListStr){
    const storedCartList = JSON.parse(storedCartListStr)
    return storedCartList
}
else{
    return []
}
}

const addToCart =(gadget)=>{
const storedCartList = getStoredCart()
const isExist = storedCartList.find(item=> item.product_id == gadget.product_id)

if(isExist){
    return toast.error('Item already added to Cart!')
}
else{
    storedCartList.push(gadget)
const storedCartListStr = JSON.stringify(storedCartList)
localStorage.setItem('cart-list',storedCartListStr)
toast.success('This item is added to your cart list.')
}
}


// wishlist function 
const getStoredWishList = ()=>{
    const storedWishListStr = localStorage.getItem('wish-list')
    if(storedWishListStr){
        const storedWishList = JSON.parse(storedWishListStr)
        return storedWishList
    }
    else{
        return []
    }
    }
    
    const addToWishList =(gadget)=>{
    const storedWishList = getStoredWishList()

    const isExist = storedWishList.find(item=> item.product_id == gadget.product_id)
    if(isExist){
        return toast.error('item already added!')
    }
    else{
        storedWishList.push(gadget)
       const  storedWishListStr = JSON.stringify(storedWishList)
       localStorage.setItem('wish-list',storedWishListStr)
       toast.success('This item is added to your WishList!')
    }
    }


    const removeCart = ()=>{
        localStorage.removeItem('cart-list')
    }


export{addToCart, getStoredCart,
    addToWishList,getStoredWishList,removeCart
}