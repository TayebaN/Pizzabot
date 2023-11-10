const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";
let cookingTime = "";

const pizzaPrice = 80;

var greeting = alert(
  "Hey! Happy to serve your pizza. On our menu we have Vegetarian, Hawaiian and Pepperoni"
);

orderName = prompt("Enter the name of the pizza you want to order today.");

if (
  orderName === vegetarian ||
  orderName === hawaiian ||
  orderName === pepperoni
) {
  const howMany = prompt(`How many of ${orderName} do you want?`);

  let cookingTime;

  if (howMany <= 2) {
    cookingTime = 10;
  } else if (howMany <= 5) {
    cooking_time = 15;
  } else {
    cookingTime = 20;
  }

  const orderTotal = howMany * pizzaPrice;

  const getOrder = alert(
    `Great, I'll get started on your ${orderName}  right away, It will take approximately ${cookingTime} minutes to cook, and it will cost ${orderTotal}kr`
  );
} else {
  alert("It's not on the menu");
}
