import React from "react";
import { Nav, Navbar, Container, Row, Form, Button } from "react-bootstrap";

import logo from '../Frame.png';


import { Link } from "react-router-dom";

function Category() {

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
          <Nav.Link><Link to="/category" className='text-danger' style={{ textDecoration:'none'}}> Category </Link></Nav.Link>
          <Nav.Link><Link to="/product" className='text-white' style={{ textDecoration:'none'}}> Product </Link></Nav.Link>
          <Nav.Link><Link to="/profile" className='text-white' style={{ textDecoration:'none'}}> Profile </Link></Nav.Link>
          <Nav.Link eventKey={2} href="#memes" className='text-white'>
          Logout
          </Nav.Link>
          </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>

        <Container className="py-5" style={{backgroundColor: 'black', padding:'30px 100px', minHeight: '88vh' }} fluid>
          <p className="h4 text-white mb-4">Edit Category</p>

            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail" >
               
                <Form.Control type="text" placeholder="Mouse" style={{backgroundColor:'rgba(210, 210, 210, 0.25)'}} />
               
                </Form.Group>
                <Button variant="success mt-5" type="submit" style={{width:'1280px'}}>
                Save
                </Button>
            </Form>
   
        </Container>
    

    </div>
  );
}

export default Category;
