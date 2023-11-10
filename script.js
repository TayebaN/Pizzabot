// här försökte jag att skapa en knapp (MENU ) för att när man trycker den,
// då visar den popup alert boxen till menyn.
// Men tyvär det var väldigt förvirande så släpte den.

import { vegetarian, hawaiian, pepperoni, pizzaPrice } from "./pizzabot1.js";

document.getElementById("orderButton").addEventListener("click", function () {
  const greeting = alert(
    "Hey! Happy to serve your pizza. On our menu we have Vegetarian, Hawaiian and Pepperoni"
  );
});
