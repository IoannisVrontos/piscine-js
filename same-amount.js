// Create a function named sameAmount, 
// that takes three arguments: a string, and 2 regular expressions. 
// Your function should return a boolean.

// The objective is to confirm that the regular expressions 
// match the string the same number of times.

function sameAmount(str,reg1,reg2){
    const matches1 = str.match(reg1);
    const matches2 = str.match(reg2);
    return matches1.length === matches2.length;
}

