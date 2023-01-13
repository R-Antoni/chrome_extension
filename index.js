const inputBtn = document.querySelector("#input-btn")
const inputEl = document.querySelector("#input-el")
const listEl = document.querySelector("#ul-el")
let myLeads = []

inputBtn.addEventListener("click", ()=> {
    myLeads.push(inputEl.value)
    renderLeads()
})

function renderLeads(){
    let listItem = ""
    for(let i = 0; i < myLeads.length; i++){
        listItem += "<li>" + (myLeads[i]) + "</li>"
    }
    
    listEl.innerHTML = listItem
}
