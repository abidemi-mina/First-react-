import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Spinner ,Alert, Card} from "react-bootstrap";
import axios from 'axios';

 function PostDetails(props) {
   const[post, setPost] =useState(null)
   const [err, setErr]=useState(null)
   const[isLoading, setIsLoading]= useState(true)
   const[show, setShow]= useState(false)
   const[miss, setMiss]= useState(true)
    const id =useParams().id
    useEffect( () =>{
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res)=>{
        setPost(res.data)
        setIsLoading(false)
      }).catch((err) => {
        console.log("err", err.res)
        setTimeout( () =>{
          setErr(true);
          setShow(true);
          setIsLoading(false);
        },5000)
        setErr(err)
      });
    },[id])


  
  return(
      <div>
          
          <h2> Post Detail</h2>
               
                {err && show?
                 <Alert show={miss} variant="danger" onClose={() => setMiss(false)} dismissible>
                      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                      <p>
                        Change this and that and try again. Duis mollis, est non commodo
                        luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                        Cras mattis consectetur purus sit amet fermentum.
                      </p>
                  </Alert>
                   :''}
                {isLoading?  <div className="text-center"> <Spinner animation="grow" /></div>:
                
                  <Card  border='dark' className="mb-2 text-center  text-dark" style={{ width: '58rem' }}>
                    <Card.Body >
                    <Card.Title as='h3'>{post?.title}</Card.Title>
                    <Card.Text as='i'>
                      {post?.body}
                      {post?.body}
                      {post?.body}
                    </Card.Text>
                    </Card.Body>
                  </Card>
                }
               
                
                <br />
           
      </div>

  )
}
export default PostDetails;