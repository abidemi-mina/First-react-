import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { Nav, NavItem } from 'react-bootstrap';
import './App.css';
import Cars from './components/Cars';
import Food from './components/Food';
import coconut from './images/coconut rice.jpg'
import jollof from './images/Jollof-Rice.jpg'
import fried from './images/fried rice.jpg'
import Form from './components/Forms';
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';
import Post from './components/Post';
import Navigation from './components/Navigation';
import PostDetails from './components/PostDetails';


// function App() {
//   let data={
//        carsCollections:{
//          luxuryCars:[
//            {id : '1', name:'Camry', description:'Hello World , welcome to your react tutorial, this is the information about a luxury car with an id of 1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veniam asperiores suscipit aliquam provident explicabo totam at minus ex cumque illo cupiditate repellat similique, voluptas, magnam mollitia nihil amet! Nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veniam asperiores suscipit aliquam provident explicabo totam at minus ex cumque illo cupiditate repellat similique, voluptas, magnam mollitia nihil amet! Nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veniam asperiores suscipit aliquam provident explicabo totam at minus ex '},
//            {id : '2', name:'Bentley', description:'Hello World , welcome to your react tutorial and this is the information about a luxury car with an id of 2.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veniam asperiores suscipit aliquam provident explicabo totam at minus ex cumque illo cupiditate repellat similique, voluptas, magnam mollitia nihil amet! Nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veniam asperiores suscipit aliquam provident explicabo totam at minus ex cumque illo cupiditate repellat similique, voluptas, magnam mollitia nihil amet! Nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veniam asperiores suscipit aliquam provident explicabo totam at minus ex '},
//            {id : '3', name:'Rollce Royce', description:'this is the information about a luxury car with an id of 3'},
//          ],
//          superCars:[
//            {id : '1', name:'Mercedez Benz', description:'this is the information about a Super car with an id of 1'},
//            {id : '2', name:'Sport Car', description:'this is the information about a  Super with an id of 2'},
//            {id : '3', name:'Lamborghinin', description:'this is the information about a Super car with an id of 3'},
//          ],
//        },

//        food:[
//          { id :'1', name: 'Fried Rice ', url: fried,description: 'This a continental dish made up of many ingredients like salads of vegaetables, rice itself and seasonings'},
//          { id :'2', name: 'Coconut Rice ', url: coconut, description: 'This a continental dish made up of many ingredients like coconut, some salads, rice itself and seasonings'},
//          { id :'3', name: 'Jollof Rice ', url: jollof, description: 'This a continental dish made up of many ingredients like salads of vegaetables, rice itself and seasonings'},

//        ]

//   }
//    let addLuxuryCars=(incomingState) =>{
//     console.log(incomingState)
//   }
//   return (
//     <div >
//       <h1> Hello World , welcome to your react tutorial</h1>
//       <h2></h2>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veniam asperiores suscipit aliquam provident explicabo totam at minus ex cumque illo cupiditate repellat similique, voluptas, magnam mollitia nihil amet! Nobis.
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veniam asperiores suscipit aliquam provident explicabo totam at minus ex cumque illo cupiditate repellat similique, voluptas, magnam mollitia nihil amet! Nobis.
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veniam asperiores suscipit aliquam provident explicabo totam at minus ex cumque illo cupiditate repellat similique, voluptas, magnam mollitia nihil amet! Nobis.
//       </p>
//       <Cars title="Cars" bgname="purple" carData={data.carsCollections} />
//       <Food title ='Foods' foodList={data.food} />
//       <Form addLuxuryCars={addLuxuryCars}/>
//     </div>
//   );
// }


class App extends Component{
  state={
    post:null,
    isLoading:true,
    err:null,
    show:false,
  }
  componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( (response)=>{
            this.setState({
              post:response.data,
              isLoading:false,
              err:null,
              
            })    
        })
        .catch((error) =>{
          console.log( error); 
          this.setState({
            err:error,
            show:true,
            isLoading:false,
          })
          
            
        })
  }

  render(){
    const {post,isLoading,show,err} =this.state
  
    
    return(
      <div>
        {/* Nav section */}
        <Navigation/>
        {/* End of nav  */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/post" 
           render={(routerProps) => <Post post={this.state.post}/>}
          /> */}
          <Route path="/post" element={<Post posts={post} loading={isLoading} show={show} err={err} />}
          />
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/posts/:id" element={<PostDetails/>}/>
        </Routes>
  
      
       
      </div>
    )
  }

}
export default App;
