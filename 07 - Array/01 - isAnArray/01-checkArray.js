console.log("you can do it, leonardo")

const myForm = document.querySelector("#theForm")
myForm.addEventListener("submit", isArray)

const para = document.querySelector("#result")


function isArray(e){
    e.preventDefault();
    let valor = myForm.isarrayInput.value;
    console.log(valor);
    console.log(typeof(valor));
    if(Array.isArray(valor)){
        para.textContent = "your input is an array"
    } else para.textContent = "your input is NOT an array"
    
}

function consoleArray(arr){
    if(Array.isArray(arr)){
       console.log("your input is an array");
    } else console.log("your input is NOT an array")
}