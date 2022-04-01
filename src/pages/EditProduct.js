import React from "react";
import { Nav, Navbar, Container, Form, Button } from "react-bootstrap";

import logo from '../Frame.png';


import { Link } from "react-router-dom";

function Product() {

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
          <Nav.Link><Link to="/product" className='text-danger' style={{ textDecoration:'none'}}> Product </Link></Nav.Link>
          <Nav.Link><Link to="/profile" className='text-white' style={{ textDecoration:'none'}}> Profile </Link></Nav.Link>
          <Nav.Link eventKey={2} href="#memes" className='text-white'>
          Logout
          </Nav.Link>
          </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>

        <Container className="py-5" style={{backgroundColor: 'black', padding:'30px 100px', minHeight: '88vh' }} fluid>
          <p className="h4 text-white mb-4">Edit Product</p>

            <Form >
                <Button variant="danger mb-3" type="submit">
                Upload Image
                </Button> <p className="text-white" style={{display:'inline'}}>mouse.jpg</p>

                <Form.Group className="mb-3" controlId="formBasicName" >
                <Form.Control type="text" placeholder="Mouse" style={{backgroundColor:'rgba(210, 210, 210, 0.25)'}} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDesc" >
                <Form.Control  as="textarea" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ipsum ut tortor finibus ornare nec sit amet mauris. Vivamus nisi turpis, malesuada in neque at, hendrerit mattis nisi. Etiam venenatis bibendum dui, quis aliquam tellus pellentesque et. Fusce quis urna at nunc lobortis fringilla. Duis non maximus nisl, non suscipit mauris. " 
                
                style={{backgroundColor:'rgba(210, 210, 210, 0.25)', height: '100px'}} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPrice" >
                <Form.Control type="text" placeholder="500.000" style={{backgroundColor:'rgba(210, 210, 210, 0.25)'}} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicStock" >
                <Form.Control type="text" placeholder="600" style={{backgroundColor:'rgba(210, 210, 210, 0.25)'}} />
                </Form.Group>

                <Button variant="success mt-5" type="submit" style={{width:'1280px'}}>
                Save
                </Button>
            </Form>
   
        </Container>
    

    </div>
  );
}

export default Product;
