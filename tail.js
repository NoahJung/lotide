// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(inputArray) {
  let ouputTail = [];
  for (let i = 1; i < inputArray.length; i++) {
    ouputTail.push(inputArray[i]);
  }
  return ouputTail;
};

// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
//assertEqual(result, ["Lighthouse", "Labs"]); // it returns failed
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case : Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test case : empty or has only one element in the Array
const empty = [];
const oneE = ["hello"];
console.log(tail(empty));
console.log(tail(oneE));