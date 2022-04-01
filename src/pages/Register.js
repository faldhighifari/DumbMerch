import { Container, Form, Button, Row, Col } from "react-bootstrap";
import logo from '../Frame.png';
import { useNavigate, Link } from "react-router-dom";




function Register() {

    const navigate = useNavigate();

    const handleNavigateToLogin = () => {
        navigate('/login');
    };

  return (
    //   <div style={{ minHeight: '100vh' , backgroundColor: 'blue' }}>
    <Container className="text-white" fluid style={{ minHeight: '100vh' ,backgroundColor: 'black'}}>
        <Row>
            <Col>
                 
            <Container style={{ marginTop: '100px', marginLeft:'100px'}}>
                <img src={logo} className="App-logo" alt="logo" />
                
                <p className="text-left" style={{ marginTop: '20px', marginBottom: '20px', fontSize:"60px"}}>Easy, Fast and Reliable</p>

                <p style={{ marginBottom: '0px', color: '#6A6A6A'}}>Go shopping for merchandise, just go to dumb merch</p>
                <p style={{ color: '#6A6A6A'}}>shopping. the biggest merchandise in <b>Indonesia</b></p>

                <div style={{ marginTop: '50px'}}>
                    <Button onClick={handleNavigateToLogin} style={{ padding: '5px 35px'}} variant="danger" type="submit">
                                Login
                    </Button>

                    <Link to="/register" style={{ color: '#6A6A6A', 
                                                fontWeight: '700', 
                                                marginLeft:'30px', 
                                                textDecoration:'none'}}> Register </Link>
                </div>
            
            </Container>
            </Col>

            <Col clasName='mt-50 bg-white'>

            <Container  style={{ 
                backgroundColor: '#181818', 
                width:'350px', 
                borderRadius:'10px' , 
                marginTop: '150px', 
                paddingTop:'20px',
                paddingBottom:'20px',}}>

                <p className="h3 text-left">Register</p>
                    <Form className="mt-4">

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control style={{backgroundColor:'rgba(210, 210, 210, 0.25)'}} type="text" placeholder="Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control style={{backgroundColor:'rgba(210, 210, 210, 0.25)'}} type="email" placeholder="Email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control style={{backgroundColor:'rgba(210, 210, 210, 0.25)'}} type="password" placeholder="Password" />
                        </Form.Group>
                    
                        <Button style={{ marginTop: '30px' ,width:'300px' }} variant="danger" type="submit">
                            Register
                        </Button>
                    </Form>
                    </Container>
            </Col>
        </Row>
      
    </Container>
    // </div>
  );
}

export default Register;

