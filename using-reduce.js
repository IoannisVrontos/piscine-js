function adder(array = [], initialValue = 0){
    const sum = (a,b) => a + b;
    return array.reduce(sum,initialValue);
}


function sumOrMul(array = [], initialValue = 0){
    const check = (a, b) => {
        if (b % 2 === 0) {
            return a * b;
        } else {
            return a + b;
        }
    }
    return array.reduce(check,initialValue)
}

function funcExec(functions, initialValue) {
    return functions.reduce((acc, fn) => fn(acc), initialValue);
}