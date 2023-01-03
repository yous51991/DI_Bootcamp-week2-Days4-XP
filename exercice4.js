
//Exercises XP

//Exercise 4 : Shopping List


const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 


// shoppingList Object
let shoppingList = {
    "banana": 1,
    "orange": 1,
    "apple": 1,
}

console.log(stock);

// Definition of myBill() function without parameter
/**
 * The function should return the total price of your shoppingList
 * @returns {String}
 */
function myBill(){

    let amount = 0;
    let result = ` `;
    for(let item in shoppingList)
    {
        amount += stock[item] * shoppingList[item];

        if(stock[item] > 0)
        {
            stock[item] -=  shoppingList[item]
            result += `${item} is available. ${item} cost : ${prices[item]} ; \n `
        }else
        {
            result += `${item} is unavailable; \n `
        }
    }

    return console.log(`${result} \n total cost : ${amount}`);
}


myBill();

console.log(stock);