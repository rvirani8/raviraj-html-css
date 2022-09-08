// Write a function that compare of two objects and return true or false
// > There can be any type of data in object like array, string, boolean

const a = {
  fname: "raviraj",
  lname: "virani",
  fullname: function () {
    return this.fname;
  },
  abc: { a: 1, c: 3, b: 2},
  marks: [48,49,50],
  x: 10 > 5,
};
const b = {
  lname: "virani",
  fname: "raviraj",
  marks: [50,49,48],
  fullname: function () {
    return this.fname;
  },
  abc: { a: 1, b: 2, c: 3 },
  x: 10 > 1,
};

const equalobj = (a, b) => {
  const obj1 = Object.keys(a);
  const obj2 = Object.keys(b);

  if (obj1.length !== obj2.length) return false;

  for (var key of obj1) {
    const v1 = a[key];
    const v2 = b[key];

    const objs = isObject(v1) && isObject(v2);

    const result1 = Array.isArray(v1);
    const result2 = Array.isArray(v2);

    if(result1 && result2){
      const v11 = v1.sort(function(a, b){return a - b});
      const v12 = v2.sort(function(a, b){return a - b});
      for(var i=0; i<v11.length; i++){
        if(v11[i] != v12[i]){
          return false;
        }
      }
    }else if(!objs && typeof v1 === "function"){
      if(v1.toString() != v2.toString()){
        return false;
      }
    }else if(objs && !equalobj(v1,v2)){
      return false;
    }else if(!objs && v1 !== v2){
      return false;
    }
  }
  return true;
};

function isObject(o) {
  return o != null && typeof o === 'object';
}

console.log(equalobj(a, b));
