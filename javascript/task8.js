// [34,7,23,32,{5, 62}, [13 , 2, 25]]

const myArray = [34, 7, 23, 32, { "abc": 5, 1: 62 }, [13, 2, 25]];
const myArray1 = { "abc": 5, 1: 62 };
let a =  "abc";
myArray1[a]
var text = [];
let arrayLength = myArray.length;

for (let i = 0; i < arrayLength; i++) {
  if (typeof myArray[i] == "object") {
    text[i] = Object.values(myArray[i]);
  } else {
    text[i] = myArray[i];
  }
}

// console.log(text);
var result = text.concat.apply([], text);
// console.log(result);
console.log(
  result.sort(function (a, b) {
    return a - b;
  })
);
