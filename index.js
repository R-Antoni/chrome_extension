const inputBtn = document.querySelector("#input-btn")
const inputEl = document.querySelector("#input-el")
const listEl = document.querySelector("#ul-el")
let myLeads = []

inputBtn.addEventListener("click", ()=> {
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value = ""
})

function renderLeads(){
    let listItem = ""
    for(let i = 0; i < myLeads.length; i++){
        //listItem += "<li><a target ='_blank' href='"+ myLeads[i] + "'>" + myLeads[i] + "</li>"
        listItem += 
        `<li>
        <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a>
        </li>`
    }
    listEl.innerHTML = listItem
}
