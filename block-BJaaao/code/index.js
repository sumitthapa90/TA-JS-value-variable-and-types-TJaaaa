// Using alert, prompt, confirm and console

/*

1. Do the following using `alert` function. When you find any square bracket
 replace that to the value of the variable.

*/

let num1 = 21;
let num2 = 32;

/*
- Create a variable named `language` and store the value of `JavaScript` in it
*/
var language = "JavaScript";
/*
- Alert message saying `I am learning [language]`
*/
alert(`I am learning ${language}`);
/*
- Alert `The value of num1 is [num1] and the value of num2 is [num2]`
*/
alert(`The value of num is ${num1} and the value of num2 is ${num2}`);
/*
- Alert `The sum of [num1] and [num2] is [num1 + num1]`
*/
alert(`The sum of ${num1}and ${num2} is ${num1 + num2}`);
/*
2. Do the following using `alert`, `prompt` and `confirm` and `console`

  - Using prompt accept the name of the user and store it a variable names `userName`
*/

var userName = prompt(`username`);

/*
  - Using prompt accept the profession of the user and store it a variable names`userProfession`
 */
let userProfession = prompt(`userProfession`);
/*
  - Using confirm check if user is adult or not and store the value in `isAdult`
  */
let isAdult = confirm("adult or not");

alert(isAdult);

/*
  - Alert message `I am [userName] a [userProfession]`
  */
alert(`I am ${userName} a ${userProfession}`);

/*
  - Log the message `I am [userName] a [userProfession]`
  */
console.log(`I am ${userName} a ${userProfession}`);

/*
  - Alet message `Username: [userName]
    Adult: [isAdult]
    Profession: [userProfession]` (it should be in three different lines)
*/

alert(`${userName}\n ${isAdult}\n ${userProfession}`);

/*
  - Log the message using console.log `Username: [userName]
    Adult: [isAdult]
    Profession: [userProfession]` (it should be in three different lines)
*/
console.log(`${userName}\n ${isAdult}\n ${userProfession}`);
/*

. Addition using prompt

  - Accept two number values form user and store them in `numA` and`numB`.
*/
let numA = +prompt(`please enter a no`);
let numB = +prompt(`please enter a no`);
console.log(numA, numB);
/*
  - Alert the sum of both numbers. [numA + numB]
 */

let sum = numA + numB;
alert(`sum of ${numA} & ${numB} is ${sum}`);
/*
- Alert [numA - numB]
*/
let sub = numA - numB;
alert(`sub of ${numA} - ${numB} is ${sub}`);

/*
  - Alert [numA * numB]
  */
 let mul = numA * numB
 alert(`mul of ${numA} * ${numB} is ${mul}`)

/*
  - Log using console.log [numA - numB]
*/
console.log(`${numA} - ${numB}`)

/*
  - Log using console.log [numA * numB]
*/
console.log(`${numA} * ${numB}`)



