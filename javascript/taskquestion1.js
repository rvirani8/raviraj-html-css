// indian time to Los_angeles time

const date = new Date();

 console.log(date);

 const laDate = date.toLocaleString('en-US', {
    timeZone : 'America/Los_Angeles'
 });  
 console.log(laDate);

 let text = "/js/js_string_methods";

 let first = text.slice(1,3);
 let second = text.slice(4);

 console.log(first);
 console.log(second);