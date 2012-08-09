
//Angela Koepplinger
//SDI: 1208
//August 09, 2012
//Project 2



//Boolean
var qtyPizzas = 2
var starving = true
var numberPizzas = function(qty, veryHungry) {
	var hunger=true;
	if (hunger===veryHungry) {
		console.log("I am starving, I think I will make " + qty + " pizzas!");
	} else {
		console.log("I am not overly hungry, I think I'll just make 1 pizza for now");
	}
	return starving;
}
var howManyPizzas = numberPizzas(qtyPizzas, starving)




//Procedure
var cookTemp= 375;
var pizzaTemp= function(setTemp) {
	var ovenTemp=375;
	if (ovenTemp === setTemp){
		console.log("Our oven has finished preheating, let's start adding our toppings!");
	} else {
		console.log("While our oven finishes preheating, let's work on adding our toppings to our pizza");
	};	
}
var preheatOven=pizzaTemp(cookTemp)




//Array
var toppings= ["cheese", "pepperoni", "olives", "peppers", "artichokes"],
	cupsOfToppings= [ 1, .5, .25, .25, .25];

var addToppings= function (numberPizzas, ingredients) {
	for (toppingsNumber = 0; toppingsNumber < toppings.length; toppingsNumber++){
		var whichTopping= ingredients[toppingsNumber]
		var measureToppings= cupsOfToppings[toppingsNumber]
		var toppingsTotal = numberPizzas * cupsOfToppings[toppingsNumber];
		console.log("I will add " + toppingsTotal + " cups of " + whichTopping + " to my pizzas!  " + toppingsTotal/numberPizzas  + " cups to each.");
	}

	return ingredients;
};

for (toppingsNumber = 0; toppingsNumber < toppings.length; toppingsNumber++){
		addToppings(qtyPizzas, toppings);
}

