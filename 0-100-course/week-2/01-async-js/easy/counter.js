let counter = 0;

// setInterval(() => {
//     counter++;
//     console.log(counter);
// }, 1000);

function doSomething(){
    console.log(counter++);
    setTimeout(doSomething, 1000);
}

setTimeout(doSomething, 1000);