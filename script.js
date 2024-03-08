// Import Statement for Prompt-Sync Library 
const prompt = require('prompt-sync')({sigint: true});

//ASCII welcome art
console.log("#     #   # # # #   #         #         # # #   #       #     #   ");
console.log("#     #   #         #         #        #     #  #       #     #   ");
console.log("# # # #   # # # #   #         #        #     #  #     #         # ");
console.log("#     #   #         #         #        #     #         #       #  ");
console.log("#     #   # # # #   # # # #   # # # #   # # #   #        # # #    ");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("     (╯^ - ^)╯  Welcome to CleanCode Laundromat!  ノ(^ - ^ノ)      ");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

//Main menu with displayed prices
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("|                   Menu                     |");
console.log("----------------------------------------------");
console.log("| Services:                                  |");
console.log("  - 🌈 Color Load:        $2.50 per pound    ");
console.log("  - ⚪ Whites Load:       $4.00 per pound    ");
console.log("  - ⚫ Darks Load:        $6.00 per pound    ");
console.log("|--------------------------------------------|");
console.log("| Additional Services:                       |");
console.log("  - 🧼 Detergent:         $1.50 per load     ");
console.log("  - 🧸 Softener:          $1.00 per load     ");
console.log("  - 🧺 Dryer Sheets:      $0.50 each         ");
console.log("|                                            |");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log("\n");

let loads = 0;
//User input prompts for pounds of clothes being washed AND if-statements to calculate number of loads needed
let colorPounds = prompt("How many pounds of color clothes would you like to wash? ");
if (colorPounds > 20) {
    loads += Math.ceil(colorPounds/10);
}
if (colorPounds > 10 && colorPounds <= 20) {
    loads +=2;
}
if (colorPounds <= 10) {
    loads += 1;
}

let whitePounds = prompt("How many pounds of white clothes would you like to wash? ");
if (whitePounds > 20) {
    loads += Math.ceil(whitePounds/10);
}
if (whitePounds > 10 && whitePounds <= 20) {
    loads +=2;
}
if (whitePounds <= 10) {
    loads += 1;
}

let darkPounds = prompt("How many pounds of dark clothes would you like to wash? ");
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
let detergentLoads;
let softenerLoads;
//User input prompts for detergent, softener and dryer sheets
let detergent = prompt("Do you need detergent (true/false)? ");
if (detergent == "true") {
    detergentPrice = 1.5 * loads;
    detergentLoads = loads;
} else {
    detergentPrice = 0;
    detergentLoads = 0;
}
let softener = prompt("Do you need fabric softener (true/false)? ");
if (softener == "true") {
    softenerPrice = 1 * loads;
    softenerLoads = loads;
} else {
    softenerPrice = 0;
    softenerLoads = 0;
}
let dryerSheets = prompt("How many dryer sheets per drying load? ");
let totalDryerSheets = dryerSheets * loads;
let dryerSheetPrice = Number(dryerSheets) * loads * 0.5;
//Total cost calculated
let totalCost = colorPrice + whitePrice + darkPrice + detergentPrice + softenerPrice + dryerSheetPrice;

console.log("\n");
//Printed receipt
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("|                   Receipt                   |");
console.log("-----------------------------------------------");
console.log("| Services:                                   |");
console.log(`  - 🌈 Color Load:   ${colorPounds}lbs   $${colorPrice.toFixed(2)}`);
console.log(`  - ⚪ Whites Load:  ${whitePounds}lbs   $${whitePrice.toFixed(2)}`);
console.log(`  - ⚫ Darks Load:   ${darkPounds}lbs   $${darkPrice.toFixed(2)}`);
console.log("|---------------------------------------------|");
console.log("| Additional Services:                        |");
console.log(`  - 🧼 Detergent:      ${detergentLoads} loads $${detergentPrice.toFixed(2)}`);
console.log(`  - 🧸 Softener:       ${softenerLoads} loads $${softenerPrice.toFixed(2)}`);
console.log(`  - 🧺 Dryer Sheets:   ${totalDryerSheets} sheets $${dryerSheetPrice.toFixed(2)}`);
console.log(`   Subtotal:             $${totalCost.toFixed(2)}`);
console.log(`   Total:                $${totalCost.toFixed(2)}`);
console.log("|     Thank you, have a nice day! <(^-^)>     |");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

