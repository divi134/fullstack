import React from "react";
import 'react-slideshow-image/dist/styles.css';
import { Fade,Zoom,Slide } from "react-slideshow-image";
import './home.css';
import slide3 from './images/rams.jpg';
import slide0 from './images/slide0.jpg';
import slide1 from './images/slide1.jpg';
import slide2 from './images/slide2.jpg';

import{Navbar,Nav,Container} from 'react-bootstrap'
import {FaTwitter, FaYoutube,FaFacebook,FaLinkedin,FaCartPlus} from 'react-icons/fa'
import {MDBFooter,MDBContainer,MDBBtn,MDBIcon}from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom';


function Home(){
    const but=()=>{window.location.href='/shop'}
    const imgs=[slide3,slide0,slide1,slide2]
    return(
        <div className="homes" >
             <div>
    <Navbar  data-bs-theme="dark" >
        <Container>
          <Navbar.Brand to="/" id='nav' style={{marginRight:490,marginLeft:0}}>MEDICINA</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/home" id="linky">Home</Nav.Link>
            <Nav.Link as={Link} to="/labtest" id="linky">LabTest</Nav.Link>
            <Nav.Link as={Link} to="/shop" id="linky">Shop</Nav.Link>
            <Nav.Link as={Link} to="/contact" id="linky">Contact</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


            <Nav.Link as={Link} to="/signin" id="linky" style={{marginRight:10}}>Logout</Nav.Link>&nbsp;&nbsp;&nbsp;

            <Nav.Link as={Link} to="/cart" id="linky"><FaCartPlus style={{height:40,width:45, color:"green"}}/></Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </div>

            <Fade transitionDuration={.0001}>
                    {imgs.map((imge,index)=>(
                        <div key={index}>
                            <div className="content">
                                <img src={imge} style={{height:'600px', width:'400px'}}/>
                            </div>

                        </div>
                    
                    ))}
            </Fade>
            <div>
            <Link to={'shop'}>
                 <button className="butt" onClick={but}> Order Now</button>
           </Link>
            </div>
            <div className="last">
            <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
            <FaTwitter className="icons twitter"/>&nbsp;&nbsp;
            <FaYoutube className="icons twitter"/>&nbsp;&nbsp;

            <FaFacebook className="icons twitter"/>&nbsp;&nbsp;
            <FaLinkedin className="icons twitter"/>
        </section>
      </MDBContainer>

      <div className='text-center p-1' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://medical.com/'>
          Medical.com
        </a>
      </div>
    </MDBFooter>    

            </div>


        </div>
    )
}
export default Home;