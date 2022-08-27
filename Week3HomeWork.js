//1 Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];


/* a. Programmatically subtract the value of the first element in the array
 from the value in the last element of the array (do not use numbers to
 reference the last element, find it programmatically, ages[7] – ages[0] is not allowed).
 Print the result to the console*/

 console.log(" Difference between first and last numbers in array is: " , ages[ages.length-1] - ages[0]);


// b. Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths)

ages.push(25);//this is the new element i wanted to push at the end of the ages array
console.log("Difference between first and last numbers in the array after pushing 25 : ",ages[ages.length-1] - ages[0]);

// c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console

var i, sum=0;

for(i=0; i<ages.length; i++){
sum = sum + ages[i];
}

console.log("Average age: ",sum/ages.length);


//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

/*a.Use a loop to iterate through the array and calculate the average number 
of letters per name. Print the result to the console.*/

sum=0;

for(i=0; i<names.length; i++){
sum = sum + names[i].length;
}

console.log("Average letters per name: ",sum/names.length);

/*b.Use a loop to iterate through the array again and concatenate all the names together,
separated by spaces, and print the result to the console*/

 var con= names[0];

for(i=1; i<names.length; i++){
con = con.concat(" ",names[i]);
}

console.log("Concatenated names: ",con);

//3.How do you access the last element of any array?
 //Answer: the syntax 'array.length-1' will let you acces the last element of an array.

//4.How do you access the first element of any array?
 //Answer: the syntax 'array[0]' will let you acces the first element of an array.

/*5.Create a new array called nameLengths. Write a loop to iterate over the previously
  created names array and add the length of each name to the nameLengths array.*/

  var nameLengths = [];

for(i=0; i<names.length; i++){
nameLengths[i] = names[i].length;
}

/*6.Write a loop to iterate over the nameLengths array and calculate the sum of all
 the elements in the array. Print the result to the console.*/

sum=0;

for(i=0; i<nameLengths.length; i++){
sum = sum + nameLengths[i];
}

console.log("Sum of all elements: ",sum);

/*7.Write a function that takes two parameters, word and n, as arguments and
returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’
and 3, I would expect the function to return ‘HelloHelloHello’).*/
 console.log("hey".repeat(3));
 
/*8.Write a function that takes two parameters, firstName and lastName, 
and returns a full name (the full name should be the first and the last name separated by a space).*/

function fullName(firstName, lastName){
return firstName.concat(" ", lastName);
}

console.log("Full Name: ",fullName("Hector", "Casillas"));

/*9.Write a function that takes an array of numbers and returns true 
if the sum of all the numbers in the array is greater than 100.*/

function totalGreaterThan100(arr){
sum=0;
for(i=0; i<arr.length; i++){
sum = sum + arr[i];
}
if(sum > 100){
return true;
}else{
return false;
}
}



//10.Write a function that takes an array of numbers and returns the average of all the elements in the array.

function average(arr){
sum=0;
for(i=0; i<arr.length; i++){
sum = sum + arr[i];}
return (sum/arr.length);
}

/*11.	Write a function that takes two arrays of numbers and returns true if the average of
 the elements in the first array is greater than the average of the elements in the second array.*/

function compare_average(arr1, arr2){
if(average(arr1) > average(arr2)){
return true;}else{
return false;}
}


//Declaring and initializing two new array

var myArr = [10, 20, 30, 40, 50]
var myArr2 = [20, 30, 10]
console.log("Is the total sum of all the elements is greater than 100 ? : ",totalGreaterThan100(myArr));
console.log("Average of all the elements in the array is : ",average(myArr));
console.log("Is the average of the first array is greater than the average of the second array ? : ",compare_average(myArr, myArr2));
console.log("\n\n\n");

/*12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket,
 and returns true if it is hot outside and if moneyInPocket is greater than 10.50.*/

function willBuyDrink(isHotOutside, moneyInPocket){
if((isHotOutside) && (moneyInPocket > 10.50)){
return true;}else{return false;}
}

//Value initialization

var hotOutside = true;
var moneyInthePocket = 30.5;

//Printing the return value of willBuyDrink function

console.log("Drink can be buy : ",willBuyDrink(hotOutside, moneyInthePocket));

/*13.	Create a function of your own that solves a problem. In comments, write what
 the function does and why you created it.*/

function alertMe(){
    alert("You have been warned...");
}
//made a function that will alert me that I have been Warned.
    setTimeout(alertMe, 2000);
    //Set a timer with 'setTimeout' to warn me after two seconds of refreshing the page.