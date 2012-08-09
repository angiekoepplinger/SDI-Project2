
//Angela Koepplinger
//SDI: 1208
//August 09, 2012
//Project 2


//Procedure
var cookTemp= 375;

var pizzaTemp= function(setTemp) {
	var ovenTemp=375;
	if (ovenTemp===(setTemp)){
		console.log("Our oven is preheated, and we're ready to cook");
	} else {
		console.log("Our oven is still preheating, so lets work on adding our toppings");
	};	
}
var preheatTemp=pizzaTemp(cookTemp)




/*
var toppings= ["cheese", "pepperoni", "olives", "peppers", "artichokes"],
	cupsOfToppings= [ 1, .5, .25, .25, .25];

var addToppings= function (numberPizzas, ingredients) {
	for (toppingsNumber = 0; toppingsNumber < toppings.length; toppingsNumber++){
		var whichTopping= ingredients[toppingsNumber]
		var measureToppings= cupsOfToppings[toppingsNumber]
		var toppingsTotal = numberPizzas * cupsOfToppings[toppingsNumber];
		console.log("I will add " + toppingsTotal + " cups of " + whichTopping + " to my pizza!");
	}

	return ingredients;
};

for (toppingsNumber = 0; toppingsNumber < toppings.length; toppingsNumber++){
		addToppings(3, toppings);
*/

