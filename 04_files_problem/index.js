const fs = require('fs');
const path = require('path');

// create file synchronuous - blocking - on main thread 
fs.writeFileSync('index.txt' , "hello i am index file");

// read 
let  data =  fs.readFileSync('index.txt' , 'utf-8');
console.log(data)

//append new data at end of old 
let mydata = "hello i am mohammad raza learning node js "
fs.appendFileSync('index.txt' , `\n ${mydata}`)

let  data1 =  fs.readFileSync('index.txt' , 'utf-8');
console.log(data1)

//deletes file 
// fs.unlinkSync('index.txt')

//rename file name 
fs.renameSync('index.txt' , 'main.txt')

//check file exist or not : 

console.log (fs.existsSync('index.txt'));
console.log(fs.existsSync('main.txt'));

// create folder : 

// fs.mkdirSync('myfolder');

//delete folder :

// fs.rmdirSync('myfolder');

// to read folder :

// console.log(fs.readdirSync('myfolder'))

// copy 1 file data to anther 

fs.copyFileSync('index.js' , 'myapp.js')

console.log(fs.statSync('index.js'));

// check is it file ? 
console.log(fs.statSync('index.js').isFile());

// check is it folder : 
console.log(fs.statSync('index.js').isDirectory());
// fs.writeFile('main.txt' , "hello i am main file")