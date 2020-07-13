function largest5(){
    let numA = prompt("pick a number", "0");
    let numB = prompt("pick a number", "0");
    let numC = prompt("pick a number", "0");
    let numD = prompt("pick a number", "0");
    let numE = prompt("pick a number", "0");

    numA = Number(numA);
    numB = Number(numB);
    numC = Number(numC);
    numD = Number(numD);
    numE = Number(numE);

    if ((isNaN(numA)) || (isNaN(numB)) || (isNaN(numC)) || (isNaN(numD)) || (isNaN(numE))){
        console.log("Please pick numbers only");
    }
    else if ((numA > numB) && (numA > numC) && (numA > numD) && (numA > numE)){
            console.log(numA + " is the largest number");
        }
    else if ((numB > numA) && (numB > numC) && (numB > numD) && (numB > numE)){
        console.log(numB + " is the largest number");
    }
    else if ((numC > numA) && (numC > numB) && (numC > numD) && (numC > numE)){
        console.log(numC + " is the largest number");
    }
    else if ((numD > numA) && (numD > numB) && (numD > numC) && (numD > numE)){
        console.log(numD + " is the largest number");
    }
    else console.log(numE + " is the largest number");
    }

