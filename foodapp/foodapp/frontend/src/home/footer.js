import { Col,Row } from "react-bootstrap"
import Container from "react-bootstrap/esm/Container"
function Footer() {
     return(
        <div>
                <Footer style={{width:"100%",
                position:"relative",
                vuttom: 0,
                display:"flex",
                justifyContent:"center"}}>
                        <Container>
                            <Row>
                                <Col className="text-center py-3">Copyright &copy; Anime</Col>
                            </Row>
                        </Container>
                </Footer>
        </div>

     )
}
export default Footer