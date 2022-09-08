var n1 = 0;
var n2 = 1;
var n = 10;
var Fibonacci = "";

console.log(n1);
console.log(n2);
for (let i = 1; i < n - 2; i++) {
  n3 = n1 + n2;
  n1 = n2;
  n2 = n3;
  console.log(n3);
}
