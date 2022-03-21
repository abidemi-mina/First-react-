import React from "react";
import { Card, Col, Container, Row, Spinner,CardGroup,Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { getPosts } from "../actions/post.action";
import classes from './Post.module.css'


function Post(props) {
   const state  = useSelector((state) => state.posts)
   const dispatch = useDispatch()
   const data = bindActionCreators(getPosts,dispatch)
   const{err,isLoading,post,show} = state
   console.log(err);
   

   

    return(
        <Container className="text-center">
            <h2> This is a POST Page</h2>
            <br />
            {err && show? <div className="text-center"><h2>Sorry please try again again later</h2></div>: ''}

            {isLoading ? <div className="text-center"> <Spinner animation="grow" /></div> :(    
                <Row  xs={1} md={4} className="g-4" >
                    {post?.slice(0,20).map((post) =>{
                        return(
                            <>
                                <Col className={classes.Col} key={post.id}>
                                    <Card border="success">
                                        <Card.Body>
                                        <Card.Title as='h3'>                                  
                                                <Link to={`/posts/${post.id}`} >{post.title.slice(0,10)}...</Link>                                      
                                        </Card.Title>
                                        <Card.Text>
                                            {post.body.slice(0,100)}...
                                        </Card.Text>
                                        </Card.Body>

                                    </Card>                                       
                                </Col>
                        
                            </>
                        )})}
                </Row>
            )}
        </Container>
    )
    
}
export default Post;

