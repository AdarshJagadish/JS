// function para() {
//     let element = document.getElementById('pr')
//     let newelement = document.createElement('p')
//     newelement.classList.add('container2')
//     newelement.innerHTML = element.value
//     document.body.appendChild(newelement)
// }

function show(){
    text = document.getElementById('text')
    div = document.getElementById('main')
    paragragh = document.createElement('p')
    paragragh.innerHTML = text.value
    div.appendChild(paragragh)   
}