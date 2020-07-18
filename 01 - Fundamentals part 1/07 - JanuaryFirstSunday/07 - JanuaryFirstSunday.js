console.log("believe in yourself")

const myForm = document.querySelector("#form");
myForm.addEventListener("submit", janFirstSunday);

const para = document.querySelector("#result");

function janFirstSunday(e){
    e.preventDefault();
    //função pra valer a partir daqui
    let userYear = myForm.yearInp.value
    let myDate = new Date(userYear+",1,1");
    let janFirstDay = myDate.getDay()
    let week = {
        0: "SUNDAY! Yes!",
        1: "monday",
        2: "tuesday",
        3: "wednesday",
        4: "thursday",
        5: "friday",
        6: "saturday"}
    console.log(janFirstDay);
    console.log(week[janFirstDay]);
        para.textContent = `${userYear}'s January first is a ${week[janFirstDay]}`;
    }


