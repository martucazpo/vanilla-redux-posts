import Form from "../components/Form.js"
import Input from "../components/Input.js"
import Textarea from "../components/Textarea.js"

import { addPost } from "../redux/actions.js"
import store from "../redux/store.js"

const addPostDiv = document.getElementById("addPostDiv")

export const render = () => {
    addPostDiv.innerHTML = ""
    addPostDiv.append(Form(
        {
            subBtnText: "ADD",
            action: addPost,
            children: [
                Input({ text: "TITLE:", id: "titleInput", name: "title", type: "text" }),
                Textarea({ text: "POST:", id: "bodyInput", name: "body", type: "text" })
            ]
        }
    ))
}

render()
