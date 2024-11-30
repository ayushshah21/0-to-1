// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


let counter = 0;
let currentTime = new Date();

setInterval(() => {
    currentTime = new Date();
    const withType = currentTime.toLocaleString().slice(11);
    const withoutType = withType.slice(0, -2);
    console.log(withType);
    console.log(withoutType);
}, 1000);
