console.log("patience and self belief!")

const header = document.querySelector("#header");
const button = document.createElement("button");
const para = document.createElement("p");

let tArea = 0;
button.textContent = "click here to begin"
header.appendChild(button);
header.appendChild(para)


button.addEventListener("click", triangleArea);

function triangleArea (num1, num2, num3){
    let i = 0;
    do {
    num1 = Number(prompt("please choose a side length. positive numbers only.", "3"));
    num2 = Number(prompt("please choose a side length. positive numbers only.", "4"));
    num3 = Number(prompt("please choose a side length. positive numbers only.", "5"));
    } while (num1 <= 0 || num2 <= 0 || num3 <= 0);
    //uses Herons formula
    let perimeter = (num1+num2+num3)/2;
    let step2 = (perimeter*(perimeter-num1)*(perimeter-num2)*(perimeter-num3));
    let area = Math.sqrt(step2);
    tArea = area;
    if (isNaN(area)){
        return para.textContent = "That is an impossible triangle";
    }else para.textContent = `${tArea}`
    //seção do desenho
}

function draw(){
        let canvas = document.getElementById("canvas");
        if (canvas.getContext){
            let ctx = canvas.getContext("2d");
        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect(10,10,50,50);

        ctx.fillStyle = "rgba(0,0,200,0.5)";
        ctx.fillRect(30,30,50,50);
    }
}        
