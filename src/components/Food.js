import React,{Component} from "react";
import List from "./resuables/list";

class Food extends Component{
    constructor(){
        super()
    }
   
    render(){
        console.log(this.props);
        const {title,foodList} = this.props        
        let list = foodList.map((food) => {
            return(
                    <List {...food} key={food.id}/>
                   
            )
        })
        return(
            <div>
                <h2>{title}</h2>
                <div>{list}</div>
            </div>
        )
    }
}
export default Food;