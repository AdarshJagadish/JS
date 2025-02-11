count = 1
let int = setInterval(()=>{
    console.log(count)
    count++
},3000)

let element = document.getElementById("btn")
element.addEventListener('click',()=>{
    clearInterval(int)
})