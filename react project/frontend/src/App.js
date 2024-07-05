// import React, { useState, useEffect } from "react";
// import CollapsibleExample from "./components/navbarr";
// // import IndividualIntervalsExample from "./components/images";

// function App() {
//   // const [backendData, setBackendData] = useState([{}]);

//   // useEffect(() => {
//   //   fetch("/api")
//   //     .then((response) => response.json())
//   //     .then((data) => {
//   //       setBackendData(data);
//   //     });
//   // }, []);

//   return (
//     <div>
//       {/* {typeof backendData.users === "undefined" ? (
//         <p>Loading...</p>
//       ) : (
//         backendData.users.map((user, i) => <p key={i}>{user}</p>)
//       )} */}

//       <CollapsibleExample />
//       {/* <IndividualIntervalsExample /> */}
//     </div>
//   );
// }

// export default App;
import Signin from "./components/signin";
import Signup from "./components/signup";
import Home from "./components/home";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import CollapsibleExample from "./components/navbarr";

function App() {
  return (
    <BrowserRouter>
      <div>
        <CollapsibleExample />
        {/* <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand to="/" id="nav">
              MEDICO
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home" id="linky">
                home
              </Nav.Link>
              {/* <Nav.Link as={Link} to="/about" id="linky">
                about
              </Nav.Link>
              <Nav.Link as={Link} to="/buymedicine" id="linky">
                buymedicine
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" id="linky">
                contact
              </Nav.Link> */}
        {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Nav.Link as={Link} to="/signin" id="linky">
                login
              </Nav.Link>
              <Nav.Link as={Link} to="/signup" id="linky">
                register
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar> */}
      </div>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/buymedicine" element={<Buymedicine />} />
          <Route path="/contact" element={<Contact />} /> */}
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
