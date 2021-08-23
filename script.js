const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".display");

console.log(buttons);




for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", e =>{
        revertColor();
        e.target.style.backgroundColor = "#e2e1b0";
        switch (e.target.textContent) {
            case "+":
                currentCalculation.operator = "+";
                currentCalculation.firstNum != null ? currentCalculation.secondNum = screen.textContent : currentCalculation.firstNum = screen.textContent;
                console.log(currentCalculation.secondNum);
                screen.textContent = 0;
                break;
            case "-":
                currentCalculation.operator = "-";
                currentCalculation.firstNum != null ? currentCalculation.secondNum = screen.textContent : currentCalculation.firstNum = screen.textContent;
                console.log(currentCalculation.secondNum);
                screen.textContent = 0;
                break;
            case "/":
                currentCalculation.operator = "/";
                currentCalculation.firstNum != null ? currentCalculation.secondNum = screen.textContent : currentCalculation.firstNum = screen.textContent;
                console.log(currentCalculation.secondNum);
                screen.textContent = 0;
                break;
            case "*":
                currentCalculation.operator = "*";
                currentCalculation.firstNum != null ? currentCalculation.secondNum = screen.textContent : currentCalculation.firstNum = screen.textContent;
                console.log(currentCalculation.secondNum);
                screen.textContent = 0;
                break;
            case "=":

                if(currentCalculation.secondNum == null) currentCalculation.secondNum = screen.textContent; 
                screen.textContent = 0;
                display((operate(currentCalculation.operator, +currentCalculation.firstNum, +currentCalculation.secondNum)));
                currentCalculation.firstNum = null;
                currentCalculation.secondNum = null;
                currentCalculation.operator = null;
                currentCalculation.resetNext = true;
                break;
            default:
                console.log("Jalla jalla");
                display(e.target.textContent);


            }
        });
}



function revertColor(){
    const length = buttons.length;
    for(let i = 0; i < length; i++) buttons[i].style.backgroundColor = "#c6c463";
}

let currentCalculation = {
    firstNum: null,
    secondNum: null,
    currentOperator: null,
    resetNext: false
}

function display(str){
    if(currentCalculation.resetNext) screen.textContent = "0"; currentCalculation.resetNext = false;
    if(str == "AC"){
        screen.textContent = "0";
        return;
    }
    if(str == "."){
        screen.textContent += str;
        return;
    }
    console.log(currentCalculation.firstNum);
    console.log(typeof currentCalculation.firstNum);
    console.log(currentCalculation.secondNum);
    console.log(typeof currentCalculation.secondNum);

    (screen.textContent.trim().charAt(0) == 0) && (screen.textContent.trim().charAt(1) != ".") ? screen.textContent = str : screen.textContent += str;
}
display("0");

function subtraction(firstNum, secondNum) {
    return firstNum - secondNum;
}
function multiplication(firstNum, secondNum) {
    return firstNum * secondNum;
}
function addition(firstNum, secondNum) {
    return firstNum + secondNum;
}
function division(firstNum, secondNum) {
    return +(firstNum/secondNum).toFixed(2);
}
function operate(operator, firstNum, secondNum){ 
    switch (operator){
        case "+":
            return addition(firstNum, secondNum);
        case "-":
            return subtraction(firstNum, secondNum);
        case "/":
            return division(firstNum, secondNum);
        case "*":
            return multiplication(firstNum, secondNum);
    }
}

