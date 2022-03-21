import React from "react";
import { Button, Card, Col, Container, Form ,Row} from "react-bootstrap";

function Login() {
    return(
        <div>
            <h2 className="display-4 text-center">Login Page</h2>
            <Container className="text-center">
                <Form >
                    <Form.Group as={Row} className="mb-6 justify-content-center text-center" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Col md="6">
                            <Form.Control type="email" placeholder="Enter email"  />
                        </Col>
                        <Form.Text className="text-muted"> We'll never share your email with anyone else. </Form.Text>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3 justify-content-center text-center"  controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Col md="6">
                            <Form.Control type="password" border='dark' placeholder="Password" />
                        </Col >    
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3 justify-content-center text-center ">
                    <Col md="2">
                            <Form.Control type="submit" value='Submit'  className="bg-secondary"/>
                        </Col >  
                    </Form.Group>

                </Form>
            </Container>
            
        </div>
    )
}
export default Login;