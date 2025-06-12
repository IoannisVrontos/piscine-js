
function sign(n){
    if (n === 0){
        return 0
    }
    if (n < 0){
        return -1
    }
    return 1
}

const isPositive = (num) => (num <= 0 ? false : true);

const abs = (num) => (isPositive(num) || num === 0 ? num : num*-1);

const resultSign = (a,b) => {
    if (a === -1 && b === -1){
        return 1
    } 
    if (a === -1 || b === -1){
        return -1
    }
    return 1
}

const multiply = (a, b) => {
    const signA = sign(a);
    const signB = sign(b);
    const rS = resultSign(a,b);
    a = abs(a);
    b = abs(b);
    a = Number(a);
    b = Number(b);
    let res = 0;
    for (let i = 0; i < b; i++) {
        res += a;
    }
    return rS === -1 ? -res : res;
}

const divide = (a, b) => {
    if (b === 0) return NaN;
    const signA = sign(a);
    const signB = sign(b);
    const rS = resultSign(a,b);
    a = abs(a);
    b = abs(b);
    a = Number(a);
    b = Number(b);
    let count = 0;
    while (a >= b) {
        a -= b;
        count += 1;
    }
    return rS === -1 ? -count : count;
}

const modulo = (a, b) => {
    if (b === 0) return NaN;
    const signA = sign(a);
    a = abs(a);
    b = abs(b);
    a = Number(a);
    b = Number(b);
    while (a >= b) {
        a -= b;
    }
    return signA === -1 ? -a : a;
}
