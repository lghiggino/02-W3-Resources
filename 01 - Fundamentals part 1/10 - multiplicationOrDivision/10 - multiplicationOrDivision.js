console.log("its a new day. Be kind to yourself and the people around you.");


const form = document.querySelector("#theForm");
const firstN = document.querySelector("#firstNumber");
const secondN = document.querySelector("#secondNumber");

const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");
const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");

multiplyBtn.addEventListener("click", multiplication);
divideBtn.addEventListener("click", division);
addBtn.addEventListener("click", addition);
subtractBtn.addEventListener("click", subtraction);

const result = document.querySelector("#result");
const para = document.createElement("p");
result.appendChild(para);
para.textContent = "pick two numbers, click any operation";

function multiplication(e){
    e.preventDefault();
    let firstNum = parseInt(firstN.value)
    let secondNum = parseInt(secondN.value)
    para.textContent = firstNum * secondNum
}

function division(e){
    e.preventDefault();
    let firstNum = parseInt(firstN.value)
    let secondNum = parseInt(secondN.value)
    para.textContent = firstNum / secondNum
}

function addition(e){
    e.preventDefault();
    let firstNum = parseInt(firstN.value)
    let secondNum = parseInt(secondN.value)
    para.textContent = firstNum + secondNum
}

function subtraction(e){
    e.preventDefault();
    let firstNum = parseInt(firstN.value)
    let secondNum = parseInt(secondN.value)
    para.textContent = firstNum - secondNum
}