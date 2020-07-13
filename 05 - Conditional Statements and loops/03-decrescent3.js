function decrescent3(){
    let numA = prompt("pick a number", "0");
    let numB = prompt("pick a number", "0");
    let numC = prompt("pick a number", "0");

    numA = Number(numA);
    numB = Number(numB);
    numC = Number(numC);

    if ((isNaN(numA)) || (isNaN(numB)) || (isNaN(numC))){
        console.log("Please pick numbers only");
    }
    else if ((numA > numB) && (numA > numC)){
        if (numB > numC){
            console.log(numA + "," + numB + "," + numC);
        }
        else console.log(numA + "," + numC + "," + numB);
    }

    else if ((numB > numA) && (numB > numC)){
        if (numA > numC){
            console.log(numB + "," + numA+ "," + numC);
        }
        else console.log(numB + "," + numC+ "," + numA);
    }

    else 
        if (numA > numB){
            console.log(numC + "," + numA + "," + numB );
        }
        else console.log(numC + "," + numB + "," + numA);
    
}
















