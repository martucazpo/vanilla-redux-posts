import { GET_INPUT, ADD_POST } from "./types.js"
import { uuidv4 } from "../assets/libraries/uuidv4.js"

export const getInput = (input) =>{
    return {
        type: GET_INPUT,
        payload: input
    }
}

export const addPost = (post) =>{
    post.id = uuidv4()
    return {
        type: ADD_POST,
        payload: post
    }
}