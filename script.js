// Import Statement for Prompt-Sync Library 
const prompt = require('prompt-sync')({sigint: true});


console.log("#     #   # # # #   #         #         # # #   #       #     #   ");
console.log("#     #   #         #         #        #     #  #       #     #   ");
console.log("# # # #   # # # #   #         #        #     #  #     #         # ");
console.log("#     #   #         #         #        #     #         #       #  ");
console.log("#     #   # # # #   # # # #   # # # #   # # #   #        # # #    ");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("     (╯^ - ^)╯  Welcome to CleanCode Laundromat!  ノ(^ - ^ノ)      ");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");


console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("|                Menu                    |");
console.log("------------------------------------------");
console.log("| Services:                              |");
console.log("| - 🌈 Color Load:        $2.50 per pound |");
console.log("| - ⚪ Whites Load:       $4.00 per pound |");
console.log("| - ⚫ Darks Load:        $6.00 per pound |");
console.log("|----------------------------------------|");
console.log("| Additional Services:                   |");
console.log("| - 🧼 Detergent:         $1.50 per load  |");
console.log("| - 🧸 Softener:          $1.00 per load  |");
console.log("| - 🧺 Dryer Sheets:      $0.50 each      |");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

let colorPounds = prompt("How many pounds of color clothes would you like to wash?");
let whitePounds = prompt("How many pounds of white clothes would you like to wash?");
let darkPounds = prompt("How many pounds of dark clothes would you like to wash?");

let colorPrice = Number(colorPounds) * 2.5;
let whitePrice = Number(whitePounds) * 4;
let darkPrice = Number(darkPounds) * 6;