import store from "../redux/store.js"
import { render } from "../assets/script.js"

const handleSubmit = (props) => {
    let args = {}
    props.children.forEach((child) => args[child.lastChild.name] = store.getState().posts[child.lastChild.name])
    store.dispatch(props.action(args))
    console.log(store.getState())
    render()
}


const Form = (props) => {
    const form = document.createElement("form")
    form.classList.add("d-flex", "flex-column", "w-100")
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        handleSubmit(props)
    })
    form.append(...props.children)
    const subBtn = document.createElement("button")
    subBtn.innerText = props.subBtnText
    subBtn.classList.add("mt-2", "mb-1", "btn", "btn-secondary")
    form.append(subBtn)
    return form
}

export default Form