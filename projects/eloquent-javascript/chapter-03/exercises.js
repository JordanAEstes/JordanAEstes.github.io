////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(firstNum, secondNum) {
  if (firstNum  <  secondNum){
    return firstNum;
  } else {
    return secondNum;
  }

}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(numVal) {
//using if else calls find if a number is even or odd.
if (numVal === 0){
  return true;
} else if (numVal === 1){
  return false;
} else {
  if (numVal > 0){
      return isEven(numVal - 2);
  } else {
      return isEven(numVal + 2);
  }

}
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(stringVal, charVal) {
  var charCount = 0
  for(var i = 0; i < stringVal.length - 1; i++){
    //check each character and see if it matches the value in charVal
    if (stringVal[i] === charVal){
      charCount++;
    }
  }
  return charCount;
}


////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(stringVal) {
//use for loop to iterate over length of stringVal
  var bCount = 0
  for(var i = 0; i < stringVal.length - 1; i++){
    //check each character and see if it is 'B'
    if (stringVal[i] === 'B'){
      bCount++;
    }
  }
  return bCount;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
