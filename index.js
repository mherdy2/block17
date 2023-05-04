// Create a file named index.js and import the coffee_data.js file into it using the require syntax. Steps 3-8 will be done in index.js.
const coffeeMenu = require("./coffee_data");

// 3. Print an array of all the drinks on the menu.
let names = coffeeMenu.map((item) => item.name);
console.log(names);

// 4. Print an array of drinks that cost 5 and under.
const cheapDrinks = coffeeMenu.filter((drink) => drink.price <= 5);
console.log(cheapDrinks);

//5. Print an array of drinks that are prices at an even number
// Filter the drinks with even prices
const evenPricedDrinks = coffeeMenu.filter((drink) => drink.price % 2 === 0);
console.log(
  "Even-Priced Drinks: " + evenPricedDrinks.map((drink) => drink.name)
);

//6. Print the total if you were to order one of every drink
// Calculate the total cost
const totalCost = coffeeMenu.reduce((acc, curr) => {
  return acc + curr.price;
}, 0);
console.log(totalCost);

// 7. Print an array with all the drinks that are seasonal.
// Filter the seasonal drinks
const seasonalDrinks = coffeeMenu.filter((drink) => drink.seasonal);
console.log(seasonalDrinks.map((drink) => drink.name));

// 8. Print all the seasonal drinks with the words "with imported beans" after the item name.
const seasonalDrinksWithBeans = coffeeMenu
  .filter((drink) => drink.seasonal)
  .map((drink) => `${drink.name} with imported beans`);
console.log(seasonalDrinksWithBeans);
