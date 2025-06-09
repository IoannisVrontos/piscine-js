function isPositive(num){
    if (num < 1){
        return false
    }
    return true
}

function abs(num) {
    if (isPositive(num)){
        return num
    }
    return (num*-1)
}