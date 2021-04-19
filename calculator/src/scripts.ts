import Addition from "./add"

let a;
console.log(" Hello World");

// Addition Function..

// function Adds() :string{
// return "hello"

// }

// This is an arrow function : Declaration a function
// The type after the () is for the type of the return statement .
const Add = (a: number, b: number): string => {
  return `${a}+${b} = ${a + b}`;
};

// Call a function.
console.log(Add(2, 3));

// Referencing our html elements
let inputOne = document.querySelector(".input-one") as HTMLInputElement;
let inputTwo = document.querySelector(".input-two") as HTMLInputElement;
let Button = document.querySelector(".btn-add") as HTMLButtonElement;
let Answer = document.querySelector(".answer") as HTMLHeadingElement;

console.log(typeof inputOne.value);



Button.onclick = Addition