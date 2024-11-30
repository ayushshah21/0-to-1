// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

function writeFile(){
    return new Promise(function(resolve, reject){
        const p = fs.writeFile("test.txt", "My name is Anthony Gonsalves", function(err){
            if (err) {
                reject(err); // Reject the promise if an error occurs
            } else {
                resolve("File written successfully"); // Resolve with a success message
            }
        });
    })
}
function logData(data){
    console.log(data);
}

let write = writeFile();
write.then(logData("File Written Successfully"));