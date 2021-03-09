const eqArrays = require('./eqArrays');


function assertArraysEqual( Arr1, Arr2 ) {

  if (eqArrays(Arr1, Arr2)) {
    return console.log(`${Arr1} ✅=== ${Arr2}, so it is true.`);
  } else {
    return console.log(`${Arr1} 🛑!== ${Arr2}, so it is false.`);
  }
}

module.exports = assertArraysEqual;

// assertArraysEqual([1,2,3],[1,2,3]);
// assertArraysEqual([1,2,3],[1,2,"3"]);


