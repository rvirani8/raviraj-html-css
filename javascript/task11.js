// make a function that returns a new object without provided properties
// Object: { a: 1, b: 2, c: 3 }
// I/p: b
// Output: { a: 1, c: 3 }

const obj = { a: 1, b: 2, c: 3 };

// delete obj.b;

Object.defineProperty(obj, "c", {enumerable:false});

console.log(obj);

