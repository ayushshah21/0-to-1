/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor(){
    this.result = 0.0;
  }
  add(num){
    this.result += num;
  }
  subtract(num){
    this.result -= num;
  }
  multiply(num){
    this.result *= num;
  }
  divide(num){
    if(num === 0){
      throw new Error("Division by 0");
    }
    this.result /= num;
  }
  clear(){
    this.result = 0;
  }
  getResult(){
    return this.result;
  }
  calculate(str){
    const trimStr = str.replace(/\s/g, "");
    console.log(str);
    for(let i = 0; i < trimStr.length; i++){
      let ch = trimStr.charAt(i);
      if(ch < '0' || ch > '9'){
        console.log(ch);
        if(ch !== '+' && ch !== '-' && ch !== '*' && ch !== '/' && ch !== '(' && ch !== ')' && ch !== "."){
          console.log("INVALID " + ch);
          throw new Error("Invalid char");
        }
      }
    }
    // Step 3: Check if parentheses are balanced
    if (!isBalanced(trimStr)) {
      throw new Error("Invalid expression: Unbalanced parentheses");
    }

    // Step 4: Check for division by zero
    if (/\/0(?!\d)/.test(trimStr)) {
      throw new Error("Division by 0");
    }

    // Step 5: Safely evaluate the expression
    try {
      this.result = new Function("return " + trimStr)();
      return this.result;
    } catch (error) {
      throw new Error("Invalid expression");
    }
  }

}

function isBalanced(expression) {
  let stack = [];
  for (let char of expression) {
    if (char === '(') stack.push(char);
    else if (char === ')') {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return stack.length === 0;
}

module.exports = Calculator;
