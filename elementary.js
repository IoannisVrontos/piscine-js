const multiply = (a,b) => {
    a = Number(a)
    let res = 0
    while(b>0){
        res += a
        b -= 1
    }
    return res
}

const divide = (a,b) => {
    a = Number(a)
    let count = 0
    for(let i = a;i>=b;i-=b) {
        count += 1
    }
    return count
}

const modulo = (a,b) => {
    let temp = a 
    a = Number(a)
    for(let i = a;i>=b;i-=b) {
        temp -= b
    }
    return temp
}
