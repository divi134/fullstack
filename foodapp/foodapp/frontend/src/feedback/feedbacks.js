// import { Container } from "react-bootstrap";
// import Naav from "../home/navbar";

// function Feedback(){
//     return(
//         <>
//             <Container fluid>
//                 <Naav />
//                 <h1>Feedback</h1>
//             </Container>
//         </>
//     )
// }
// export default Feedback
import Form from 'react-bootstrap/Form';
import Naav from "../home/navbar";

function TextControlsExample() {
  return (
    <>
    <Naav />
    <Form>
        
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    </>
  );
}

export default TextControlsExample;