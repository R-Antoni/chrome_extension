const inputBtn = document.querySelector("#input-btn")
const inputEl = document.querySelector("#input-el")
const listEl = document.querySelector("#ul-el")
const deleteBtn = document.querySelector("#delete-btn")
let myLeads = []
let localLeads = JSON.parse(localStorage.getItem("myLeads"))

if (localLeads){
    myLeads = localLeads;
    renderLeads()
}

inputBtn.addEventListener("click", ()=> {
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
    inputEl.value = ""
})

function renderLeads(){
    let listItem = ""
    for(let i = 0; i < myLeads.length; i++){
        listItem += `<li><a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a></li>`
    }
    listEl.innerHTML = listItem
}

deleteBtn.addEventListener("dblclick", ()=>{
    localStorage.clear();
    myLeads = [];
    renderLeads()
})