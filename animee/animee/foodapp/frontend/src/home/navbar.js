import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Col, Form } from 'react-bootstrap';

function   Naav() {
  return (
    <Navbar expand="lg" className="bg-dark" variant="dark">
      <Container fluid> 
        <Navbar.Brand href="/"><img src='a1.png' alt='anime' style={{ width: '200px', height: '100px' }}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" m-lg-4"
            />
          </Col>
          <Nav className='ms-auto justify-content-end'>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/movies">Movies</Nav.Link>
            <Nav.Link href="feedbacks">Feedback</Nav.Link>
            <Nav.Link href="login">Login / Register</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Drama</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Adventure</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Sci-Fi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Fantasy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Thriller</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">Sports</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.8">superpower</NavDropdown.Item>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Naav;