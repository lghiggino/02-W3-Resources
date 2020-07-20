const content = document.querySelector("#content");
const para = document.createElement("p");
content.appendChild(para);

const form = document.getElementById("form");
form.addEventListener("submit", compare);

const playerNumber = document.getElementById("playerNumber");

function compare(e){
    e.preventDefault();
    let computerChoice = Math.floor(Math.random()*10+1);
    let playerChoice = form.playerNumber.value;
    console.log(computerChoice);
    console.log(playerChoice);
    if(computerChoice == playerChoice){
        para.textContent = `Congratulations you and the computer chose ${playerChoice}`
    } else para.textContent = `You chose ${playerChoice}, but the computer chose ${computerChoice}`

}



// second functionality  -  much more fun //
const content2 = document.getElementById("content2");
const para2 = document.createElement("p");
const para3 = document.createElement("p");
content2.appendChild(para2);
content2.appendChild(para3)

const form2 = document.getElementById("form2");
form2.addEventListener("submit", compare2)

const playerNumber2 = document.getElementById("playerNumber2")
let roundCount = 0
let computerChoice2 = Math.floor(Math.random()*10+1);

function compare2(e){
    e.preventDefault();
    let playerChoice2 = form2.playerNumber2.value;
    console.log(computerChoice2);
    console.log(playerChoice2);
    if (computerChoice2 == playerChoice2){
        para2.textContent = `Congratulations! You win! Both you and the computer chose ${playerChoice2}. Click the button to restart`
    } else if (computerChoice2 > playerChoice2){
        roundCount++
        para2.textContent = `The number you chose is smaller than the computer choice. Round ${roundCount}.`
    } else if (computerChoice2 < playerChoice2){
        roundCount++
        para2.textContent = `The number you chose is bigger than the computer choice. Round ${roundCount}. `
    }
    if(roundCount === 3){
        para3.textContent = "Game Over. Click the button to restart.";
        computerChoice2 = Math.floor(Math.random()*10+1);
        roundCount = 0;
    } else para3.textContent = ""


}