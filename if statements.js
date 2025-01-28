// ------------------------------ If Statement ------------------------ //
// day = parseInt(prompt('Enter a number between 1 to 7'))
// if(day==1){
//     document.write('Sunday')
// }
// else if(day==2){
//     document.write('Monday')
// }
// else if(day==3){
//     document.write('Tuesday')
// }
// else if(day==4){
//     document.write('Wednesday')
// }
// else if(day==5){
//     document.write('Thursday')
// }
// else if(day==6){
//     document.write('Friday')
// }
// else if(day==7){
//     document.write('Saturday')
// }
// else{
//     document.write('Invalid Day')
// }
// ------------------------------ Else if Statement ------------------------ //




// --------------------------------- If Statement -------------------------- //
// age = parseInt(prompt('Enter your Age Here'))
// if (age>=18){
//     alert('YOU ARE WELCOME TO THE PAGE')
// }
// else{
//     alert("YOU CAN'T ACCESS THE PAGE")
// }
// --------------------------------- If Statement -------------------------- //




// --------------------------------- Greater Amoung 3 Num using logical AND-------------------------- //
num1 = parseInt(prompt('Enter 1st Number'))
num2 = parseInt(prompt('Enter 2nd Number'))
num3 = parseInt(prompt('Enter 3nd Number'))
// if (num1>num2 && num1>num3){
//     alert(`${num1} is Greater`)
// }
// else if (num2>num1 && num2>num3){
//     alert(`${num2} is Greater`)
// }
// else if (num3>num1 && num3>num1){
//     alert(`${num3} is Greater`)
// }
// else{
//     alert('Something Went Wrong')
// }
// --------------------------------- Greater Amoung 3 Num using logical AND -------------------------- //




// --------------------------------- Greater Amoung 3 Num Using Nested If -------------------------- //
if (num1>num2){
    if (num1>num3){
        alert(`${num1} is Greater`)
    }
    else{
        alert(`${num3} is Greater`)
    }
}
else{
    if (num2>num3){
        alert(`${num2} is Greater`)
    }
    else{
        alert(`${num3} is Greater`)
    }
}
// --------------------------------- Greater Amoung 3 Num Using Nested If -------------------------- //