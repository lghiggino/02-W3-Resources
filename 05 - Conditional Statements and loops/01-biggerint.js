//DOM init
const input = document.querySelector("#input");
const starter = document.createElement("button");
starter.classList.add("button");
const btText = document.createTextNode("click here to begin")
starter.appendChild(btText);
input.appendChild(starter);

const output = document.querySelector("#output");
const display = document.createElement("div");
display.classList.add("display");
output.appendChild(display);

//mouse events
starter.addEventListener("click", clear);
starter.addEventListener("click", biggerInt);

//functions
function clear(){
    display.innerHTML="";
}

function biggerInt(){
    const para = document.createElement("p")
    display.appendChild(para);
    let numA = prompt("pick a number", "0");
    let numB = prompt("pick another number", "0");
    let floatOne = numA * 100000;
    let floatTwo = numB * 100000;

    if (isNaN(numA) || isNaN(numB)){
       para.textContent = "please choose numbers only";
       return;
    } 
    if (floatOne > floatTwo){
        para.textContent = `${numA}`
        //console.log(`The biggest number is ${numA}`)
    } else if (floatOne < floatTwo){
        para.textContent = `${numB}`
        //console.log(`The biggest number is ${numB}`)
    } else  para.textContent = `${numA} is equal to ${numB}`
    //console.log("both numbers are the same, as we round the first number")
}

/*function biggerNumber(){
    let numA = prompt("pick a number", "0");
    let numB = prompt("pick a number", "0");

    if ((Number(numA)) > (Number(numB))){
        console.log(`The biggest number is ${numA}`)
    } else if ((Number(numA)) < (Number(numB))){
        console.log(`The biggest number is ${numB}`)
    } else console.log("both numbers are the same")
}*/