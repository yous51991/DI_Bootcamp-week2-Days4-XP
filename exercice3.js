//Week 2 - Day 4
//Exercises XP

// Exercise 3 : Find The Numbers Divisible By 23



function isDivisible(){

    let som = 0;
    let Resultat = 'Resultat : ';

    // loop through numbers 0 to 500.
    for (let number = 0; number <= 500; number++) {
        
        // Check if number is divisible by 23 
        if (number % 23 == 0) {
            som += number;
            Resultat= Resultat + " " + number + " ";
        }
        
    }

    //  all the numbers divisible by 23.
    console.log(` ${Resultat} \n`);

    // the sum of all numbers that are divisible by 23
    console.log(`Sum : ${som}`);
}

// run function
isDivisible();



function isDivisible2(divider){

    if(isNaN(divider))
    {
        return console.log("Please enter a number");
    }
    let som = 0;
    let Resultat = 'Resultat : ';

    // loop through numbers 0 to 500.
    for (let number = 0; number <= 500; number++) {
        
        // Check if number is divisible by 23 
        if (number % divider == 0) {
            som += number;
            Resultat = Resultat + " " + number + " ";
        }
        
    }

    //  all the numbers divisible by 23.
    console.log(` ${Resultat} \n`);

    // the sum of all numbers that are divisible by 23
    console.log(`Sum : ${som}`);
}



//run function with 3 in parameter
isDivisible2(3);

//run function with 45 in parameter
isDivisible2(45);