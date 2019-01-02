/* STRING MANIPULATION
*
* 1. With Operators
* 2. With String Methods
*/




// 1. WITH OPERATORS
//  i. '+' - concatenates two strings and returns the joined string

    var firstStr = 'Hello';
    var secondStr = 'World';
    var finalStr = firstStr + " " + secondStr;//joins the two strings with a space in between

//  ii. '+=' - concatenates the string and then reassigns to the string on the left

    firstStr += secondStr;// returns "HelloWorld"
    firstStr += secondStr;// returns "HelloWorldWorld"
    
    
    
    
// 2. WITH STRING METHODS
var methodStr = 'This is the method string it is to test methods on a string';
//  i. length - returns the length of a string
    
    console.log(methodStr.length);//logs a numerical value of the length of methodStr
    
//  ii. indexOf('text') - searches the string for specific text

    console.log(methodStr.indexOf('is'));//logs the index of the first instance of 'is'
    
//  iii. lastIndexOf('text') - searches the string for the last instance of specific text

    console.log(methodStr.lastIndexOf('is'));//logs the index of the last instance of 'is'
    
//  iv. search('text') - searches the string for 'text'

    console.log(methodStr.search('method'));//logs the index of the first instance of 'method'
    
//  v. slice(start, end) - extracts part of a string starting at start and ending on end

    console.log(methodStr.slice(0, 4));//logs the first 5 characters of methodStr
    
//  vi. substr(start, length) - extracts part of a string starting at start and ending after length
    
    console.log(methodStr.substr(0, 12));//logs the first 13 characters of methodStr
    
//  vii. replace(replaceThis, replaceWith) - replaces the text of replaceThis with the text of replaceWith

    console.log(methodStr.replace('methods', 'properties'));//replaces 'methods' in methodStr with 'properties'
     
//  viii. toUpperCase() - capitilizes the string

    console.log(methodStr.toUpperCase()); // logs methodStr in all capital letters
    
//  ix. toLowerCase() - converts string to all lowercase characters

    console.log(methodStr.toLowerCase());//logs methodStr in all lowercase letters

//  x. concat() - concatenates two strings

    console.log('Hello'.concat(' ', 'World')); // logs 'Hello World'
    
//  xi. trim() - removes the white space from the begining and end of a string
    
    var trimStr = '       trim this string             ';
    console.log(trimStr.trim());//logs 'trim this string'
    
//  xii. charAt(index) - returns the character at index

    console.log(methodStr.charAt(3));// logs 's'
    
//  xiii. charCodeAt(index) - returns the UTF-16 code for the charater at index
    
    console.log(methodStr.charCodeAt(3));// logs the UTF-16 code of 's'
    
//  xiv. split(separator) - returns an array of the string split at separator
    
    var splitArr = [];
    splitArr = methodStr.split(" ");
    console.log(splitArr);// prints array where each value are the words from methodStr

