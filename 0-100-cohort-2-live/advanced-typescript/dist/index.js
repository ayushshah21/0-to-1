"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const result = sumOfAge({ name: "Ayush", age: 21 }, { name: "Kirat", age: 30 });
console.log(result);
