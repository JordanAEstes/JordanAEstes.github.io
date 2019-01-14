/*
* DATA TYPES:
* Two different types of data types:
*   1. Simple or Primitive data types - data types that can actually be held in memory.
*       i.  Number - a numeric value
*       ii. String - a text value
*       iii.Boolean - a true or false value
*       iV. NaN - not a number
*       V.  undefined - no value or uninitialized
*       vi. null - no value, nullified by the programmer
*   2. complex data types - data types where a reference is what is held in memory.
*       i.  Object - groups of key value pairs
*       ii. Array - values stored in a zero indexed list
*       iii.Function - stores blocks of statements
*   3. Copy by Value vs Copy by Reference
*/


// SIMPLE DATA TYPES
// 1. Number - a number is any numerical value

3;
4.5;

// 2. String - strings are a text value

"this is a string";
"3";
"A";

//3. Boolean - booleans hold a true or false value so there are only to Boolean values

true;
false;

//4. NaN - the initial value is Not-A-Number.  NaN is not equal to any other value even another NaN.

NaN;

//5. undefined - variables that have not been assigned are undefined, functions with no return value return undefined.

var testVar; // this variable is undefined.

function undefinedFunc(){
    console.log('this function returns nothing so it will return undefined');
}
var newVal = undefinedFunc(); // newVal is undefined
//6. null - null represents a value that is intentionally left pointing to no reference or value.

var nullTest = null;
console.log(nullTest); // will log as null.



//COMPLEX DATA TYPES
//1. Object - stores key value pairs in curly braces seperated by commas.

var testObj = {
    valueOne : "value one",
    valueTwo : "value two"
};

//Object values can be accessed by dot or bracket notation.

testObj.valueOne;
// has the value of 'value one'
testObj["valueTwo"];
// has the value of 'value two'

//2. Array - arrays are a series of values stored in a zero indexed list.

var testArray = [1, 2, 3, 4];

//Arrays are accessed by bracket notation only

testArray[2];
//has the value of 3

/*3. Function - stores a block of code that can be used repeatedly throughout the code. 
* It is declared using the function keyword.  functions take parameters in their parenthesis
* and can return a value using the return statement.*/

function testFunc(params){
    return params;
}

//functions are called by their name with parenethesis behind it. An arguement can be passed via the parenthesis

console.log(testFunc(45));
// this will console log the parameters passed into it because the return statement just retrurns what is passed in.

/*INFINITY AND -INFINITY
* Infinity is a data type that represents the largest number.  Any number multiplied by infinity is infinity. 
* Any number divided by infinity is 0. 
* -Infinity is a data type that represents the smallest possible number.  Any positive number multiplied times 
* -Infinity is -Infinity.  Any negative number times -Infinity is Infinity. Any positive number divided by -Infinity is -0.
* Any negative number divided by -Infinity is 0.*/
console.log(Infinity * 3);
console.log(Infinity / 3);
console.log(-Infinity * 3);
console.log(-Infinity / 3);
console.log(-Infinity * -3);
console.log(-Infinity / -3);

/* 3. COPY BY VALUE AND COPY BY REFERENCE
* simple data types are copied by value complex data types are copied by reference
* when simple data types are assigned to a variable they are copied by value, so the variable actually holds a copy of the 
* value.  This means that each variable assigned to a simple data type holds its own unique value.
*/
// a set of variables are assigned values
var exampleNumber = 10;

//another set of variables are assigned copys of the previous variables values
var x = exampleNumber;

//if you change the original variable, the new variable will still hold onto their original values.

exampleNumber = exampleNumber + 5;

console.log(exampleNumber, x)

//this will log to '15 10', because the value of x is unchanged, while the value of exampleNumber has been changed.

//for complex data types values are copied by reference, meaning the variable names just point to the same objects,
//if the original object changes, the copied objects will change too

var array = [1];
var refArray = array;

//if we change array refArray will change also

array.push(42);

console.log(refArray);

//this will log '[1, 42]' because refArray is just pointing to the original array's values.
