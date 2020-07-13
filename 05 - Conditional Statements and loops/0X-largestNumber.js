function largestNumber(...theArgs){
    theArgs.sort(function(a,b){
        return a-b;
    });
    console.log(theArgs[theArgs.length-1]);
    console.log(theArgs);
    }

function smallestNumber(...theArgs){
    theArgs.sort(function(a,b){
        return a-b;
    });
    
    
    for (i = 0; i<=theArgs.length; i++){
    if (typeof theArgs[i] === "number" || typeof theArgs[i] === NaN) {
        return(theArgs[i]);
        }
    }
    console.log(theArgs);
}