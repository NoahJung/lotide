
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

assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual([1,2,3],[1,2,"3"]);

  
/*
  let result = false;
  
  if (Arr1.length === Arr2.length) {

    for ( let i = 0; i < Arr1.length; i++){
      if (Arr1[i] === Arr2[i]){
        result = true;
        console.log(`index ${i} : ${Arr1[i]} ✅=== ${Arr2[i]}, so it is true.`);
      } else {
        result = false;
        console.log(`index ${i} : ${Arr1[i]} 🛑!== ${Arr2[i]}, so it is false.`);
        break;
      }
    }
  
  } else {
    result = false;
    console.log(`The length of arrays are not equal. So it is false.`)
  }
  return result;
  */


