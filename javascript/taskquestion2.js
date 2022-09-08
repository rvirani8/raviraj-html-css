var Obj1 = [
  {
    fname: "raviraj",
    lname: "virani",
    company_name: "IW",
  },
  {
    fname: "raviraj",
    lname: "patel",
    company_name: "XY",
  },
  {
    fname: "suraj",
    lname: "virani",
    company_name: "NS",
  },
  {
    fname: "ravi",
    lname: "patel",
    company_name: "IW",
  },
];

for(var i=0 ; i<Obj1.length ; i++){
    if(Obj1[i].fname == "raviraj" ){
        console.log(Obj1[i]);
    }
}

var array1 = ["abc","def"];
var array2 = ["ghi","abc"];
var array3 = [...new Set([...array1,...array2])];
var array4 = array1.concat(array2)

console.log(array3);
console.log(array4);
