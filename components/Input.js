import store from "../redux/store.js"
import { getInput } from "../redux/actions.js"


const Input = (props) =>{
    let inputNode = document.createElement("span")
    inputNode.classList.add("d-flex", "flex-column")
    let label = document.createElement("label")
    label.setAttribute("htmlFor", props.id)
    label.innerText = props.text
    inputNode.append(label)
   const input =  document.createElement("input")
   input.setAttribute("name", props.name)
   input.setAttribute("type", props.type)
   input.setAttribute("id", props.id)
   input.value = store.getState().posts[props.name]
   input.addEventListener("input", ()=>{
    //input.value = store.getState().posts[props.name] 
    store.dispatch(getInput(input))
   })
   inputNode.append(input)
   return inputNode
} 

export default Input