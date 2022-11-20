import store from "../redux/store.js"
import Card from "./Card.js"
import Form from "./Form.js"

import {} from "../redux/actions.js"

const EditFormDiv = () => {
    const editFormDiv = document.createElement("div")
    editFormDiv.classList.add("bg-light", "text-dark", "p-2", "w-100")
    editFormDiv.append(Form({
        subBtnText: "CHANGE",
        //action: addPost,
        children: [
            Input({ text: "TITLE:", id: "editTitleInput", name: "editTitle", type: "text" }),
            Textarea({ text: "POST:", id: "editBodyInput", name: "editBody", type: "text" })
        ]
    }))
    return editFormDiv
}


const List = () => {
    const listPostDiv = document.getElementById("listPostDiv")
    listPostDiv.innerHTML = ""
    if (store.getState().posts.posts.length < 1) {
        let messageDiv = document.createElement("div")
        messageDiv.classList.add("p-2", "bg-light", "text-dark", "text-center")
        let message = document.createElement("h3")
        message.innerText = "There are no posts!"
        messageDiv.append(message)
        listPostDiv.append(messageDiv)
    } else {
        store.getState().posts.posts.forEach(post => {
            if (store.getState().posts.isEdit && post.id === store.getState().posts.editId) {
                listPostDiv.append(EditFormDiv())
            } else {
                listPostDiv.append(Card(post, listPostDiv))
            }
        })
    }
}

export default List