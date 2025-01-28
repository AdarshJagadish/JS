function add(a,b){
    s=a+b
    return s
}

function sub(a,b){
    s=a-b
    return s
}

function mul(a,b){
    s=a*b
    return s
}

function div(a,b){
    s=a/b
    return s
}

while (true){
    choice=parseInt(prompt("Select Your Choice \n 1.Addition \n 2.Subtraction \n 3.Multiplication \n 4.Divition \n 5.Exit"))
    if (choice==1){
        num1=parseInt(prompt("Enter 1st Number"))
        num2=parseInt(prompt("Enter 2nd Number"))
        result=add(num1,num2)
        alert(`THe Result is ${result} `)
    }
    else if (choice==2){
        num1=parseInt(prompt("Enter 1st Number"))
        num2=parseInt(prompt("Enter 2nd Number"))
        result=sub(num1,num2)
        alert(`THe Result is ${result} `)
    }
    else if (choice==3){
        num1=parseInt(prompt("Enter 1st Number"))
        num2=parseInt(prompt("Enter 2nd Number"))
        result=mul(num1,num2)
        alert(`THe Result is ${result} `)
    }
    else if (choice==4){
        num1=parseInt(prompt("Enter 1st Number"))
        num2=parseInt(prompt("Enter 2nd Number"))
        result=div(num1,num2)
        alert(`The Result is ${result} `)
    }
    else if (choice==5){
        break
    }
    else{
        alert("Invalid Input")
    }

}