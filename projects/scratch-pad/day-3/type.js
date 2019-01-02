// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    var bool = Array.isArray(value);
    return bool;
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    //check to make sure value isnt an array
    if (Array.isArray(value)){
        //console.log("array");
        return false; //return false if value is an array
    } else if (value === null){ //check to see that value isnt null
        //console.log("null");
        return false;//return false is value is null
    } else if (value instanceof Date){ //check to make sure value isnt a date
        //console.log("date");
        return false;// return false if value is a date
    } else if (typeof value === "object"){// check if vale is an object
        //console.log("object");
        return true;//return true if value is an object.
    } else {
        return false;
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    if (Array.isArray(value)){
    //console.log("array");
        return true; //return false if value is an array
    } else if (value === null){ //check to see that value isnt null
        //console.log("null");
        return false;//return false is value is null
    } else if (value instanceof Date){ //check to make sure value isnt a date
        //console.log("date");
        return false;// return false if value is a date
    } else if (typeof value === "object"){// check if vale is an object
        //console.log("object");
        return true;//return true if value is an object.
    } else {
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
   if(typeof(value) === "object"){
        if (Array.isArray(value)){
            return 'array'; //return false if value is an array
        } else if (value === null){ //check to see that value isnt null
            return 'null';//return false is value is null
        } else if (value instanceof Date){ //check to make sure value isnt a date
            return 'date';// return false if value is a date
        } else if (typeof value === "object"){// check if vale is an object
            return 'object';//return true if value is an object.
        }
    } else {
        return typeof(value);
    }
}
    
    
    // YOUR CODE ABOVE HERE //

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
