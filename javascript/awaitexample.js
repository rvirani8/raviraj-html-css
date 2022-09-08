async function test() {
    console.log("Inside function");
    const result = await fetch("https://dummyjson.com/products?limit=10");
    console.log("before get data");
    const data = await result.json();
    console.log("Resolved");
    return data;
}
console.log("Start");
let productData = test();
console.log(productData);
productData.then(data => console.log(data));
console.log("end");