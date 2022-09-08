        const color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]; 
        const o = ["th","st","nd","rd"];

        let l = color.length ;
        for (var x=0 ; x<l ; x++ ){
            if(x<3){
                var z = (x+1) + o[x+1] + " choice is " + color[x] ;
                console.log(z);
                // document.write(z + "<br>");
            }
            if(x>=3){
                var z = (x+1) + o[0] + " choice is " + color[x] ;
                console.log(z);
                // document.write(z + "<br>");
            }
        }
  