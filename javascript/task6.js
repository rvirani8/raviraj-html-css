// [{'fname': 'shivani','lname':'savani'},10, [15, 'aa', 'pqr'], 'zzz']
// Output : ['shivani','savani', 10, 15, 'aa', 'pqr', 'zzz']
// o/p 2:- ['shivani','savani', '10', '15', 'aa', 'pqr', 'zzz']

const myArray = [{'fname': 'shivani','lname':'savani'},10, [15, 'aa', 'pqr'], 'zzz'];

var text = [];

let arrayLength = myArray.length ;

for(let i=0;i<arrayLength;i++){
    if(typeof myArray[i] == "object"){
        text[i] =  Object.values(myArray[i]);
    }else{
        text[i] = myArray[i];
    }
}
console.log(text);
var result = text.concat.apply([],text);

console.log(result); // text= text.flate(); console.log(text);

for(let j=0 ;j<result.length ; j++){
    if(!result[j].isNaN){
        result[j] =  result[j].toString();
    }
}
console.log(result);

// for (let j = 0; j < text.length; j++) {
//     if(!text[j].isNaN){
//         text[j] =  text[j].toString();
//     }
// }