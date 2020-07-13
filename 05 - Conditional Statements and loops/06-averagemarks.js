const nameGrade = [["David", 80], ["Vinoth", 77], ["Divya", 88], ["Ishitha", 95], ["Thomas", 68]];

let sumGrades = 0;
    console.log(`Value of sumGrades right after definition: ${sumGrades}`);

    for (i=0; i<nameGrade.length; i++){
        sumGrades += nameGrade[i][1];
        }
        console.log(`Value of sumGrades after the for loop: ${sumGrades}`);
    

    let avg = (sumGrades/nameGrade.length);
    console.log(`Value of sumGrades/array.length: ${avg}`);
    

    switch(true) {
        case avg <= 60:
          console.log("The class grade was F");
          break;
        case avg <= 70:
            console.log("The class grade was D");
            break;
        case avg <= 80:
            console.log("The class grade was C");
            break;
        case avg <= 90:
            console.log("The class grade was B");
            break;    
        default:
            console.log("The class grade was A");
      } 