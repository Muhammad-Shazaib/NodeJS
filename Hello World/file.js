const fs = require("fs");
const os = require("os");
const { resourceLimits } = require("worker_threads");

console.log(os.cpus().length);

// console.log('1');

// const request = fs.readFileSync('./text.txt', 'utf-8');
// console.log(request);

// console.log('2');

// console.log('1');
// fs.readFile('./text.txt', 'utf-8', (err, request) => {
//     console.log(request)
// });

// console.log('2');
// console.log('3');
// console.log('4');
// console.log('5');



// sync... Blocking....
//fs.writeFileSync('./text.txt', 'Hey, how are you?');


// Async... Non - Blocking Request
// fs.writeFile('./text.txt', 'hello world Async', (err) => {
//    console.log(err);
// });


// const result = fs.readFileSync('./contacts.txt', 'utf-8') 
//     console.log(result);


// fs.readFile('./contacts.txt', 'utf-8', (err, result) => {
//     if (err) {
//         console.log("Error", err);
//     }
//     else {
//         console.log(result);
//     }
// })


// fs.appendFileSync('./contacts.txt', '\n' + new Date().getDate().toLocaleString());

// fs.copyFileSync('./contacts.txt', 'copy.txt');

// fs.unlinkSync('copy.txt');

// console.log(fs.statSync('./contacts.txt'));

// fs.mkdirSync('my_docs/a/b' , {recursive: true});