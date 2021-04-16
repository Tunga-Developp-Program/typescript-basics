var a;
console.log(" Hello World");
// Addition Function..
// function Adds() :string{
// return "hello"
// }
// This is an arrow function : Declaration a function
// The type after the () is for the type of the return statement .
var Add = function (a, b) {
    return a + "+" + b + " = " + (a + b);
};
// Call a function.
console.log(Add(2, 3));
// Referencing our html elements
var inputOne = document.querySelector(".input-one");
var inputTwo = document.querySelector(".input-two");
var Button = document.querySelector(".btn-add");
var Answer = document.querySelector(".answer");
console.log(typeof inputOne.value);
var Addition = function () {
    var answer = parseInt(inputTwo.value) + parseInt(inputOne.value);
    Answer.innerText = answer.toString();
};
Button.onclick = Addition;
