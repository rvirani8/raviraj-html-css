    //  make a function
    //     i/p:- 'cat'
    //     o/p:- c,ca,cat,a,at,t 
   
        const x = "cat";
        let l = x.length;
        // console.log(l);
        for(var i=0; i<l ; i++){
            for(var j=i+1 ;j<l+1 ;j++){
                var z = x.slice(i,j); 
                // document.write(z + ",");
                console.log(z);
            }
        }   