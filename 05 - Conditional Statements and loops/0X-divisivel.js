const nameGrade = [["David", 80], ["Vinoth", 77], ["Divya", 88], ["Ishitha", 95], ["Thomas", 68]];

function averageMarks(){
    for (let i = 0; i <= nameGrade.length-1; i++){
        let sumGrades += nameGrade[i][1];
        return sumGrades/nameGrade.length;
    }
}

function correspondingGrade(){
    switch(true) {
        case averageMarks <= 60:
          console.log("The class grade was F");
          break;
        case averageMarks <= 70:
            console.log("The class grade was D");
            break;
        case averageMarks <= 80:
            console.log("The class grade was C");
            break;
        case averageMarks <= 90:
            console.log("The class grade was B");
            break;    
        default:
            console.log("The class grade was A");
      } 
}