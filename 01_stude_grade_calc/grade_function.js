function GradeCalculator(marks){

    if(marks.length == 0){
        console.log("Error : Array is Empty");
    return ;
    } 
    
    let lowest = Math.min(...marks);
    let highest =Math.max(...marks);
    let sum = marks.reduce((sum, curr ) => sum + curr , 0);
    let avg = sum / marks.length;
    let grade;

    if(avg > 90){
        grade = "A"
    }else if(avg > 75){
        grade ="B"
    }else if(avg > 60){
        grade = "C"
    }else if(avg > 40){
        grade =  "D"
    }else {
        grade = "F"
    }
    
    console.log(`Total Marks : ${sum}`)
    console.log(`Average : ${avg}`);
    console.log(`Highest : ${highest}`);
    console.log(`Lowest : ${lowest}`);
    console.log(`Grade : ${grade}`)


}


module.exports={GradeCalculator}