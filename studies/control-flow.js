/* CONTROL FLOW
*
* 1. if/else if/else - runs a series of boolean checks to see if certain conditons are met.
* 2. switch - compares a specific value to a series of cases
*
*
*
*
*/

// 1. IF/ELSE IF/ELSE
//  i.if - checks a condition and executes a block of code if it resolves as true

    if(5 > 2){
        console.log('first if is true'); // logs 'first if is true'
    }

//  ii. else if - checks if a second condition is true if the first if is false
    
    if(5 < 2){
        console.log('first if is true');
    } else if(5 === 5){
        console.log('if else is true');// logs 'if else is true'
    }

//  iii. else - catches all the other conditions if the first if and the else ifs fail to be true
    
    if(5 < 2){
        console.log('first if is true');
    } else if(5 === 4){
        console.log('if else is true');
    } else {
        console.log('none of the if statements were true');// logs 'none of the if statements were true'
    }
  
  
  
    
// 2. SWITCH
//  i. expression - the value to be matched to a case
        
    switch ('expression') {// this is the expression that we are checking
        case 'expression' : 
            console.log('expression');
            break;
    }

//  ii. case - the values to match the expressions.  If it matches the code executes and the break statement ends the switch
    
    switch ('expression') {
        case 'expression' : //this is the case we are checking against the expression
            console.log('expression');
            break;
    }
    
//  iii. default - the value if no other cases match.

    switch ('expression') {
        case 'failed' : 
            console.log('expression');
            break;
    
        default : // this is the default that catches everything else if nothing matches the expression.
            console.log('nothing else matched');
    }
    