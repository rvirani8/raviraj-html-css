// const person = {
//     firstName : "raviraj",
//     lastName : "virani",
//     language : "EN",
//     get lang(){
//         return  this.language;
//     }
// }

// console.log(person.lang);

const person = {
    firstName : "raviraj",
    lastName : "virani",
    language : "",
    set lang(lang){
        this.language = lang;
    }
}

person.lang = "en";
console.log((person.language).toUpperCase());