const person = {
    firstName: "John",
    lastName: "Doe",
    language: "EN"
}
console.log(Object.isExtensible(person));

let a = Object.preventExtensions(person);

console.log(person == a);

console.log(Object.isExtensible(person));

let z = Object.defineProperty(person, "nationality", {value  : "indian"});



// person.firstName = "Raviraj";
// person.surName = "virani";
// delete person.lastName;

// o = Object.seal(person);

// person.firstName = "Ravi";

// person.firstName1 = "bar";
// delete person.surName;

// console.log(person);
// console.log(Object.isSealed(person));



// person.firstName = "Raviraj";
// person.value = 5;
// delete person.lastName;

// o = Object.freeze(person);

// person.firstName = "bar1";

// person.firstName1 = "bar";
// delete person.value;

// console.log(person);
// console.log(Object.isFrozen(person));
