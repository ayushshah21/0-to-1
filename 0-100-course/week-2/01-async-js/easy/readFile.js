// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require("fs").promises;

// function loadFile(){
//     return new Promise(function(resolve){
//         const p = fs.readFile("test.txt", "utf-8", function(err, data){
//             resolve(data);
//     });
//     return p;
// })
// }

// function printData(data){
//     console.log(data);
// }

// const res = loadFile();
// res.then(printData);
let count = 0;

async function loadFile(){
    try{
        const data = await fs.readFile("test.txt", "utf-8");
        return data;
    }
    catch(err){
        console.log(err);
    }
}

async function run() {
    let text = await loadFile();
    console.log(text);
}


for(let i = 0; i < 1000000000; i++){
    count += i;
}
console.log(count);

run();