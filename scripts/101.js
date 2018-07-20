// Exercise 1:
var greet = function (name) {
    console.log(`Hello, ${name}!`);
};

greet('Moustache')

// Exercise 2:
var greet = function (name) {
    var alternate = 'World';
    if (name === undefined) {
        return `Hello, ${alternate}!`;
    }
    else {
        return `Hello, ${name}!`;
    };
};
    
console.log(greet());

// Exercise 3:
var madLib = function (name, subject) {
    return `${name}'s favorite subject is ${subject}.`;
};

console.log(madLib('Nat', 'programming'));

// Exercise 4:
var tipAmount = function (amount, service) {
    var tip;
    
    if (service === 'good') {
        tip = (amount * .2);
    }
    else if (service === 'fair') {
        tip = (amount * .15);
    }
    else if (service === 'poor') {
        tip = (amount * .1);
    };
    return tip;
};
    
// console.log(tipAmount(123, 'good'));

// Exercise 5:
var totalAmount = function (amount, service) {
    var tip = tipAmount(amount, service);
    var total = amount + tip;
    return total;
};

// console.log(totalAmount(200, 'poor'));

// Exercise 6:
var splitAmount = function (amount, service, people) {
    var total = totalAmount(amount, service);
    var price = Number.parseFloat(total / people).toFixed(2);
    var pricePerPerson = `$${price} per person`;
    return pricePerPerson;
};

var bill = 234;
var serviceQuality = 'fair';
var numPeople = 3;


console.log(splitAmount(bill, serviceQuality, numPeople));