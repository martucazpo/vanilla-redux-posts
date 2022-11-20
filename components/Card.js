
//import { render } from "../assets/script.js"

const Card = (props) =>{
    const card = document.createElement("div")
    card.classList.add("border", "border-secondary", "bg-light", "text-dark", "w-100")
    const cardHeader = document.createElement("div")
    cardHeader.innerHTML = `<h3>${ props.title }</h3>`
    cardHeader.classList.add("text-center", "pt-1", "pb-1", "bg-secondary")
    card.append(cardHeader)
    const cardBody = document.createElement("div")
    cardBody.classList.add("p-2")
    const cardBodyText = document.createElement("div")
    cardBodyText.classList.add("p-2")
    let cardBodyP = document.createElement("h5")
    cardBodyP.innerText = props.body 
    cardBodyText.append(cardBodyP)
    cardBody.append(cardBodyText)
    const cardBodyBtnDiv = document.createElement("div")
    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("btn", "btn-danger")
    deleteBtn.innerText = "DELETE"
    //deleteBtn.addEventListener("click", ()=>{ })
    cardBodyBtnDiv.append(deleteBtn)
    const editBtn = document.createElement("button")
    editBtn.classList.add("btn", "btn-info")
    editBtn.innerText = "EDIT"
    //editBtn.addEventListener("click", ()=>{ })
    cardBodyBtnDiv.append(editBtn)
    cardBody.append(cardBodyBtnDiv)
    card.append(cardBody)
    return card
}

export default Card