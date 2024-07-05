import React,{useContext} from 'react'
import { ShopContext } from '../../context/shop-context';
import './cart.css'
function CartItem(props) {
    const {id,productName,Price,productImage}=props.data;
    const{cartItems,addToCart,removeFromCart,updateItenCount}=useContext(ShopContext);
  return (
    
    <div className='cartItem' style={{height:200,width:700,marginBottom:10}}>
      <div style={{height:150,width:300,float:'left'}}>
       <img src={productImage} style={{height:198,width:200}}/>
       </div>
       <div className='description'>
         <p><b>{productName}</b></p>
         <p>₹{Price}</p>
         <div className='countHandler'>
          <button onClick={()=>removeFromCart(id)}>-</button>
          <input value={cartItems[id]} onChange={(e)=>updateItenCount(Number(e.target.value))}/>
          <button onClick={()=>addToCart(id)}>+</button>
         </div>
       </div>
    </div>
    
  )
}

export default CartItem;