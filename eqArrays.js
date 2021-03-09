const assertEqual = require('./assertEqual');

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

module.exports = eqArrays;
