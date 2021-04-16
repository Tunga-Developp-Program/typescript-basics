
// we use let or const instead of var for declaration of variables

console.log("Somthing is happening")
// Types : INBUILT TYPES BY TS.

//type string.
let myName:string = "Eric";

//type boolean.
let truthy:boolean ; // declaring a variable and not assigned it

// type number...
let num :number;

// number array...
let myNumArray:number[];
myNumArray = [1,3,6]

// string array..
let myStringArray:string[]= ["hello", "hhh"]

//boolean array ..
let myBooleanArray:boolean[]=[true, false]

// object array ..
let myObjArray:object[]=[{eric:"eric"}, [1,2,2]]

// type object
let myObj:object ={
    name:"Eric",
    age:30,
}

// object literals ...  key pair values ...


let myDic:{id:number; book_name:string; isbn:number} = {
    id:2,
    book_name:"KingMans",
    isbn: 9088
}


// type unions
let myId:string | number |boolean = "122334";
myId = 144555;

// type alias
type StringNumber = string | number |boolean;

let myUniqueId :StringNumber = true;
myUniqueId = 12345;

// type alias for object literals
type UserType  = {
    id:number;
    name:string;
    password:string
}

const User1:UserType = {
    id:1,
    name:"John",
    password:"Password123"
}

// anohter way of making type alias for object literals INTERFACE .
// Interface ....

interface IBook  {
name:string;
id:number|string;
isbn : number;
author: string;
date_recovered ?:string;

}

const BookOne :IBook = {
name:"Romeo",
id:5050,
isbn: 8386776,
author:"John Doe"
}