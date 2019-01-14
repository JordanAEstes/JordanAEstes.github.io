/* FUNCTIONS
*
*
* 1. Declaring and Calling functions
*   i. Declarign functions
*   ii. Calling functions
* 2. Parameters and Arguments
*   i. Parameters
*   ii. Arguements
* 3. Named Functions
* 4. Assigning Functions to Variables
* 5. Inputs and Returns
*   i. Inputs
*   ii. Returns
* 6. Scope
* 7. Closures
*
*
*/




// 1. DECLARING AND CALLING FUNCTIONS
//  i. Declaring a function - functions are declared using the function keyword followed by
//      the name of the function and parenthesis and last by the code block in curly brackets

    function newFunc(){//this is the function declaration.
        console.log('I am a function');
    }

//  ii. Calling a function - a function is called by simply typing the function name and following it with parenthesis
    
    newFunc();
    



// 2. PARAMETERS AND ARGUEMENTS
//  i. Parameters - parameters are placeholders for values.  They are put in the parenthesis during function declaration.
    
    function paramFunc(paramOne, paramTwo){//paramOne and paramTwo hold the place for values that will be passed when the function is called
        console.log(paramOne + paramTwo);
    }
    
//  ii. Arguements - arguements are values that are passed into the function when it is called.

    paramFunc(45, 27); // 45 and 27 are actual values being passed into the function
    



// 3. NAMED FUNCTIONS
//  i. Named functiona - functions are named by using the function keyword
    
    function namedFunc(){// here we name the new function 'namedFunc'
        console.log('this function has a name');
    }
    



// 4. ASSIGNING FUNCTIONS TO VARIABLES
//  i. Assigning functions to variables - we can assign a function to a variable by setting an anonymous function to a varible name

    var varFunc = function (){
        console.log('this function is assigned to the variable varFunc');
    };
    



// 5. INPUTS AND RETURNS
//  i. Inputs - parameters hold the place of values that arguements provide at function call.
    
    function inputFunc(paramOne, paramTwo){// here the function is declared and the parameters are set
        console.log(paramOne, paramTwo);
    }
    
    inputFunc(3, 'Turkey');//here we pass two arguements to the function
    
//  ii. Returns - return statements are how we get values out of functions, using the return keyword

    function returnFunc(paramOne, paramTwo){
        return paramOne + paramTwo;// this function returns the sum of the parameters
    }
    
    console.log(returnFunc(4, 5));// logs the return value from the function, in this case 9

// return statements arent always necissary. If the function is just manipulating a global variable nothing really needs to be returned
    
    var testNum = 2
    function changeTestNum(newNum){
        testNum = testNum * newNum;
    }
    
    changeTestNum(4);
    
    console.log(testNum);
// this will log to '8' because we have used the function to change the value of testNum.



// 6. SCOPE
//  i. Scope - scope refers to block of code a variable is declared in.  If the variable is declared in the main body
//      of the code it is said to have global scope.  If a varibale is declared within a function it is said to have
//      local scope.  Local scopes have access to globaly scoped variables, but not the other way around.

    var globalVar = 54 // this is a global variable
    
    function localFunc(paramOne){
        var localVar = 23;// this is a local variable.
        return localVar + paramOne;
    }
    



// 7. CLOSURE
//  i. Closure - closure is a way for a local scoped varible to be used like a global variable while still being 
//      private to that function.  Because functions have access to parent variables we enclose the varaible we want
//      inside a function and act on it in a nested function.  This allows us to preserve the variable without giving
//      access to the entire global scope.
    
    var closureFunc = ( function(){
        var incrementVar = 0;// we put the variable we want to be enclosed in the parent function
        return function(){ //return a function that actually effects the variable
            incrementVar += 1;
            return incrementVar;
        };
        
    }) ();
    
    closureFunc();//each time we call the function the incrementVar increases
    closureFunc();
    console.log(closureFunc());//logs '3' since we called the function 3 times