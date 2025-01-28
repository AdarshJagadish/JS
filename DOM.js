// let paras = document.getElementsByTagName('p')
// console.log(paras)

// for(i of paras){
//     console.log(i.textContent)
// }


// let paragraphs = document.getElementsByClassName('pr')
// for (i of paragraphs){
//     console.log(i.textContent)
// }

// let paragraphs = document.getElementById('blaa')
// console.log(paragraphs.textContent)

// function button(){
//     let btn = document.getElementById('blaa')
//     console.log(btn.textContent)
// }



//--------------- CSS Selector--------------//

// let element = document.querySelector('#pr')
// let element2 = document.querySelector('.pr')
// let element3 = document.querySelector('p')
// console.log(element,element2,element3)

// let elements = document.querySelectorAll('.pr')
// for (i of elements){
//     console.log(i.textContent)
// }

// let element = document.getElementById('blaa')
// console.log(element.innerHTML)
// element.innerHTML='Hey Mate'

let newElement = document.createElement('div')
newElement.classList.add('container')
newElement.innerHTML='<p>Helo</p>'
document.body.appendChild(newElement)