function evenOrOdd(){
    let numA = prompt("pick a number", "0");

    numA = Number(numA);

    if ((isNaN(numA))){
        console.log("Please pick numbers only");
    }
    else if(numA % 2 === 0){
        console.log(`${numA} is even`)
    }
    else 
        console.log (`${numA} is odd`)
}

function evenOrOddBigInt(){
    let numA = prompt("pick a number", "0");

    numA = BigInt(numA);
    bigIntNumA = numA / 10000

    if ((isNaN(numA))){
        console.log("Please pick numbers only");
    }
    else if(bigIntNumA % 2 === 0){
        console.log(`${numA} is even`)
    }
    else 
        console.log (`${numA} is odd`)
}

function loop15(){
    let i;
    for (i = 0; i <= 15; i++){
        if (i % 2 == 0) {
            console.log (`${i} is even`);
        }
        else console.log (`${i} is odd`);
    }
}