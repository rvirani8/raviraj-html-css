const person = {
    firstName: "John",
    lastName: "Doe",
    language: "EN"
  }

let obj = Object.create(person);

console.log(obj.firstName);

Object.defineProperties(person,{
    lastName : {
        value : true,
        writable : true, 
        enumerable : false,
    },
    language :{
        value  : "hello",
        writable : false ,
    }
});
console.log(person);

let x = Object.getOwnPropertyDescriptor(person, "lastName");

console.log(x);

let y =  Object.getOwnPropertyNames(person);

console.log(y);

let z = Object.getPrototypeOf(person);

console.log(z);

let a = Object.keys(person);

console.log(a);

