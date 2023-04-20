function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
var pizza1 = pizzaOven("deep dish","traditional",["mozzarella"],["pepperoni", "sausage"]);
var pizza2 = pizzaOven("hand tossed","marinara",["mozzarella","feta"],["mushrooms", "olives","onions"]);
var pizza3 = pizzaOven("NY Style","marinara",["mozzarella","parmesan"],["basil"]);
var pizza4 = pizzaOven("square pan","BBQ",["mozzarella","cheddar"],["chicken", "green peppers","onions"]);


var doughOptions = ["deep dish","hand tossed","NY Style","square pan"];
var sauceOptions = ["traditional","marinara","BBQ"];
var cheeseOptions = ["mozzarella","parmesan","feta"];
var toppingOptions = ["pepperoni", "sausage","mushrooms", "olives","onions","basil","chicken", "green peppers","onions"];

var randomDough = doughOptions[Math.floor(Math.random() * doughOptions.length)]
var randomSauce = sauceOptions[Math.floor(Math.random() * sauceOptions.length)]
var randomCheese = cheeseOptions[Math.floor(Math.random() * cheeseOptions.length)]
var randomTopping = toppingOptions[Math.floor(Math.random() * toppingOptions.length)]

var pizzaRandom = pizzaOven(randomDough, randomSauce, randomCheese, randomTopping);
console.log(pizzaRandom);