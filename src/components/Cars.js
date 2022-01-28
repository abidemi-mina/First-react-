import react from "react";
import List from "./resuables/list";
// import App from "../App";

const Cars = (props) => {
    const {title,carData}=props;

    const luxurycar=carData.luxuryCars.map((cars) =>{
        console.log(cars);
        return (
            <List {...cars} key={cars.id}/>
        )
    })
    const supercar =carData.superCars.map((Super) =>{
        return(
            <List {...Super} key={Super.id}/>
        )
    })
    return(
        <div className="cars" style={ {backgroundColor: 'blue'} }>
            <h1>{title}</h1>
           <div>
               <h2>Luxury Cars</h2>
                <div>{luxurycar}</div>
           </div>
           
           <div>
               <h2>Super Cars</h2>
               <div>{supercar}</div>

           </div>
           
        </div>
    )
};


//css
let carsStyles ={
    display : 'flex',
    justifyContent : 'center',
    color : 'grey'

}
export default Cars;