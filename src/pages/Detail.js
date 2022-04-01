import { Nav, Navbar, Container, Button, Row, Col } from "react-bootstrap";
import logo from '../Frame.png';
import { Link } from "react-router-dom";

function Detail() {
  return (

    <div>
    <Navbar collapseOnSelect expand="lg" className='text-white' style={{backgroundColor: 'black'}}>
        <Container>
        <Navbar.Brand>  
        <Link to="/">
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
            <Nav.Link><Link to="/complain" className='text-white' style={{ textDecoration:'none'}}> Complain </Link></Nav.Link>
            <Nav.Link><Link to="/profile" className='text-white' style={{ textDecoration:'none'}}> Profile </Link></Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className='text-white'>
            Logout
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
      
        <Container className="text-white" fluid style={{ minHeight: '80vh' ,
                                                        backgroundColor: 'black',
                                                        padding: '50px 150px',
                                                        }}>
        <Row>
                <Col>
                    <Container>
                    <img
                        src='https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=728&q=80'
                        width="400"
                        height="400"
                        alt="Dump Merch Logo"
            />
                    </Container>
                </Col>
                <Col>
                    <Container style={{textAlign: "justify"}}>
                        <p className="h1 text-danger">Mouse</p>
                        <p>600 stock</p>
                        <p>Spesifikasi:
                            -Conector :USB Cable 1,5M
                            -Tranmission system:Red light
                            -Mouse Button :4
                            -Operation platform:Win2000/Win XP/Win7/Win8/Win10/Mac OS/Linux
                        </p>
                        <p>
                        Nam pulvinar aliquam pretium. Etiam quis aliquet urna, quis maximus
                        elit. In imperdiet imperdiet nulla, ac rhoncus mauris semper
                        sollicitudin. Sed condimentum gravida accumsan. Proin eros quam,
                        pharetra eu lectus non, suscipit porta augue. Nam eu sapien at nisi
                        iaculis pretium. Proin interdum neque ex, et porttitor turpis dapibus
                        non. Quisque massa lacus, faucibus non aliquet id, interdum mattis
                        tellus. </p>
                        <p className="h3 text-danger" style={{textAlign: "right", fontWeight:'700'}} >Rp.300.900</p>
                        <Button style={{ marginTop: '30px' ,width:'600px' }} variant="danger" type="submit">
                            Buy
                        </Button>
                    </Container>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Detail;

