"use strict";

// function showMessage() {
//   console.log("This is a function declaration");
// }

// var message = "This is Peter"; //global scope

// function showMessage() {
//   let message = "hello world"; //local variable
//   console.log(message);
// }

// showMessage();

// var userName = "John";

// function showMessage() {
// //   let userName = "Peter";
//   let message = "Hello, " + userName;
//   console.log(message);
// }

// console.log(userName);

// showMessage();

// console.log(userName);

// function showMessage(name, text = anotherFunction(name)) {
//   let message = `hello, ${name}`;
//   console.log(text);
//   console.log(message);
// }

// function anotherFunction(name) {
//   console.log(`for ${name} love`);
// }

// // showMessage("Dennis", anotherFunction("peter"));

// function name(params) {

// }

// callback function

function callmeBack(name, cb) {
  console.log(`Hello ${name}`);
  cb();
}

// function cb(age) {
//   console.log(`I am ${age} year old`);
// }

callmeBack("Dennis", function () {
  console.log("Thiss is an anonymous function");
});
