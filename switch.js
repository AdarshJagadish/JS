mark = parseInt(prompt('Enter your mark'))
switch(true){
    case (mark>=90 && mark<=100):
        document.write("Your Grade is A+")
        break;
    case (mark>=80 && mark<=90):
        document.write("Your Grade is A")
        break;
    case (mark>=70 && mark<=80):
        document.write("Your Grade is B+")
        break;
    case (mark>=60 && mark<=70):
        document.write("Your Grade is B")
        break;
    case (mark>=50 && mark<=60):
        document.write("Your Grade is C+")
        break;
    case (mark>=40 && mark<=50):
        document.write("Your Grade is C")
        break;
    case (mark>=30 && mark<=40):
        document.write("Your Grade is D+")
        break;
    case (mark<=30):
        document.write("You are Failed")
        break;
    default:
        document.write("Invalid Mark")
            
}