import { GET_INPUT, ADD_POST, DELETE_POST, GET_EDIT_FORM, EDIT_POST, SET_POSTS } from "./types.js"
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

export const deletePost = (post) =>{
    return {
        type: DELETE_POST,
        payload: post.id
    }
}

export const getEditForm = (post) =>{
    return {
        type: GET_EDIT_FORM,
        payload: post
    }
}

export const editPost = (post) =>{
    return {
        type: EDIT_POST,
        payload: post
    }
}

export const setPosts = (posts) =>{
    return {
        type: SET_POSTS,
        payload: posts
    }
}