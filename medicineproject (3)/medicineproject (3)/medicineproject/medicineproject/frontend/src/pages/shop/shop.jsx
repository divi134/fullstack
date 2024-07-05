import React from "react";
import { Product } from "../../product";
import Pro from "./pro";
import "./shop.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
const Shop = () => {
  return (
    <div>
      <div>
        <Navbar>
          <Container>
            <Navbar.Brand
              to="/"
              id="nav"
              style={{ marginRight: 500, marginLeft: 0 }}
            >
              MEDICINA
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home" id="linky">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/labtest" id="linky">
                LabTest
              </Nav.Link>
              <Nav.Link as={Link} to="/shop" id="linky">
                Shop
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" id="linky">
                Contact
              </Nav.Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Nav.Link
                as={Link}
                to="/signin"
                id="linky"
                style={{ marginRight: 10 }}
              >
                Logout
              </Nav.Link>
              &nbsp;&nbsp;&nbsp;
              <Nav.Link as={Link} to="/cart" id="linky">
                <FaCartPlus style={{ height: 40, width: 45, color: "green" }} />
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div className="products">
        {Product.map((prod) => (
          <Pro data={prod} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
