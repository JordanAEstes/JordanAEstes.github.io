
/* OPERATORS
*
* 1. Assignment operators - assign a value to its left variable to its right value
* 2. Arithmatic operators - takes two values and returns a new value
* 3. Comparison operators - compares two values and returns a boolean value
* 4. Logical operators - compares boolean values and returns a boolean value
* 5. Unary Operators - performs an action on one value
* 6. Ternary Operators - performs an action on three values.
*
*
*
*/
var x;
var y;



// 1. ASSIGNMENT OPERATORS
//  i. = - assigns whats on the right side of the equals sign to the left side */
    
    x = 6;
    
//  ii. += - assigns the sum of the left and right value to the left side of the += 
    
    x += 6;
    //is the same as:
    x = x + 6;
    
//  iii. -= - assigns the difference of the left and right value to the left side of the -=
    
    x -= 3;
    //is the same as:
    x = x - 3;
    
//  iv. *= assign the product of the left and right side to the left side of the *=

    x *= 5;
    //is the same as:
    x = x * 5;
    
//  v. /= - assigns the quotient of the left and the right to the left side of the /=

    x /= 9;
    //is the same as:
    x = x / 9;
    
//  vi. &= - assigns the remainder of the left and right side to the left side of the %=
    
    x %= 2;
    //is the same as:
    x = x % 2;

//  vii. &= - assigns the result of the left AND the right side to the left side of the &=

    x &= y;
    //is the same as:
    x = x & y;
    
//  viii. |= - assigns the result of the left OR the right to the left side of the |=

    x |= y;
    //is the same as:
    x = x | y;

//  ix. ^= - assign the result of the left XOR the right to the left side of the ^=
    
    x ^= y;
    //is the same as:
    x = x ^ y;

//  x. <<= - assigns the result of the left shifted left by the right amaount to the left of the <<=
    
    x <<= y;
    //is the same as:
    x = x << y;
    
//  xi. >>= - assigns the result of the left shifted right (with the sign preserved) by the right amaount to the left of the >>=
    
    x >>= y;
    //is the same as:
    x = x >> y;
    
//  xii. >>>= - assigns the result of the left shifted right by the right amount to the left side of the >>>=

    x >>>= y;
    //is the same as:
    x = x >>>= y;
 
 
 
    
// 2. ARITHMATIC OPERATORS
//  i. '+' - adds values and returns their sum

    1 + 1;
    // resolves to '2'

//  ii. '-' - subtracts values and returns their difference
    
    5 - 3;
    // resolves to '2'
    
//  iii. '*' - multiplies values and returns their product
    
    4 * 7;
    //resolves to '28'

//  iv. '/' - divides values and returns their quotient
    
    9 / 3;
    //resolves to '3'
    
//  v. '%' - divides values and returns the remainder
    
    12 % 5;
    //resolves to '2'

//  vi. '++' - increments a value
    
    x = 0;
    //increment x
    x++;
    // x now holds a value of '1'

//  vii. '--' - decrements a value
   
    x = 5;
    //decrement x
    x--;
    // x now holds a value of '4'
    
    
    
    
// 3. COMPARISON OPERATORS
//
//  i. == - equal to compares the values of two things, but doesn't compare type
    
    5 == '5'; //returns true because the values are the same

//  ii. === - equal value and equal type compares the value and type of two items
    
    'this' === 'this'; //returns true because both type and value are equal
    
//  iii. != - not equal compares two values and returns true if they are not equal

    5 != 6; //returns true because values are not equal
    
//  iv. !== - not equal value or not equal type compares two values and returns true when either the type or value is not equal

    5 !== '5'; //returns true because the type is different.

//  v. > - greater than checks if the value on the left is greater tnan the value on the right
    
    9 > 3; //returns true because '9' is greater than '3'
    
//  vi. < - lesser than checks if the value on the left is less than the value on the right

    5 < 8; //returns true because '5' is less than '8'

//  vii. >= - greater than or equal to checks if the value on the left is greater tnan or equal to the value on the right
    
    9 >= 3; //returns true because '9' is greater than '3'
    6 >= 6; //returns true because '6' equals 6'
    
//  viii. <= - lesser than or equal to checks if the value on the left is less than or equal to the value on the right

    5 <= 8; //returns true because '5' is less than '8'
    3 <= 3; //returns true because '3' is equal to '3'




// 4. LOGICAL OPERATORS
//
//  i. && - logical and checks to make sure two values both are true and returns true
    
    x = 5;
    y = 7;
    (x > 0 && y > 1); //returns true because both values are true
    
//  ii. || - logical or checks to make sure one of two values is true and returns true

    x = 0;
    y = 5;
    (x = 1 || y < 10); //returns true because y is less than '10'
    
//  iii. ! - logical not checks to see if opposite of an evaluation is true and returns true

    x = 1;
    y = 3;
    !(x === y); //returns true because x does not equal y
    
    
    
    
// 5. UNARY OPERATORS
//
//  i. delete - deletes an object, object property, or element of an array
    
    var testObj = {
        nameFirst: 'Jordan',
        nameLast: 'Estes'
    };
        delete testObj.nameLast; //deletes the key value pair at the key 'nameLast'
        
    var testArr = [1, 2, 3, 4, 5, 6];
    
        delete testArr[2]; // deletes the value '3' at index '2'
        
//  ii. typeof - returns a string of what type the value you passed to it
    var testNum = 8;
    var testStr = 'this string';
    var testBool = true;
        
    typeof testObj; // returns 'object'
    typeof testNum; // returns 'number'
    typeof testStr; // returns 'string'
    typeof testBool; // returns 'boolean'
        
//  iii. void - forces an expression to evaluate to 'undefined'
        
    void 0; // returns a value of undefined
    



// 6. TERNARY OPERATOR
//  i. '?' - checks a condition and returns a value if true and a different value if false
    
    5 === 4 ? 'these values are equal' : 'these values are inequal'; // returns 'these value are inequal'
    