const tail = function(inputArray) {
  let ouputTail = [];
  for (let i = 1; i < inputArray.length; i++) {
    ouputTail.push(inputArray[i]);
  }
  return ouputTail;
};

module.exports = tail;

