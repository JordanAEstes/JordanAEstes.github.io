// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-jordanaestes');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {
//find the number of male customers
var maleCounter = 0;
_.filter(array, function(element, index, array){
    if (element.hasOwnProperty('gender') && element['gender'] === 'male'){
        maleCounter += 1;
    }
});
return maleCounter;
};

var femaleCount = function(array){
//find the number of female customers
var femaleCounter = 0;
return _.reduce(array, function(acc, person, index){
    if (person.hasOwnProperty('gender') && person['gender'] === 'female'){
        acc += 1;
    }
    return acc;
}, 0);
};



var oldestCustomer = function(array){
var oldestName = '';
//find the name of the oldest customer
_.reduce(array, function(acc, person, index){
    if(person.hasOwnProperty('age')){
        if(person.age > acc){
            acc = person.age;
            oldestName = person.name;
            
        }
    }
    console.log(oldestName);
    return acc;
}, 0)
return oldestName;
};

var youngestCustomer = function(array){
var youngestCust = 200;
var youngestName = '';
_.each(array, function(element, index, array){
    if (element.hasOwnProperty('age')){
        if (element['age'] < youngestCust){
            youngestCust = element['age'];
            youngestName = element['name'];
        }
    }
});
return youngestName;
};   


var averageBalance = function(array){
var balanceTotal = 0;
var numOfAccounts = 0;
_.each(array, function(element, index, array){
    if (element.hasOwnProperty('balance')){
        balanceTotal += parseFloat(element['balance'].replace(/,/g,'').substring(1));
        numOfAccounts += 1;
    }
});
return (balanceTotal / numOfAccounts);
};

var firstLetterCount = function(array, letter){
var firstLetterCounter = 0;
var formattedName = '';
_.each(array, function(element, index, array){
    if (element.hasOwnProperty('name')){
        formattedName = element['name'].toLowerCase().charAt(0);
        if (formattedName === letter.toLowerCase()){
             firstLetterCounter += 1;
        }
    }
});
return firstLetterCounter;
};

var friendFirstLetterCount = function(array, customer, letter){
var firstLetterCounter = 0;
var formattedName = '';
var friendsArr = []
_.each(array, function(element, index, array){
    friendsArr = element['friends'];
    if (element.name === customer){
        _.each(friendsArr, function(element, index, friendsArr){
            if (element.hasOwnProperty('name')){
                formattedName = element['name'].toLowerCase().charAt(0);
                if (formattedName === letter.toLowerCase()){
                    firstLetterCounter += 1;
                }
            }
        });
        }
    });
return firstLetterCounter;
}

var friendsCount = function(array, name){
var customersNames = [];
var friendsArr = []
if(name === undefined){
    return customersNames;
}
_.each(array, function(element, index, array){
    friendsArr = element.friends;
    _.each(friendsArr, function(ele, ind, arr){
        if(friendsArr[ind].name === name){
            customersNames.push(element.name);
        }
    })
});
return customersNames;
};

var topThreeTags = function(array){
var concatArray = [];
var currentArray = [];
var count = {};
var cnt =  0;
var current = null;
var tagsSorted = [];
var retArray = [];
_.each(array, function(element, index, array){
    concatArray = concatArray.concat(array[index].tags);
})
concatArray.sort();
_.each(concatArray, function(element, index, array){
    if (concatArray[index] != current) {
            if (cnt > 0) {
                count[current] = cnt;
            }
            current = concatArray[index];
            cnt = 1;
    } else {
        cnt++;
    }
})
tagsSorted = Object.keys(count).sort(function(a, b){ return count[b] - count[a] });
retArray.push(tagsSorted[0], tagsSorted[1], tagsSorted[2])
return retArray;
}

var genderCount = function(array){
var retObj = {};
var maleCounter = 0;
var femaleCounter = 0;
var transgenderCounter = 0;
_.filter(array, function(element, index, array){
    if (element.hasOwnProperty('gender')){ 
        if (element['gender'] === 'male'){
            maleCounter += 1;
        } else if (element['gender'] === 'female'){
            femaleCounter += 1;
        } else {
            transgenderCounter += 1;
        }
    }
});
retObj.male = maleCounter;
retObj.female = femaleCounter;
retObj.transgender = transgenderCounter;
return retObj;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
