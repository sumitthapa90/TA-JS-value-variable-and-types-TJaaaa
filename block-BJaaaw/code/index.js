// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  */
let num = Number(prompt(`Number is even`));
if (num % 24 === 0) {
  console.log("Number is even");
} else {
  console.log("Number is odd");
}
/*
  - `if` the number is odd print the message "number is odd"
*/
let num = Number(prompt("Number is odd"));
undefined;
if (num % 7 === 0) {
  console.log("Number is odd");
} else {
  ("Number is odd");
}
/*
// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
*/
let num1 = +prompt("enter no 1");
let num2 = +prompt("enter no 2");

if (num2 > num1) {
  alert(num2);
} else {
  alert(num1);
}

// 3. Convert the above code using`?` terniary operator

num2 > num1 ? alert(num2) : alert(num1);
/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
 - `if` house name is "lannister" then print the message " A lannister always pays his debt"
 - `else` print the message " All men must die"
 */
let houseName = prompt("enter a house name");
if (houseName == "stark") {
  console.log("Winter is comming");
} else if (houseName == "lannister") {
  console.log(" A lannister always pays his debt");
} else {
  console.log(" All men must die");
}

// 5. Convert the above code using`?` terniary operator
houseName == "stark"
  ? "winter is comming"
  : houseName == "lannister"
  ? " A lannister always pays his debt"
  : " All men must die";

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

let month = +prompt("Enter no of months");

switch (true) {
  case month == 1:
    alert(31);
    break;
  case month == 2:
    alert(28);
    break;
  case month == 3:
    alert(31);
    break;
  case month == 4:
    alert(30);
    break;
  case month == 5:
    alert(31);
    break;
  case month == 6:
    alert(30);
    break;
  case month == 7:
    alert(31);
    break;
  case month == 8:
    alert(31);
    break;
  case month == 9:
    alert(30);
    break;
  case month == 10:
    alert(31);
    break;
  case month == 11:
    alert(30);
    break;
  case month == 12:
    alert(31);
    break;
  default:
    "Invalid month";
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %
*/
let salery = +prompt("Write your sallery");

if(salery <= 20000) {
  alert(`you get a salery in hand ${salery- ((salery*10)/ 100)}`)
}
else if(salery <= 40000){
  alert(`you get a salery in hand ${salery- ((salery*10)/ 100)}`)
}
else if(salery <= 50000){
alert(`you get a salery in hand ${salery- ((salery*10)/ 100)}`)
}else{
  alert(`none`)
}

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks = +prompt("Enter marks");
if (marks > 100) {
  alert("Marks can't be greater than 100");
} else if (marks > 80 && marks <= 100) {
  alert("Grade A");
} else if (marks > 50 && marks <= 80) {
  alert("Grade B");
} else if (marks > 30 && marks <= 50) {
  alert("Grade C");
} else {
  alert("Grade D");
}

// switch

switch (true) {
  case marks > 100:
    alert("Marks can't be greater than 100");
    break;

  case marks > 80 && marks <= 100:
    alert("Grade A");
    break;

  case marks > 50 && marks <= 80:
    alert("Grade B");
    break;

  case marks > 30 && marks <= 50:
    alert("Grade C");
    break;

  case marks > 0:
    alert("Grade D");
    break;

  default:
    alert("invalid no");
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let Weather = prompt("What is the weather like outside");

if (Weather == "sunny") {
  alert("Wear a T-shirt");
} else if (Weather == "rainy") {
  alert("Don't forget to take your raincoat");
} else if (Weather == "hot") {
  alert("Get a hanky");
} else if (Weather == "freezing") {
  alert("Get your sweeter on");
} else {
  alert("Not a valid input");
}
