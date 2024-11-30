// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

function readFile(){
    return new Promise(function(resolve){
        const p = fs.readFile("spaces.txt", "utf-8", function(err, data){
            resolve(data);
    });
    return p;
})
}

function writeFile(data){
    console.log(data);
    const newData = data.replace(/\s+/g, " ");
    console.log(newData);
    return new Promise(function(resolve, reject){
        const p = fs.writeFile("spaces.txt", newData, function(err){
            if(err){
                reject(err);
            }
            else{
                console.log("File Written Successfully");
            }
        });
    });
}

const res = readFile();
res.then(writeFile);