
let button = document.getElementById('btn')
button.addEventListener('click',function(){
    setTimeout(function(){
        if (button.style.backgroundColor == "red"){
            button.style.backgroundColor= "white"
        }
        else{
            button.style.backgroundColor= "red"
        }
    },3000)
})