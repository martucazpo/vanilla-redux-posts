import postReducer from "./postReducer.js";


const rootReducer = Redux.combineReducers({posts: postReducer})


export default rootReducer