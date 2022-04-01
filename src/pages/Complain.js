import { Nav, Navbar, Container, Row, Col, Form } from "react-bootstrap";
import logo from '../Frame.png';
import photo from '../Scan.jpg';
import { Link } from "react-router-dom";

function Complain() {
  return (

    <div>
    <Navbar collapseOnSelect expand="lg" className='text-white' style={{backgroundColor: 'black'}}>
        <Container>
        <Navbar.Brand>  <Link to="/login">
        <img
                src={logo}
                width="60"
                height="60"
                className="d-inline-block align-top"
                alt="Dump Merch Logo"
            />
        </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            
            <Nav className="ms-auto">
            <Nav.Link><Link to="/complain" className='text-danger' style={{ textDecoration:'none'}}> Complain </Link></Nav.Link>
            <Nav.Link><Link to="/profile" className='text-white' style={{ textDecoration:'none'}}> Profile </Link></Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className='text-white'>
            Logout
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
      
        <Container className="text-white" fluid style={{ minHeight: '88vh' ,
                                                        backgroundColor: 'black',
                                                        padding: '50px 50px',
                                                        }}>
            <Row className="g-0">
                <Col xs={4} >
                    <Container style={{ minHeight: '70vh'  }}>
                    <img
                        src={photo}
                        width="50"
                        height="50"
                        style={{ borderRadius: '50px'}}
                        alt="Dump Merch Logo"
                    />
                    <div className="ms-2" style={{ display:'inline'}}>
                        <p className="text-white" style={{ marginBottom: '0px'}}>Admin</p>
                        <p style={{ color: '#6A6A6A'}}> Yes, Is there anything I can help</p>
                    </div>
                    </Container>
                </Col>
                <Col>
                    <Container style={{ minHeight: '70vh' , borderLeft:'3px solid #181818',  padding: '50px 50px'}}>
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Control style={{backgroundColor:'rgba(210, 210, 210, 0.25)'}} type="text" placeholder="Send Message" />
                    </Form.Group>
                    </Form>
                    </Container>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Complain;

