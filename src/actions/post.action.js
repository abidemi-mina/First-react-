import axios from "axios";
import { FETCH_POSTS,FETCH_POSTS_ERR } from "./action-type";

export function getPosts(){
    return function (dispatch) {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( ({data}) =>{
            return dispatch({
                type: FETCH_POSTS,
                payload:data
            })
        } )
        .catch( () =>{
            return dispatch({
                type: FETCH_POSTS_ERR,
                payload: null
            })
        })
    }
}