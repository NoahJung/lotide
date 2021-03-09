// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};


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


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  let printResult = false;

  const keyObj1 = Object.keys(object1);
  const keyObj2 = Object.keys(object2);

  if (keyObj1.length === keyObj2.length) {

    for (const item in object1) {
      //console.log(typeof object1[item]);
      if ((typeof object1[item] === 'object') && (eqArrays(object1[item], object2[item]) === true)) {
        printResult = true;
      } else if ((typeof object1[item] !== 'object') && (object1[item] === object2[item])) {
        printResult =  true;
      } else {
        printResult =  false;
      }
    }
    
  } else {
    printResult = false;
  }

  return printResult;
  
};

module.exports = eqObjects;

//TEST
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false

// assertEqual(eqObjects(cd, dc), true);
// assertEqual(eqObjects(cd, cd2), false);