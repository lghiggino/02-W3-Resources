console.log("its a new day. Be kind to yourself and the people around you.");


const myForm = document.querySelector("#myForm");
myForm.addEventListener("submit", leapYearCalculator);

const para = document.querySelector("#result")


function leapYearCalculator(e){
    e.preventDefault();
    let valor = myForm.ano.value;
    console.log(valor);
    myForm.reset();
    if(valor % 4 === 0 && valor % 100 === 0 && valor %400 === 0){
        para.textContent = `${valor} is a leap year.`;
    } else para.textContent=`${valor} is not a leap year.`
};