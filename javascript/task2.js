    // i/p:- <p><strong><em>Js Practices</em></strong></p>
    // o/p:- Js Practices 

 
    var myinput= "<div><h1>Hello World</h1> <p>It's me, Mario</p></div>";

    var myoutput = myinput.replace(/<[^>]+>/g, '');
    console.log(myoutput);


    var mystring = ' it\'s safe ';
    console.log(mystring);