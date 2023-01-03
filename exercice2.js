// Exercise 2 : Tips


function calculateTip(){
    let amount = prompt("Enter an amount");

    let amountToNumber = Number(amount)

    if(isNaN(amountToNumber))
    {
        return console.log(`The amount ${amount} s not a number`);

    }else if (amountToNumber <= 50 ) {

        // If the bill is less than $50, tip 20%.
        let newAmount = amountToNumber * (1 + 0.2)
        return console.log(`New amount ${newAmount}`);

    }else if (amountToNumber > 50 &&  amountToNumber <= 200) {

        // If the bill is between $50 and $200, tip 15%.
        let newAmount = amountToNumber * (1 + 0.15)
        return console.log(`New amount ${newAmount}`);

    }else if (amountToNumber > 200) {

        // If the bill is more than $200, tip 10%.
        let newAmount = amountToNumber * (1 + 0.1)
        return console.log(`New amount ${newAmount}`);

    }
}