
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(numOfIterations) {
  var textStr = "#";
  for(var i = 0; i < numOfIterations; i++){
    console.log(textStr);
    textStr += "#";
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
    for (var i = 1; i <= 15; i++){
        //check if number is a multiple of three and five
        if(i % 3 === 0 && i % 5 === 0){
            //console log FizzBuzz.
            console.log("fizzbuzz");
            //check if just a multiple of 3
        } else if (i % 3 === 0 && i % 5 !== 0){
            //console log Fizz
            console.log("fizz");
            //check if the number is a multiple of only 5
        } else if (i % 5 === 0 && i % 3 !== 0){
            //console log Buzz
            console.log("buzz");
            //if it is neither a muliple of three or five print the number
        } else {
            console.log(i)
        }
    }

}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(gridVal) {
// create a string that represents an 8 x 8 grid using newline charcters to seperate lines.
var gridStr = "";
  for (var i = 0; i < gridVal; i++){
    for (var j = 0; j < gridVal; j++){
      if ((i + j) % 2 === 0){
        gridStr += " ";
      }else {
        gridStr += "#";
      }
  }
  gridStr += "\n";
  
}
console.log(gridStr);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
