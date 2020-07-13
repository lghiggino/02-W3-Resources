function biggerInt(){
    let numA = prompt("pick a number", "0");
    let numB = prompt("pick a number", "0");

    if ((parseInt(numA)) > (parseInt(numB))){
        console.log(`The biggest number is ${numA}`)
    } else if ((parseInt(numA)) < (parseInt(numB))){
        console.log(`The biggest number is ${numB}`)
    } else console.log("both numbers are the same, as we round the first number")
}

function biggerNumber(){
    let numA = prompt("pick a number", "0");
    let numB = prompt("pick a number", "0");

    if ((Number(numA)) > (Number(numB))){
        console.log(`The biggest number is ${numA}`)
    } else if ((Number(numA)) < (Number(numB))){
        console.log(`The biggest number is ${numB}`)
    } else console.log("both numbers are the same")
}