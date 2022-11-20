import { GET_INPUT, ADD_POST, DELETE_POST, GET_EDIT_FORM, EDIT_POST, SET_POSTS } from "../types.js"

let initialState = {
    title: "",
    body: "",
    posts: [],
    isEdit: false,
    editTitle: "",
    editBody: "",
    editId: ""
}

const postReducer = (state=initialState, action) =>{
    switch(action.type){
        case GET_INPUT:
           let { name, value } = action.payload
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
        case DELETE_POST:
            let allTheOthers = state.posts.filter(post => post.id !== action.payload)
            return {
                ...state,
                posts: allTheOthers
            }
        case GET_EDIT_FORM:
            let { id, title, body } = action.payload
            return {
                ...state,
                isEdit: true,
                editId: id,
                editTitle: title,
                editBody: body
            }
        case EDIT_POST: 
        let { editTitle, editBody } = action.payload
            let youveChanged = state.posts.map(post => {
                if(post.id === state.editId){
                    post.title = editTitle
                    post.body = editBody
                }
                return post
            })
            return {
                ...state,
                posts: youveChanged,
                isEdit: false,
                editId: "",
                editTitle: "",
                editBody: ""
            }
        case SET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state
    }
}

export default postReducer