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

module.exports = middle;


