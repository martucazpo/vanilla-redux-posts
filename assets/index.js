import store from "../redux/store.js"
import { getPosts } from "./functions/getPosts.js"
import { render } from "./functions/render.js"
import { setPosts } from "../redux/actions.js"


let posts = await getPosts()
let onlyTen = posts.slice(50,60)
store.dispatch(setPosts(onlyTen))

window.addEventListener("DOMContentLoaded", render())
