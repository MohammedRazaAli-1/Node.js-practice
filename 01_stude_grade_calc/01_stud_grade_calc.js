// 1. Student Grade Calculator (Basics)
// Concepts : Variables, Functions, Arrays, Modules

// Problem : Create a program where you have an array of student marks.

// Your program should calculate
// Total Marks
// Average
// Highest Marks
// Lowest Marks
// Grade (A,B,C,D,F)

// Move all calculation functions into another module.

// Example
// Marks 80,90,70,95,60
// Output
// Average : 79
// Highest : 95
// Lowest : 60
// Grade : B

const GradeCalculator = require("./grade_function")

let myArray =[87,46,96,49,66,77,34];

GradeCalculator.GradeCalculator([]);
