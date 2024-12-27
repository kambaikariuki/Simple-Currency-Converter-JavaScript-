// Welcome to the Currency Converter!
// We have imported the 'sync-input' package for you.
// You will use this in later stages.
// This package allows you to get user input.
// Like so:
// let name = input("Type your name: ");
// let age = Number(input("Type your age: "));
const input = require('sync-input');
// Write your code here
console.log("Welcome to Currency Converter!")
// prints the string

// const USD = 1
// const JPY = 113.5
// const EUR = 0.89
// const RUB = 74.63
// const GBP = 0.75


const currencies = {
    'USD': 1,
    'JPY': 113.5,
    'EUR': 0.89,
    'RUB': 74.36,
    'GBP': 0.75
}

// Output a new message about what it can do; DONE
// Ask for the currency and amount (see Examples); DONE
// Calculate and output the correct result; DONE
// Handle any uppercased or lowercased inputs; DONE
// Handle unknown currency input; DONE
// Handle an amount that is less than 1; DONE

// Ask for the currencies (see Examples); DONE
// Calculate and output the result; DONE
// Handle any unknown and incorrect inputs. DONE

// Continuously ask for new currency input; DONE
// Give two choices to users; DONE
// Handle unknown inputs. DONE

for (let currency in currencies) {
    console.log(`1 USD equals ${currencies[currency]} ${currency}`)
}
// console.log(`I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP`)
// console.log(`Type the currency you wish to convert: USD`)
function convert(){
    console.log("What do you want to convert?")
    let inputFromCurrency = input("From: ").toUpperCase()

    if (!currencies.hasOwnProperty(inputFromCurrency)) {
        console.log('Unknown currency')
        convert()
    }

    let inputToCurrency = input("To: ").toUpperCase()

    if (!currencies.hasOwnProperty(inputToCurrency)) {
        console.log('Unknown currency')
        convert()
    }

    let inputAmount = Number(input("Amount: "))
    if (inputAmount < 0) {
        console.log('The amount cannot be less than 1')
        convert()
    } else if (isNaN(inputAmount)) {
        console.log('The amount has to be a number')
        convert()
    }

    // result = amount(inputAmount) * rate(inputCurrency)
    //let result = (inputAmount * currencies[inputCurrency]).toFixed(4)

    let result = ((inputAmount / currencies[inputFromCurrency]) * currencies[inputToCurrency]).toFixed(4)

    console.log(`Result: ${inputAmount} ${inputFromCurrency} equals ${result} ${inputToCurrency}`)

}

while(true){

    console.log('What do you want to do?')
    let choice = Number(input("1-Convert currencies 2-Exit program\n"))

    if (choice === 1 ) {
        convert()
        // console.log((inputAmount / currencies[inputCurrency]) * inputToCurrency
    }
    else if(choice === 2){
        console.log('Have a nice day!')
        return
    }
    else{
        console.log('Unknown input')
    }
}


