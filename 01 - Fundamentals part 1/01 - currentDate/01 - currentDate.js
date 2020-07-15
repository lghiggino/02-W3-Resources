console.log("you can do it")

const header = document.querySelector("#header");

const para = document.createElement("p");
header.appendChild(para);
let date = Date();
para.textContent = `${date}`;
