/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/* 4. certain special words cannot be used as variables, these reserved keywords include: var, const,
* let, for, in, while, function, alert, eval, window, document, location, parseFloat, isNaN */

/* SCOPE: var, let, const are all different ways of declaring variables.  Var defines variables on a global scope
* unless declared in a function, then its scope is local to that function.*/
//example
var exampleVar = 'this string'; //declare global variable exampleVar
if (1 === 1){
    var exampleVar = 'new string'; //redeclare the example var
}

console.log(exampleVar); // console logs 'new string'

//Let is used to define variables also, but it is block scoped

if (true === true){
    let testExample = 'this is a test';
    console.log(testExample); // console logs 'this is a test'
}

/*let can be updated but it cannot be declared again. If the variable is declared in 
* different scopes it actually makes 2 different versions of the variables that are specific to their scope.*/

let testExample = 'this is another string';
console.log(testExample); // testExample console logs 'this is another string'

/*Const is used in cases where you want the variable to hold just one value throughout your code.
* Usually UPPERCASE is used to name a const variable.  Const variables must be asigned when they are declared.*/

const PI = 3.14159;

// like let, const variables are block scoped, they are available only within the block they are created.

/* variables declared with var are hoisted, meaning they are moved to the top of whatever black they are scoped to
* let and const variables are not hoisted. */
var firstVar = true; 
doThis(firstVar);


function doThis(testVar){
    return testVar;
}

// even though the function is defined after the call, the function definition is hoisted so it can be called anywhere in the program.
