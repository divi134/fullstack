import React, { useContext } from 'react'
import { Product } from '../../product'
import { ShopContext } from '../../context/shop-context'
import CartItem from './cart-item'
import './cart.css'
import { Link } from 'react-router-dom'
import { FaCartPlus } from 'react-icons/fa'
import{Navbar,Nav,Container} from 'react-bootstrap';
const Cart = () => {
    const{cartItems,getTotalAmount}=useContext(ShopContext);
    let total=getTotalAmount();
  return (
    <div>
    <div>
    <Navbar>
        <Container>
          <Navbar.Brand to="/" id='nav' style={{marginRight:500,marginLeft:0}}>MEDICINA</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/" id="linky">Home</Nav.Link>
            <Nav.Link as={Link} to="/labtest" id="linky">LabTest</Nav.Link>
            <Nav.Link as={Link} to="/shop" id="linky">Shop</Nav.Link>
            <Nav.Link as={Link} to="/contact" id="linky">Contact</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


<Nav.Link as={Link} to="/" id="linky" style={{marginRight:10}}>Logout</Nav.Link>&nbsp;&nbsp;&nbsp;

<Nav.Link as={Link} to="/cart" id="linky"><FaCartPlus style={{height:40,width:45, color:"green"}}/></Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </div>
    <div className='cart'>
        <div><h2>Your Cart Items</h2></div>
        <div className='cartItems'>
            {Product.map((prod)=>{
                if(cartItems[prod.id]!==0){
                    return <CartItem data={prod}/>
                }
            })}
        </div>
        {total>0?(
        <div className='checkout'>
            <p className='price'>Price:₹{total}</p>
           <Link to={'/shop'}> <button>Continue shopping</button></Link>
           <Link to={'/pay'}><button>Check Out</button></Link>

        </div>
  ):(<h2>empty</h2>)}
    </div>
    </div>
  )
}

export default Cart