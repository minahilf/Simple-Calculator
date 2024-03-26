#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number:", type: "number", name: "firstNumber" },
  { message: "Enter second number:", type: "number", name: "secondNumber" },
  {
    message: "Choose operator:",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulus", "Exponentiation"],
  },
]);

if (answer.operator === "Addition") {
  console.log(`Your value is: ${answer.firstNumber + answer.secondNumber}`);
} else if (answer.operator === "Subtraction") {
  console.log(`Your value is: ${answer.firstNumber - answer.secondNumber}`);
} else if (answer.operator === "Multiplication") {
  console.log(`Your value is: ${answer.firstNumber * answer.secondNumber}`);
} else if (answer.operator === "Division") {
  console.log(`Your value is: ${answer.firstNumber / answer.secondNumber}`);
} else if (answer.operator === "Modulus"){
  console.log(`Your value is: ${answer.firstNumber % answer.secondNumber}`)
} else if(answer.operator === "Exponentiation"){
  console.log(`Your value is ${answer.firstNumber**answer.secondNumber}`)
} else {
  console.log(`Please select valid operator`);
}
