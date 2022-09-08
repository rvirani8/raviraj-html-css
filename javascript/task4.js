        const country = ["Australia", "Germany", "United States of America"] ;
        var x = 0 ;
        let l=country.length
        for(let i=0;i<l;i++){
            if(x<country[i].length){
                x=country[i].length;
            }
        }
        for(let j=0 ; j<l ; j++){
            if(country[j].length == x){
                // document.write(country[j])
                console.log(country[j]);
            }
        }

        // const equals = (a, b) => {
        //     if (a === b) return true;
        //     if (a instanceof Date && b instanceof Date)
        //       return a.getTime() === b.getTime();
        //     if (!a || !b || (typeof a !== 'object' && typeof b !== 'object'))
        //       return a === b;
        //     if (a.prototype !== b.prototype) return false;
        //     const keys = Object.keys(a);
        //     if (keys.length !== Object.keys(b).length) return false;
        //     return keys.every(k => equals(a[k], b[k]));
        //   };
        
        //   console.log(equals(a, b));

//         Check if the two values are identical.
// Check if both values are Date objects with the same time, using Date.prototype.getTime().
// Check if both values are non-object values with an equivalent value (strict comparison).
// Check if only one value is null or undefined or if their prototypes differ.
// If none of the above conditions are met, use Object.keys() to check if both values have the same number of keys.
// Use Array.prototype.every() to check if every key in a exists in b and if they are equivalent by calling equals() recursively.