import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from './Post.module.css'


function Post(props) {
   console.log(props)

    return(
        <Container className="text-center">
            <h2> This is a POST Page</h2>
            <br />
            {props.loading ? <div className="text-center"> <Spinner animation="grow" /></div> :( 
            <Row className={classes.Row}>
                {props.posts.slice(0,20).map((post) =>{
                    console.log(post.title);
                    return(
                            <Col className={classes.Col} key={post.id} md={4}>
                                <h2 className={classes.h2}>
                                    <Link to={`/posts/${post.id}`} >{post.title.slice(0,10) }...</Link>
                                </h2>                               
                                <p>{post.body.slice(0,100)}...</p>
                            </Col>    
                        )})}
            </Row>
            )}
        </Container>
    )
    
}
export default Post;