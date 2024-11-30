const fs = require("fs");

function loadFile() {
    return new Promise(function(resolve){
        const p = fs.readFile("a.txt", "utf-8", function(err, data){
            resolve(data);
        })
        return p;
    })
}

function onDone(data){
    console.log(data);
}

const load = loadFile();
console.log(load);
load.then(onDone);