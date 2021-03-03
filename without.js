
function without( Arr1, Arr2 ) {

  let removeArr = Arr2;
  let result = Arr1;

  if( Arr1.length !== Arr2.length) {
    
    removeArr = [];

    for ( let i = 0; i < Arr1.length; i++) {
      for ( let j = 0; j < Arr2.length; j++) {
        if ( Arr1[i] === Arr2[j] ) {
          removeArr.push(Arr1[i]); 
        } 
      }
    }
  }

  for ( let i = 0; i < Arr1.length; i++){
    if (Arr1[i] === removeArr[i]){
      result.splice(i,1);
      console.log(result);
    } 
  }
}

// FUNCTION IMPLEMENTATION


without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]