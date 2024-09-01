//function declaration define a reusable block of code that performs a specific task

// function hello() {
//   console.log("hello");
// }

//function expression a way to define function as value or vriableconsr
// const hello = function () {
//   console.log("hello");
// };
// hello();

// function hello() {
//   console.log("hello");
// }
// setTimeout(function () {
//   console.log("Hello");
// }, 3000);
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const squares = numbers.map(function (element) {
//   return Math.pow(element, 2);
// });
// const evenNums = numbers.filter(function (element) {
//   return element % 2 === 0;
// });
// const oddNums = number.filter(function (element) {
//   return element % 2 !== 0;
// });

// const cubes = numbers.map(function (element) {
//   return Math.pow(element, 3);
// });
// const total = numbers.reduce(function(accumulator, element))
// console.log(oddNums);
//arrow function is a concise way to write function expression good for simple function

// const hello=function(){
//     console.log('Hello')

// }

// hello();

// const hello = (name, age) => {
//   console.log(`Hello ${name}`);
//   console.log(`You are ${age}Years old`);
// };
// hello("Bro, 25");
// const hello = (name, age) => {
//   console.log(`Hello ${name}`);
//   console.log(`You are ${age} years old`);
// };

// hello("Bro", 25);

// setTimeout(function () {
//   console.log("Hello");
// }, 3000);

// Arrow function
const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(cubes);
console.log(squares);
console.log(evenNums);
console.log(oddNums);
console.log(total);
