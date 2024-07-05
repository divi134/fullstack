import {Card, Row, Col} from 'react-bootstrap';
import imgs from './images/bloodtest.webp'
import img2 from './images/vitaminb12.webp'
import img3 from './images/hometesting.webp'
import img4 from './images/vitamin.webp'
import img5 from './images/thy.webp'
import img6 from './images/paternitytest.webp'
import img7 from './images/allergy.webp'
import img8 from './images/tumor.png'
import img9 from './images/immunity.webp'
import { FaCartPlus } from 'react-icons/fa';
import './labtest.css'
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import{Navbar,Nav} from 'react-bootstrap'
function fun()
{
  window.location.href="/labform"
}
function LabTest() {
  return (
    <Container>
      <Row>
      <div>
    <Navbar  data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="/" id='nav' style={{marginRight:450,marginLeft:0}}>MEDICINA</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/home" id="linky">Home</Nav.Link>
            <Nav.Link as={Link} to="/labtest" id="linky">LabTest</Nav.Link>
            <Nav.Link as={Link} to="/shop" id="linky">Shop</Nav.Link>
            <Nav.Link as={Link} to="/contact" id="linky">Contact</Nav.Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


<Nav.Link as={Link} to="/signin" id="linky" style={{marginRight:10}}>Logout</Nav.Link>&nbsp;&nbsp;&nbsp;

<Nav.Link as={Link} to="/cart" id="linky"><FaCartPlus style={{height:40,width:45, color:"green"}}/></Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </div>
      </Row>
    <Row>
      <Col>
    <Card style={{ width: '20rem',height:'30rem',borderRadius:'2rem',border:'2px solid lightgrey',marginTop:20,marginLeft:20 }} className='car'>
      <Card.Img variant="top" src={imgs} style={{height:250,width:40,borderRadius:'2rem',border:'2px solid lightgrey' }} />
      <Card.Body>
        <Card.Title>Blood Testing</Card.Title>
        <Card.Text>
        A blood test that involves collecting and analyzing 
        a sample of a person's blood to assess their health and diagnose medical conditions.
        </Card.Text>
      </Card.Body>
      {/* <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup> */}
      <Card.Body>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={fun} style={{backgroundColor:'skyblue',border:'2px solid lightgrey',borderRadius:'2rem',height:45,width:100}}><h6>Register</h6></button>
      </Card.Body>
      
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '20rem',height:'30rem',borderRadius:'2rem',border:'2px solid lightgrey',marginTop:20,marginLeft:20 }} className='car'>
      <Card.Img variant="top" src={img2} style={{height:250,width:40,borderRadius:'2rem',border:'2px solid lightgrey' }} />
      <Card.Body>
        <Card.Title>Vitamin B12 Testing</Card.Title>
        <Card.Text>
        Vitamin B12 testing measures the concentration of vitamin B12 in a person's blood 
        to assess their nutritional status.
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <button onClick={fun} style={{backgroundColor:'skyblue',border:'2px solid lightgrey',borderRadius:'2rem',height:45,width:100}}><h6>Register</h6></button>
      </Card.Body>
      
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '20rem',height:'30rem',borderRadius:'2rem',border:'2px solid lightgrey',marginTop:20,marginLeft:20 }} className='car'>
      <Card.Img variant="top" src={img3} style={{height:250,width:40,borderRadius:'2rem',border:'2px solid lightgrey' }} />
      <Card.Body>
        <Card.Title>Home Drug Testing</Card.Title>
        <Card.Text>
        Home testing allows individuals to perform medical
        or laboratory tests in the comfort of their own homes, often using kits provided by companies.
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={fun} style={{backgroundColor:'skyblue',border:'2px solid lightgrey',borderRadius:'2rem',height:45,width:100}}><h6>Register</h6></button>
      </Card.Body>
      
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '20rem',height:'30rem',borderRadius:'2rem',border:'2px solid lightgrey',marginTop:20,marginLeft:20 }} className='car'>
      <Card.Img variant="top" src={img4} style={{height:250,width:40,borderRadius:'2rem',border:'2px solid lightgrey' }} />
      <Card.Body>
        <Card.Title>Vitamin D Testing</Card.Title>
        <Card.Text>
        Vitamin D testing is a medical procedure that measures the levels of vitamin D 
        in a person's blood to assess their nutritional status.
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={fun} style={{backgroundColor:'skyblue',border:'2px solid lightgrey',borderRadius:'2rem',height:45,width:100}}><h6>Register</h6></button>
      </Card.Body>
      
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '20rem',height:'30rem',borderRadius:'2rem',border:'2px solid lightgrey',marginTop:20,marginLeft:20 }} className='car'>
      <Card.Img variant="top" src={img5} style={{height:250,width:40,borderRadius:'2rem',border:'2px solid lightgrey' }} />
      <Card.Body>
        <Card.Title>Thyroid Testing</Card.Title>
        <Card.Text>
        Thyroid testing involves assessing the levels of T3&T4 and TSH in a person's blood 
        to diagnose thyroid disorders and evaluate thyroid function.
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={fun} style={{backgroundColor:'skyblue',border:'2px solid lightgrey',borderRadius:'2rem',height:45,width:100}}><h6>Register</h6></button>
      </Card.Body>
      
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '20rem',height:'30rem',borderRadius:'2rem',border:'2px solid lightgrey',marginTop:20,marginLeft:20 }} className='car'>
      <Card.Img variant="top" src={img6} style={{height:250,width:40,borderRadius:'2rem',border:'2px solid lightgrey' }} />
      <Card.Body>
        <Card.Title>Paternity Testing</Card.Title>
        <Card.Text>
        Paternity testing is a DNA-based analysis used to determine the biological
         relationship between a potential father
         and a child.
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={fun} style={{backgroundColor:'skyblue',border:'2px solid lightgrey',borderRadius:'2rem',height:45,width:100}}><h6>Register</h6></button>
      </Card.Body>
      
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '20rem',height:'30rem',borderRadius:'2rem',border:'2px solid lightgrey',marginTop:20,marginLeft:20 }}className='car'>
      <Card.Img variant="top" src={img7} style={{height:250,width:40,borderRadius:'2rem',border:'2px solid lightgrey' }} />
      <Card.Body>
        <Card.Title>Allergy Testing</Card.Title>
        <Card.Text>
        Allergy testing involves the identification of specific allergens that trigger an individual's
         allergic reactions, typically through skin tests, 
        blood tests.
        </Card.Text>
      </Card.Body>
     
      <Card.Body>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={fun}  style={{backgroundColor:'skyblue',border:'2px solid lightgrey',borderRadius:'2rem',height:45,width:100}}><h6>Register</h6></button>
      </Card.Body>
      
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '20rem',height:'30rem',borderRadius:'2rem',border:'2px solid lightgrey',marginTop:20,marginLeft:20 }} className='car'>
      <Card.Img variant="top" src={img8} style={{height:250,width:40,borderRadius:'2rem',border:'2px solid lightgrey' }} />
      <Card.Body>
        <Card.Title>Tumor Markers Testing</Card.Title>
        <Card.Text>
        Tumor markers are substances, often proteins 
        or other molecules, that are produced by cancer cells or the body in response to cancer.
        </Card.Text>
      </Card.Body>
      <Card.Body>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={fun} style={{backgroundColor:'skyblue',border:'2px solid lightgrey',borderRadius:'2rem',height:45,width:100}}><h6>Register</h6></button>
      </Card.Body>
      
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '20rem',height:'30rem',borderRadius:'2rem',border:'2px solid lightgrey',marginTop:20,marginLeft:20 }} className='car'>
      <Card.Img variant="top" src={img9} style={{height:250,width:40,borderRadius:'2rem',border:'2px solid lightgrey' }} />
      <Card.Body>
        <Card.Title>Immunity Testing</Card.Title>
        <Card.Text>
        Immunity testing assesses a person's immune response, 
      typically by measuring specific antibodies or immune cells,
       to determine protection.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button  onClick={fun}style={{backgroundColor:'skyblue',border:'2px solid lightgrey',borderRadius:'2rem',height:45,width:100}}><h6>Register</h6></button>
      </Card.Body>
      
    </Card>
    </Col>
    </Row>
    
    </Container>
  );
}

export default LabTest;