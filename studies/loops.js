/* LOOPS
*
* 1. Types of Loops 
*   i. For Loop
*   ii. While Loop
*   iii. For In Loop
* 2. Looping by increment or decrement
*   i. incriment
*   ii. decriment 
* 3. Looping over arrays
* 4. Looping over objects
*
*
*/




// 1. TYPES OF LOOPS
//  i. For Loops - repeats a block of code until its built in counter reaches a certain condtion
    
    for(var i =0; i < 5; i++){//initialize the counter and set it to 0. set a check condtion. increment value of counter
        console.log(i);//logs i each time the loop is run
    }
    
//  ii. While Loops - repeats a block of code until a certain condtion is met
    
    var x = 0;
    while(x < 3){//check if x is still less than 3, if it is then execute the code block.
        x++;//increment the counter so the final condition can be met
    }
    
//  iii. For In Loop  - specific loop for looping through Objects.
    var testObj = {
        val1: "value",
        val2: "another value",
        valNum: 5
    };
        
    for(var key in testObj) { //loops through testObj
             console.log(key);//logs testObj keys
    }




// 2. LOOPING BY INCREMENT OR DECREMENT
//  i. incriment - loops while the counter increments to reach its final condtion
    
    for(var i = 0; i < 5; i++){// the counter increments each loop until the condition is met
        console.log(i);
    }

//  ii. decriment - loops while the counter decrements to reach its final condtion
    
    for(var i = 5; i > 0; i--){// the counter decrements each loop until the condition is met
        console.log(i);
    }
    
    
    

// 3. LOOPING OVER ARRAYS
//  since arrays are zero indexed lists we can use for loops to loop through them
    
    var testArr = [1, 2, 3, 4, 5, 6];
    for(var i = 0; i < testArr.length; i++){// the counter starts at 0 and ends when the length of the array is met
        console.log(testArr[i]); // console logs the values of the array.
    }




// 4. LOOPING THROUGH OBJECTS
// for in loops are specifically defined to go throug the keys and values of objects
    var loopObj = {
        val1: "value",
        val2: "another value",
        valNum: 5
    };
        
    for(var key in loopObj) { //loops through testObj
             console.log(loopObj[key]);//logs testObj value at each key
    }
