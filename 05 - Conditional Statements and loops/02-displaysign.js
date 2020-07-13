function displaySign(){
    let numA = prompt("pick a number", "0");
    let numB = prompt("pick a number", "0");
    let numC = prompt("pick a number", "0");
    let calculation = (Number(numA))*(Number(numB))*(Number(numC));

    if (calculation < 0){
        console.log(`The sign is negative, and the value is ${calculation}`)
    }
    else if(calculation > 0){
        console.log(`The sign is positive, and the value is ${calculation}`)
    }
    else console.log(`The product of those numbers returns zero`)
}
    


