import store from "../redux/store.js"
import { getInput } from "../redux/actions.js"

const Textarea = (props) => {
    let textareaNode = document.createElement("span")
    textareaNode.classList.add("d-flex", "flex-column")
    let label = document.createElement("label")
    label.setAttribute("htmlFor", props.id)
    label.innerText = props.text
    textareaNode.append(label)
    const textarea = document.createElement("textarea")
    textarea.setAttribute("name", props.name)
    textarea.setAttribute("type", props.type)
    textarea.setAttribute("id", props.id)
    textarea.value = store.getState().posts[props.name]
    textarea.addEventListener("input", () => {
        //textarea.value = store.getState().posts[props.name]
        store.dispatch(getInput(textarea))
    })
    textareaNode.append(textarea)
    return textareaNode
}

export default Textarea