//Exercises XP

//Exercise 6 : Vacations Costs




function hotelCost(){
    
    const hot = 140;
    let numberOfNights = undefined;

    do {
         numberOfNights = prompt('Number of nights : ');
    } while (isNaN(numberOfNights));

    return console.log(`\n The hotel cost : ${Number(numberOfNights) * hot} \n`);
}



function planeRideCost(){

    let destinations = {"London": 183, "Paris":220}
    let destination = undefined;
    let checker = true;

    do {
        destination = prompt('Your destination: ');
        let removeSpace = destination.trim();

        if(removeSpace.length > 0 && isNaN(removeSpace)){
            checker = false;
        }
    } while (checker);

    if (destinations[destination]) {
        return console.log(`\n the hotel cost: ${destinations[destination]}$ \n`);
    } else {
        return console.log(`\n The plane tickets cost : ${destination}$ \n`);
    }

}



function rentalCarCost(){

    const hot = 40;
    let numberOfDays = undefined;
    let result = 0;

    do {
        numberOfDays = prompt('Number of days : ');
    } while (isNaN(numberOfDays));

    result = numberOfDays * hot;
    if (numberOfDays > 10) {
        result -= result * 0.05;
    }

    return console.log(`\n The car cost : ${result}$ \n`);
}



function totalVacationCost(){
    hotelCost();
    planeRideCost();
    rentalCarCost();
}

totalVacationCost()