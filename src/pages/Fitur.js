import React from "react";
import { Nav, Navbar, Container, Row, Col, Card } from "react-bootstrap";


import ProductData from '../data/product';
import logo from '../Frame.png';


import { Link } from "react-router-dom";

function Fitur() {

  console.log(ProductData);
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
          <Nav.Link><Link to="/category" className='text-white' style={{ textDecoration:'none'}}> Category </Link></Nav.Link>
          <Nav.Link><Link to="/profile" className='text-danger' style={{ textDecoration:'none'}}> Profile </Link></Nav.Link>
          <Nav.Link eventKey={2} href="#memes" className='text-white'>
          Logout
          </Nav.Link>
          </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>

        <Container className="py-5" style={{backgroundColor: 'black'}} fluid>
      <Row>
          <Col style={{ display: 'flex', justifyContent:'center', textAlign: 'center', color:'white'}} >
                    <Card style={{ width: '90rem'}} className='bg-dark'>
                        <Card.Body>
                            <Card.Title>Filter Barang</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Nama, Harga, Kategory</Card.Subtitle>
                            <Card.Text>
                            Data
                            </Card.Text>
                            <Card.Link href="#"></Card.Link>
                            <Card.Link href="#"></Card.Link>
                        </Card.Body>
                    </Card>
            </Col>  
        </Row> 

         <Row className="mt-5">
                    {ProductData.map((product, index) => (
                    <Col sm={3} key={index}>
                        <Link to='/detail' style={{textDecoration:'none'}}>
                        <Card style={{width:'auto'}}>
                        <Card.Img variant="top" src={product.image} />
                        <Card.Body className="bg-dark">
                            <Card.Title className="text-danger">{product.name}</Card.Title>
                            <Card.Text className="text-white">Rp.{product.price}</Card.Text>
                            <Card.Text className="text-white"> Stock: {product.stock}</Card.Text>
                            </Card.Body>
                        </Card>
                        </Link>
                    </Col>
                    ))}
         </Row>
    </Container>

    </div>
  );
}

export default Fitur;
