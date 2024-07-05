import { useState } from "react";
import "./contact.css";
import axios from "axios";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./signin.css";

import { FaCartPlus } from "react-icons/fa";
function Contact() {
  const [contactdata, contactform] = useState({
    fullname1: "",
    email1: "",
    message: "",
  });
  const submitfunction = (e) => {
    e.preventDefault();
    console.log(contactdata);
    axios
      .post("http://localhost:5000/contactadd", { contactdata })
      .then((res) => {
        alert(res.data.msg);
      });
  };
  return (
    <>
      <div>
        <Navbar data-bs-theme="dark">
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
      <div className="main1">
        <div className="main">
          <div className="cons">
            <form className="contact1" onSubmit={submitfunction}>
              <label>
                <h5>Full Name :</h5>
              </label>
              &nbsp;&nbsp;
              <input
                type="text"
                name="fullname1"
                placeholder="Enter your name"
                onChange={(e) =>
                  contactform({ ...contactdata, fullname1: e.target.value })
                }
              ></input>
              <br></br>
              <br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label>
                <h5>Email :</h5>
              </label>
              &nbsp;&nbsp;
              <input
                type="email"
                name="email1"
                placeholder="Enter Email"
                onChange={(e) =>
                  contactform({ ...contactdata, email1: e.target.value })
                }
              ></input>
              <br></br>
              <br></br>
              &nbsp;&nbsp;
              <label>
                <h5>Message :</h5>
              </label>
              &nbsp;&nbsp;&nbsp;
              <input
                type="textbox"
                name="message"
                onChange={(e) =>
                  contactform({ ...contactdata, message: e.target.value })
                }
              ></input>
              <br></br>
              <br></br>
              <center>
                <button id="but">
                  <h5>Submit</h5>
                </button>
              </center>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
