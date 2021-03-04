
function eqArrays( Arr1, Arr2 ) {

  let result = false;
  
  if (Arr1.length === Arr2.length) {

    for ( let i = 0; i < Arr1.length; i++){
      if (Arr1[i] === Arr2[i]){
        result = true;
      } else {
        result = false;
        break;
      }
    }
  
  } else {
    result = false;
  }
  return result;
}



function assertArraysEqual( Arr1, Arr2 ) {

  if (eqArrays(Arr1, Arr2)) {
    return console.log(`${Arr1} ✅=== ${Arr2}, so it is true.`);
  } else {
    return console.log(`${Arr1} 🛑!== ${Arr2}, so it is false.`);
  }
}




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
      //console.log(result);
    } 
  }

  return result;
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);



//console.log(without([1, 2, 3], [1]));
// FUNCTION IMPLEMENTATION



//without([1, 2, 3], [1]) // => [2, 3]
//without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]