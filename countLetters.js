// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  
  const result = {};

  for (const item of sentence) {
    
    if (result[item]) {
      result[item] += 1;
    } else {
      result[item] = 1;
    }
    
  }

  delete result[" "];

  return result;
}

//TEST
console.log(countLetters("lighthouse in the house"));