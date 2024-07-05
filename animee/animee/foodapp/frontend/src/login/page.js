import React from 'react';
import Naav from "../home/navbar";
import {
  MDBContainer,
  MDBInput,
  MDBBtn
}
from 'mdb-react-ui-kit';

function App() {
  return (
    <>
    <Naav />
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBInput wrapperClass='mb-4' placeholder='Email address' id='form1' type='email'/>
      <MDBInput wrapperClass='mb-4' placeholder='Password' id='form2' type='password'/>

      <div className="d-flex justify-content-between mx-3 mb-4">
      </div>

      <MDBBtn className="mb-4">Sign in</MDBBtn>

      <div className="text-center">
        <p>Not a member? <a href="../register">Register</a></p>

      </div>

    </MDBContainer>
    </>
  );
}

export default App;