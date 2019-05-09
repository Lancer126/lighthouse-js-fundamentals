var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

console.log("While loop:")
var j = 0;
while (j < ingredients.length){
  console.log(ingredients[j]);
  j++
}

console.log();
console.log("For loop:");
for (var k = 0; k < ingredients.length; k++) {
  console.log(ingredients[k]);
}

console.log();
console.log("For loop reverse:")
for (var i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}