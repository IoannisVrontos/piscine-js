// Create a function named letterSpaceNumber that accepts a string; 
// returning an array with every instance of a letter, followed by a space, 
// followed by a number, only if that number has only one digit, 
// and is not followed by any letter.

function letterSpaceNumber(str) {
    const regex = /[a-zA-Z]\s\d(?!\d)/g;
    const matches = str.match(regex);
    return matches || [];
}

// console.log(letterSpaceNumber('example 1, example 20'))
// output: ['e 1']