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

let loads = 0;

let colorPounds = prompt("How many pounds of color clothes would you like to wash?");
if (colorPounds > 20) {
    loads += Math.ceil(colorPounds/10);
}
if (colorPounds > 10 && colorPounds <= 20) {
    loads +=2;
}
if (colorPounds <= 10) {
    loads += 1;
}

let whitePounds = prompt("How many pounds of white clothes would you like to wash?");
if (whitePounds > 20) {
    loads += Math.ceil(whitePounds/10);
}
if (whitePounds > 10 && whitePounds <= 20) {
    loads +=2;
}
if (whitePounds <= 10) {
    loads += 1;
}

let darkPounds = prompt("How many pounds of dark clothes would you like to wash?");
if (darkPounds > 20) {
    loads += Math.ceil(darkPounds/10);
}
if (darkPounds > 10 && darkPounds <= 20) {
    loads +=2;
}
if (darkPounds <= 10) {
    loads += 1;
}

let totalPounds = colorPounds + whitePounds + darkPounds;


let colorPrice = Number(colorPounds) * 2.5;
let whitePrice = Number(whitePounds) * 4;
let darkPrice = Number(darkPounds) * 6;

let detergentPrice;
let softenerPrice;

let detergent = prompt("Do you need detergent (true/false)?");
if (detergent == "true") {
    detergentPrice = 1.5 * loads;
} else {
    detergentPrice = 0;
}
let softener = prompt("Do you need fabric softener (true/false)?");
if (softener == "true") {
    softenerPrice = 1 * loads;
} else {
    softenerPrice = 0;
}
let dryerSheets = prompt("How many dryer sheets per drying load?");
let dryerSheetPrice = Number(dryerSheets) * loads * 0.5;
dryerSheetPrice = parseFloat(dryerSheetPrice);


console.log(dryerSheetPrice);
console.log(softenerPrice);
console.log(detergentPrice);
console.log(loads);
