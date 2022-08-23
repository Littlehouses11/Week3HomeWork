let customerNames = [];
customerNames.push("Sammy Smith");
customerNames.push("John Smith");

for (let i = 0; i < customerNames.length; i++) {
    console.log(customerNames[i]);
}

for (name of customerNames) {
    console.log(name);
}

// Video two starts here
// Functions

function myFunction () {
    for (let i = 0; i < 100; i++) {
        console.log(i);
    }
}

myFunction();

function createFullName(firstName, lastName) {
    console.log(firstName + ' ' + lastName);
}

createFullName('Tom', 'Sawyer');

//Video three starts here
// intermediate array methods

// Map function
let names = ['Sam', 'Tom', 'Eric', 'Sally', 'Nicholas'];
let length = names.map(function(element){
    return  element.length;
});
console.log(length);
// each name is the elemnt in the function

// Reduce function
let sum = lengths.reduce(function(accumlator, currentValue){
    return accumlator + currentValue;
});
console.log(sum);

// For each function
names.forEach(function(element){
    console.log(element);
});

let evns= names.filter(function(element){
    return element.length % 2 == 0;
});
console.log(even);

//splice function 
//can be used to remove an element from an array

let reamovedElement = names.splice(1, 1);
console.log(reamovedElement);

//Video four starts here
// Objects

let dvdPlayer = {
    height: 3,
    width: 18,
    depth: 12,
    weight: 7,
    color: 'black',
    dvdName: 'Shrek',
    printDVDName: function(){
        console.log(this.dvdName);
    }
};

console.log(dvdPlayer.depth);
dvdPlayer.printDVDName();

//Video five starts here
// Equality vs identity
//both boolean operators
//better to use identity operator

console.log(2 == '2');//equality operator
console.log(2 === '2'); //identity operator
