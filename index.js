//import { type } from "os";
import { add } from "./add.js";
import { subtract } from "./subtract.js";
import { multiply } from "./multiply.js";
import { Divide } from "./Divide.js";
import inquirer from "inquirer";
const prompt = await inquirer.prompt([
    {
        type: "list",
        name: "operator",
        message: "Choose an operator",
        choices: ["add", "mul", "sub", "div"]
    },
    {
        type: "input",
        name: "n1",
        message: "Enter first number:",
    },
    {
        type: "number",
        name: "n2",
        message: "Enter second number:",
    }
]);
const number1 = parseInt(prompt.n1);
const number2 = parseInt(prompt.n2);
if (prompt.operator == "add") {
    let result = add(number1, number2);
    console.log(result);
}
else if (prompt.operator == "sub") {
    let result2 = subtract(number1, number2);
    console.log(result2);
}
else if (prompt.operator == "mul") {
    let result3 = multiply(number1, number2);
    console.log(result3);
}
else {
    let result4 = Divide(number1, number2);
    console.log(result4);
}
