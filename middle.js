
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


function middle(newArr) {
  const lengthArr = newArr.length;
  const middleNum = Math.floor(lengthArr / 2) ;
  let middleArr = [];

  if ((lengthArr >= 3) && (lengthArr % 2 === 1)) {

    middleArr.push(newArr[middleNum]);
    

  } else if ((lengthArr >= 3) && (lengthArr % 2 === 0)) {

    middleArr.push(newArr[middleNum-1]);
    middleArr.push(newArr[middleNum]);
    

  } 

  //return console.log(middleArr);
  return middleArr;

}

// middle([1]) // => []
// middle([1, 2]) // => []
// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]
// middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]);