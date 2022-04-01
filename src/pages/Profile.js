import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import logo from '../Frame.png';
import photo from '../Scan.jpg';
import mouse from '../OIP.jpg';
import { Link } from "react-router-dom";

function Profile() {
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
          <Nav.Link><Link to="/profile" className='text-danger' style={{ textDecoration:'none'}}> Profile </Link></Nav.Link>
          <Nav.Link eventKey={2} href="#memes" className='text-white'>
          Logout
          </Nav.Link>
          </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>

    <Container className="text-white" fluid style={{ minHeight: '80vh' ,
                                                     backgroundColor: 'black',
                                                     padding: '50px 50px',
                                                        }}>
        <Row>
                <Col>
                    <Container>
                    <p className="h5 text-danger mb-4">My Profile</p>
                    <img
                        src={photo}
                        width="300"
                        height="400"
                        alt="Dump Merch Logo"
            />
                    </Container>
                </Col>
                <Col>
                    <Container style={{textAlign: "justify", marginTop:'50px', marginLeft: '-150px'}}>
                        <p className="text-danger mb-0">Name</p>
                        <p>Faldhi Ghifari</p>
                        <p className="text-danger mb-0">Email</p>
                        <p>faldhighifari248@gmail.com</p>
                        <p className="text-danger mb-0">Phone</p>
                        <p>080989999</p>
                        <p className="text-danger mb-0">Gender</p>
                        <p>Male</p>
                        <p className="text-danger mb-0">Addres</p>
                        <p>Jaksel</p>
                    </Container>
                </Col>
                <Col>
                    <Container>
                    <p className="h5 text-danger mb-4">My Transaction</p>
                    <img
                        src={mouse}
                        width="100"
                        height="100"
                        alt="Dump Merch Logo"
            />
                    <p  className="text-danger d-inline ms-2">Mouse</p>
                    </Container>
                </Col>
            </Row>
        </Container>

    </div>
  );
}

export default Profile;
