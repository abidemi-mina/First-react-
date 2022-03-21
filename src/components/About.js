import React from "react";
import { Form } from "react-bootstrap";
import{Button,Row,Container,Col} from 'react-bootstrap'
import {Link} from "react-router-dom";

function About() {
    return(
        <Container >
        <Row>
            <Col md={6}>
            <h1 className="display-3 text-center">About Page</h1>
            
            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tempora ex nesciunt laboriosam ad, nulla a,
                 dolore nostrum id nisi quod? Ullam commodi blanditiis aspernatur inventore quas suscipit odio mollitia quo quasi! 
                 Facilis inventore quas soluta quis ut nisi iste earum, enim possimus veniam officia, assumenda quisquam suscipit,
                  non distinctio?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quibusdam corrupti, consequatur nesciunt veniam illo facilis at ab est amet iste tempora recusandae hic, aliquam quasi doloribus aspernatur esse blanditiis?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quibusdam corrupti, consequatur nesciunt veniam illo facilis at ab est amet iste tempora recusandae hic, aliquam quasi doloribus aspernatur esse blanditiis?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quibusdam corrupti, consequatur nesciunt veniam illo facilis at ab est amet iste tempora recusandae hic, aliquam quasi doloribus aspernatur esse blanditiis?
            </p>
             <Button as={Link} to="/post" > Read More</Button>
            </Col>           
        </Row>
    </Container>
    )
}
export default About;