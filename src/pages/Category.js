import React from "react";
import { Nav, Navbar, Container, Row, Table, Button, Modal } from "react-bootstrap";
import { useState } from 'react';

import CategoryData from '../data/category';
import logo from '../Frame.png';


import { Link } from "react-router-dom";

function Category() {

  const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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
          <p className="h4 text-white mb-4">List Category</p>
      <Row>
            <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th style={{textAlign:'center'}} >Category Name</th>
                      <th style={{textAlign:'center'}} >Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {CategoryData.map((category, index) => (
                    <tr  key={index}>
                      <td>{index+1}</td>
                      <td style={{textAlign:'center'}}>{category.name}</td>
                      <td style={{textAlign:'center'}}>
                        <Link to="/editcategory"><Button variant="success me-3 px-5 py-1">Edit</Button></Link>
                        <Button variant="danger px-5 py-1" onClick={handleShow}>Delete</Button>
                      </td>
                    </tr>
                    ))}
                  </tbody>
            </Table>
      </Row>
    </Container>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure want to delete this data?</Modal.Body>
        <Modal.Footer>
          <Button variant="success px-5 py-1" onClick={handleClose}>
            Yes
          </Button>
          <Button variant="danger px-5 py-1" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default Category;
