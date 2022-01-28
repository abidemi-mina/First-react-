import React from "react";

function List(props){
    return(
        <div>
            <h1>{props.name}</h1>
            {props.description}
            <img src={props.url} alt={`...${props.name}`}  width='250px'/>
        </div>

    )
}
export default List;