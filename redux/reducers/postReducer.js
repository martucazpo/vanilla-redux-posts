import { GET_INPUT, ADD_POST } from "../types.js"

let initialState = {
    title: "",
    body: "",
    posts: []
}

const postReducer = (state=initialState, action) =>{
    switch(action.type){
        case GET_INPUT:
            let name = action.payload.name
            let value = action.payload.value
            return { 
                ...state,
                [name]: value
            }
        case ADD_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts],
                body: "",
                title: ""
            }
        default:
            return state
    }
}

export default postReducer