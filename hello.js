var name = "Lancer";

function sayHello(name) {
  console.log("What's up "+name);
}

function returnSayHello(name) {
  return "Hello, " + name;
}

function isEven(num){
  return num % 2 == 0;
}

var greeting = returnSayHello('John');

sayHello(name);
sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");

console.log(greeting);

console.log(isEven(10));
console.log(isEven(11));