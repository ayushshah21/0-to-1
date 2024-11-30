function greet(){
    console.log("Hello World");
}

const start =  performance.now();
setTimeout(greet, 1 * 2000);
const end = performance.now();
console.log(end - start);