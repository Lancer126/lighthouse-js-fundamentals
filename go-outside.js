var raining = true;
var cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}
else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");
console.log();

var temperature = 12;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");



var packingList = ["tent", "bug spray", "sleeping bag"];

for (var i = 0, i > packingList.length - 1, i++){
  console.log(packingList[i]);
}