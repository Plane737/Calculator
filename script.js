const buttons = document.querySelectorAll(".button");
const screen = document.querySelector(".display");
const operatorButtons = document.querySelectorAll(".operator-button");


document.querySelector(".delete-button").addEventListener("click", () => {
    screen.textContent = screen.textContent.slice(0, screen.textContent.length - 1);
    console.log(screen.textContent);
    if(!screen.textContent) screen.textContent = "0";
})

document.querySelector(".pluss-minus-button").addEventListener("click", () => {
    console.log(typeof screen.textContent)
    if (!currentCalculation.currentNumNegative) {
        screen.textContent =  "-" + screen.textContent; 
        currentCalculation.currentNumNegative = true;
    }
        else {
            screen.textContent = screen.textContent.slice(1);
            currentCalculation.currentNumNegative = false   ;
    }
})

for(let i = 0; i < operatorButtons.length; i++){
    operatorButtons[i].addEventListener("click", e => {
        console.log("Jalla jalla");
        revertColor();
        e.target.style.backgroundColor = "#e2e1b0";
        currentCalculation.operator = e.target.textContent;
        currentCalculation.firstNum != null ? currentCalculation.secondNum = screen.textContent : currentCalculation.firstNum = screen.textContent;
        console.log(currentCalculation.secondNum);
        screen.textContent = 0;
    })
}

document.querySelector(".equal-button").addEventListener("click", () => {
    if(currentCalculation.secondNum == null) currentCalculation.secondNum = +screen.textContent; 
    console.log(screen.textContent);
    screen.textContent = 0;
    console.log(screen.textContent);
    display((operate(currentCalculation.operator, +currentCalculation.firstNum, +currentCalculation.secondNum)));
    currentCalculation.firstNum = null;
    currentCalculation.secondNum = null;
    currentCalculation.operator = null;
    currentCalculation.resetNext = true;
    revertColor();
})


console.log(buttons);


for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", e =>{
        console.log("Jalla jalla");
        display(e.target.textContent);
        });
}



function revertColor(){
    const length = operatorButtons.length;
    for(let i = 0; i < length; i++) operatorButtons[i].style.backgroundColor = "#c6c463";
}

let currentCalculation = {
    firstNum: null,
    secondNum: null,
    currentOperator: null,
    currentNumNegative: false,
    resetNext: false
}

function display(str){
    if (screen.textContent.length == 7) return;

    if(currentCalculation.resetNext) screen.textContent = "0"; currentCalculation.resetNext = false;
    if(str == "AC"){
        screen.textContent = "0";
        return;
    }
    if(str == "."){
        screen.textContent += str;
        return;
    }


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
    if(secondNum == 0) return "FUCK OF";

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
        case "x":
            return multiplication(firstNum, secondNum);
    }
}

