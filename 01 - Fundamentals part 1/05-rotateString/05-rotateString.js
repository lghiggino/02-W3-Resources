console.log("paciência, calma e perseverança")


let frase = "w3resource"
console.log(frase);
console.log(frase.length);
frase.slice(-1) // retornará "e"
frase.slice(0,-1) // retornará "w3resourc"

//let newFrase = frase.slice(-1)+frase.slice(0,-1) // retornará ew3resourc

for (i=frase.length; i> 0; i--){
    let newFrase = frase.slice([i]-1)+frase.slice(0,[i]-1);
    console.log(newFrase);
}

function rotateString(frase){
    const header = document.querySelector("#content");
    const para = document.createElement("p");
    header.appendChild(para);
    for (i=frase.length; i> 0; i--){
        let newFrase = frase.slice([i]-1)+frase.slice(0,[i]-1);
        console.log(newFrase); // string roda no console.log
        para.textContent = `${newFrase}` // string não roda aqui
    }
}