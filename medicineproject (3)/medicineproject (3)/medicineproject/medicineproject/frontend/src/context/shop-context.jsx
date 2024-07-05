import React,{createContext,useState} from 'react'
import { Product } from '../product';
export const ShopContext=createContext(null);
const getDefaultCart=()=>{
     let cart={}
     for (let i=1;i<Product.length+1;i++){
        cart[i]=0;
     }
     return cart;
}
export const ShopContextProvider=(props)=>{
    const [cartItems,setCartItems]=useState(getDefaultCart());
    const getTotalAmount=()=>{
        let total=0
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo=Product.find((prod)=>prod.id==Number(item))
                total+=cartItems[item]*itemInfo.Price
            }
        }
        return total
    }
    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const updateItenCount=(newAmount,itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:newAmount}))
    }
    const contextValue={cartItems,addToCart,removeFromCart,updateItenCount,getTotalAmount} 
    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}
