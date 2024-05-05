#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number",
    },
]);
let fromAmount = currency[answer.from];
let toAmount = currency[answer.to];
let amount = answer.amount;
let baseCurrency = amount / fromAmount;
let convertedCurrency = baseCurrency * toAmount;
const symbols = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    INR: "₹",
    PKR: "₨",
};
console.log(chalk.green.bold("Conversion Result:"));
console.log(chalk.yellow(`${amount} ${symbols[answer.from]} ${answer.from} equals:`));
console.log(chalk.cyan(`${convertedCurrency.toFixed(2)} ${symbols[answer.to]} ${answer.to}`));
