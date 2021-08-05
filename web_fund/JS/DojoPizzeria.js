//Main Function
function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {}; //pizza object
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses; 
    pizza.toppings = toppings;
    return pizza;
}

//Pre-made Pizza
var freshPizza = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(freshPizza);

var freshPizza = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(freshPizza);

var crustType = ["deep dish", "hand tossed", "thin crust"];
var sauceType = ["traditional", "marinara", "ranch"];
var cheeses = [["mozzarella"],["mozzarella", "feta"],"Mexican Cheese", "provalone"];
var toppings = [["mushrooms", "olives", "onions"],["pepperoni", "sausage"],"pepperoni"];


// Random Pizza
var freshPizza = pizzaOven(
    crustType[Math.floor(Math.random()*crustType.length)]
    ,sauceType[Math.floor(Math.random()*sauceType.length)]
    ,cheeses[Math.floor(Math.random()*cheeses.length)]
    ,toppings[Math.floor(Math.random()*toppings.length)]
);

console.log(freshPizza);
console.log(freshPizza);
console.log(freshPizza);