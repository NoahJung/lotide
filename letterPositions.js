
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

const letterPositions = function(sentence) {
  const results = {};

  for (const item of sentence) {
    results[item] = []; 
  }
  delete results[" "];

  const resultItem = Object.keys(results);
  

  for ( let i=0; i < sentence.length; i++) {
    for ( let j=0; j < resultItem.length; j++) {
      if (sentence[i] === resultItem[j]) {
        results[resultItem[j]].push(i);
      }
      
    }
  }
  //console.log(results);
  return results;
};


//TEST 
console.log(letterPositions("hello"));
console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);