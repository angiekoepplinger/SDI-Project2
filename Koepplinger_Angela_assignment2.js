
//Angela Koepplinger
//SDI: 1208
//August 09, 2012
//Project 2: Let's Make Pizza!


//
var qtyPizzas = 2;
var starving = true;
var typeCrust = "thin";
var	prepOven = "preheat";
var cookTemp = 375;
var toppings= ["cheese", "pepperoni", "olives", "peppers", "artichokes"];
var	cupsOfToppings= [ 1, .5, .25, .25, .25];
var bakeTime = 15;

//Boolean
var numberPizzas = function(qty, veryHungry) {
	var hunger=true;
	if (hunger === veryHungry) {
		console.log("I am starving, I think I will make " + qty + " pizzas today!");
		return true;
	} else {
		console.log("I am not overly hungry, I think I'll just make 1 pizza for now");
		return false;
	}
};
var howManyPizzas = numberPizzas(qtyPizzas, starving)


//String
var crustReady = function(crustType, startOven, ovenTemp){
	var crustType = "thin";
	var prepared = true;
	if(crustType === typeCrust && prepared === true) {
		console.log("My " + typeCrust + " pizza crust is ready to bake, let's " + startOven + " the oven to " + ovenTemp + " degrees now.");
	} else {
		console.log("Let me finish preparing my " + crustType + " pizza crust and then I will " + startOven + " the oven to " + ovenTemp + ".");
	}
	return crustType;
};
var readyToPreheat = crustReady(typeCrust, prepOven, cookTemp)


//Procedure
var pizzaTemp = function(setTemp) {
	var ovenTemp =375;
	if (ovenTemp === setTemp){
		console.log("Our oven has finished preheating, let's start adding our toppings!");
	} else {
		console.log("While our oven finishes preheating, let's work on adding our toppings to our pizza");
	}	
};
var preheatOven = pizzaTemp(cookTemp)


//Array
var addToppings = function (numberPizzas, ingredients) {
	for (toppingsNumber = 0; toppingsNumber < toppings.length; toppingsNumber++){
		var whichTopping = ingredients[toppingsNumber]
		var measureToppings = cupsOfToppings[toppingsNumber]
		var toppingsTotal = numberPizzas * cupsOfToppings[toppingsNumber];
		console.log("I will add " + toppingsTotal + " cups of " + whichTopping + " to my pizzas!  " + toppingsTotal/numberPizzas  + " cups to each.");
	}

	return ingredients;
};

for (toppingsNumber = 0; toppingsNumber < toppings.length; toppingsNumber++){
		addToppings(qtyPizzas, toppings);
}


//Number
var cookTime = function(minutesCook) {
	var minutesRemain = (minutesCook - 0);
	var checkPizza = 5;
		while (minutesCook > 0) {
			console.log( "Pizza is not done yet, it has " + minutesCook + " minutes left. I will check back in " + checkPizza + " minutes.");
			minutesCook -= 5;
	};
		console.log("Pizza is finished, I can't wait to try it!");

	return minutesCook;
};	
var cookPizza = cookTime(bakeTime);












