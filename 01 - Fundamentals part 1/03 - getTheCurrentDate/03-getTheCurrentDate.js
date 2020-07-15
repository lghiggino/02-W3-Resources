console.log("believe in yourself");

//initializations
const header = document.querySelector("#header");
const div = document.createElement("div");
const para = document.createElement("p");
const para2 = document.createElement("p")
let today = new Date();
let simpleDate = today.getDate()+"/"+today.getMonth()+"/"+today.getFullYear();
let simpleHour = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();

//styling
div.style.black = "red";
div.style.backgroundImage = "url('clockBG.jpeg')";
div.style.minWidth = "40vw";
div.style.minHeight = "18vh";
para.style.padding= "4.5em";
para2.style.padding= "4.5em";

//appending
header.appendChild(div);
div.appendChild(para);
div.appendChild(para2);

para.textContent = `${simpleDate}`;
para2.textContent = `${simpleHour}`;






