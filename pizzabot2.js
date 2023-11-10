// först försökte jag att använda "while(true)" ,
// men condition "if-satsen" för "cooking time" funkar inte.

const PizzaName = ["Vegetarian Pizza", "Hawaiian Pizza", "Pepperoni Pizza"];
alert("Hey! Happy to serve your pizza. On our menu we have X, Y and Z");

while (true) {
  let pizzaTypeOrderd = prompt(
    "Enter the name of the pizza you want to order today.\n For Vegetarian Pizza enter 0 \n Hawaiian Pizza enter 1 \n Pepperoni Pizza enter 2"
  );
  pizzaTypeOrderd = parseInt(pizzaTypeOrderd);
  if (pizzaTypeOrderd === 0 || pizzaTypeOrderd === 1 || pizzaTypeOrderd === 2) {
    break;
  }
  alert("It's not on the menu. Try Again!");
}

const Quantity = prompt("enter the number of Pizza?");
const orderPrice = Quantity * 80;

let cookingTime;
if (Quantity <= 2) {
  cookingTime = 10;
} else if (Quantity > 2 && Quantity <= 5) {
  cookingTime = 15;
} else {
  cookingTime = 20;
}

alert(
  "you have chosen" +
    PizzaName[pizzaTypeOrderd] +
    "\n number of pizza " +
    Quantity +
    "\n price" +
    orderPrice +
    "\n cooking time = " +
    cookingTime +
    "min"
);
