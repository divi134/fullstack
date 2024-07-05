import { ShopContext } from './context/shop-context';
import React, { useContext } from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom'
import './pay.css';
// import payd from './images/pay.png'
import {FaPaypal,FaGooglePay} from 'react-icons/fa'
function Pay(){
    const[paydata,setPaydata]=useState({
        email:'',
        card:'',
        date:'',
        cardname:'',
        country:''
    })
    
    const pay=(e)=>{
        e.preventDefault();
        if(paydata.email==='' ||paydata.cart==='' ||paydata.date==='' ||paydata.cardname==='' ||paydata.country==='' ){
            alert("please fill the deatails")
        }
        else{
            window.location.href='/shop';
            alert("paymemt sucessful")
        }
    }
    const{cartItems,getTotalAmount}=useContext(ShopContext);
    let total=getTotalAmount();
    return(
       <div >
        <div className='pay'> 
           <center> <h1 style={{color:'green'}}>Pay with card</h1><hr/>
            <h3 style={{color:'red'}}>YOU WILL PAY ₹{getTotalAmount()}</h3></center>
            <h5 style={{color:'black'}}>If you want to change your orders then please Click <Link to='../cart'>cart</Link></h5>

            <form onSubmit={pay}>
                <label>Email</label><br/>
                <input type='email' onClick={(e)=>{setPaydata({...paydata,email:e.target.value})}}></input>
                <br/>
                <label>Card Information <FaPaypal className='paypal'/><FaGooglePay className='google'/></label><br/>
                <input type='text' placeholder='0000111100001111' onClick={(e)=>{setPaydata({...paydata,card:e.target.value})}}></input>
                <br/><br/>
                <label>Name of the Card
                    <select name='card'>
                        <option value="credit">Credit card</option>
                        <option value="credit">Deit card</option>
                        <option value="credit">Credit card</option>
                    </select>x
                </label><br/>
                <br/><br/>
                <label>Country or region</label><br/>
                <input type='text'onClick={(e)=>{setPaydata({...paydata,country:e.target.value})}}></input>
                <br/><br/>
                <button>Pay ₹{getTotalAmount()}</button>

            </form>
            
        </div>
        </div>
    )
}
export default Pay;