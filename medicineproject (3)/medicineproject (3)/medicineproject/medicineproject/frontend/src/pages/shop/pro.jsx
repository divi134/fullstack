import React, { useContext } from 'react'
import {ShopContext} from '../../context/shop-context'
function Pro(props) {
    const {id,productName,Price,productImage,matter}=props.data;
    const {addToCart,cartItems}=useContext(ShopContext);
    const cartItemAmount=cartItems[id]
  return (
    <div className='product'>
        <img src={productImage}/>
        <div className='description'>
            <p className='name'>{productName}</p>
            <p style={{fontFamily:'fantasy'}}>₹{Price}</p>
            <p>{matter}</p>
        </div>
        <button className='addToCartBtn' onClick={()=>addToCart(id)}>Add To Cart{cartItemAmount>0 && <>({cartItemAmount})</>}</button>
     
    </div>
  )
}

export default Pro