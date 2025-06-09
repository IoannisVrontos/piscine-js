function isPositive(num){
    if (num < 1){
        return false
    }
    return true
}

function abs(num) {
    if (isPositive(num) || num === 0){
        return num
    }
    return (num*-1)
}