
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

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
 // console.log(`Example label: ${inspect(object1)}`);

  if (eqObjects(object1, object2)) {
    return console.log(`${inspect(object1)} ✅=== ${inspect(object2)}, so it is true.`);
  } else {
    return console.log(`${inspect(object1)} 🛑!== ${inspect(object2)}, so it is false.`);
  }
};


//TEST
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);
