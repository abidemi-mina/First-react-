import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Spinner ,Alert} from "react-bootstrap";
import axios from 'axios';

 function PostDetails(props) {
   const[post, setPost] =useState(null)
   const [err, setErr]=useState(null)
   const[isLoading, setIsLoading]= useState(true)
   const[show, setShow]= useState(false)
    const id =useParams().id
    useEffect( () =>{
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res)=>{
        setPost(res.data)
        setIsLoading(false)
        setShow(false)
      }).catch((err) => {
        console.log("err", err.res)
        setTimeout( () =>{
          setErr(true);
          setShow(true);
          setIsLoading(false);
        },5000)
        setErr(err.res)
      });
    },[id])


  
  return(
      <div>
          <Container className="text-center">
                <h2> Post Detail</h2>
                {err && show?
                 <Alert variant="danger" onClick={() => setShow(false)} dismissible>
                      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                      <p>
                        Change this and that and try again. Duis mollis, est non commodo
                        luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                        Cras mattis consectetur purus sit amet fermentum.
                      </p>
                  </Alert> : ''}
                {isLoading?  <div className="text-center"> <Spinner animation="grow" /></div>:( 
               <>
               <Alert  variant="success" onClose={show} dismissible>
               <Alert.Heading>Oh snap! You got a dara!!!!!</Alert.Heading>
               </Alert>
                  <div className='text-center'>
                    <h2>{post?.title}{post?.id}</h2>
                  </div>
               </> 
                )}
               
                
                <br />
            </Container>
      </div>

  )
}
export default PostDetails;