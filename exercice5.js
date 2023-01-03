//Week 2 - Day 4
//Exercises XP


//Exercise 5 : What’s In My Wallet ?



function changeEnough(itemPrice, amountOfChange){

    const listOfCoefficients = [0.25, 0.10, 0.05, 0.01];

    let newPrice = 0;

    // Check if amountOfChange is an array and has the same size as listOfCoefficients
    if(Array.isArray(amountOfChange)  && listOfCoefficients.length != amountOfChange.length)
    {
        return console.log(`Please provide table of${listOfCoefficients.length} amount`);
    }

    for (let elt = 0; elt<amountOfChange.length; elt++ ) {
        
        // recover the price;
        let price =  Number(amountOfChange[elt]);

        //Check if the element is a number otherwise it is assigned 0
        if (isNaN(price)) {
            price = 0;            
        }

        // Price calculation with coefficients
        newPrice = newPrice +  price * listOfCoefficients[elt];

   }

   if (itemPrice <= newPrice) {
        return console.log(true);
   }else{
    return  console.log(false); 
   }
}


// Run function
changeEnough(14.11, [2,100,0,0]);

changeEnough(0.75, [0,0,20,5]);