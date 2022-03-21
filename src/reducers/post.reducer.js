import { FETCH_POSTS,FETCH_POSTS_ERR } from "../actions/action-type";



const initialState={
    post:null,
    isLoading:true,
    err: null,
    show:false,
}
export default function (state=initialState,action){
    switch (action.type) {
        case FETCH_POSTS:
            return{
                ...state,
                 post:action.payload,
                 isLoading:false,
            };
        case FETCH_POSTS_ERR:
            return{
                ...state,
                 err:action.payload,
                 isLoading:false,
                 show:true
            };
        default:
            return state;
            
    }
}