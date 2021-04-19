"use strict";
let a;
console.log(" Hello World");
// Addition Function..
// function Adds() :string{
// return "hello"
// }
// This is an arrow function : Declaration a function
// The type after the () is for the type of the return statement .
const Add = (a, b) => {
    return `${a}+${b} = ${a + b}`;
};
// Call a function.
console.log(Add(2, 3));
// Referencing our html elements
let inputOne = document.querySelector(".input-one");
let inputTwo = document.querySelector(".input-two");
let Button = document.querySelector(".btn-add");
let Answer = document.querySelector(".answer");
console.log(typeof inputOne.value);
const Addition = () => {
    let answer = parseInt(inputTwo.value) + parseInt(inputOne.value);
    Answer.innerText = answer.toString();
    console.log(Answer);
};
Button.onclick = Addition;
