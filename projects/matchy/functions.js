/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(animals, name){
    //use a for loop to loop through animals and find name
    for(var i = 0; i < animals.length; i++){
        if (name === animals[i].name){
            return animals[i];
        }
    }
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Write a function called replace with a signature of replace(animals, name, replacement)
//Takes 3 parameters, an Array of animals, a name of an animal on which to perform a search, and an Object that represents the replacement animal.
function replace(animals, name, replacement){
    //If an animal with that name exists within the animals Array, replace it's entire Object with the replacement Object.
    for(var i = 0; i < animals.length; i++){
        if (name === animals[i].name){
            animals[i] = replacement;
        }
    }
    //Otherwise do nothing.
}





//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Write a function called remove with a signature of remove(animals, name)
//Takes 2 parameters, an Array of animals, and a name of an animal on which to perform a search.

function remove(animals, name){
    //If an animal with that name exists within the animals Array, remove it.
    for(var i = 0; i < animals.length; i++){
        if (name === animals[i].name){
            animals.splice(i, 1);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Write a function called add with a signature of add(animals, animal) { //... } that:
//Takes 2 parameter, an Array of animals, and an Object representing a new animal to be added.
function add(animals, animal){
    //Checks that the animal Object has a name property with a length > 0.
    //Checks that the animal Object has a species property with a length > 0.
    if(animal.name.length > 0 && animal.species.length > 0){
        //Has a unique name, meaning no other animals have that name.
        for(var i = 0; i < animals.length; i++){
            if (animal.name === animals[i].name){
                return;
            }
        }
        animals.push(animal);
    }
}
//Adds this new Object to the animals Array, only if all the other conditions pass.

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
