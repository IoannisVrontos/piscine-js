function isPositive(num){
    if (num < 0){
        return false
    }
    return true
}

function Abs(num) {
    if (isPositive(num)){
        return num
    }
    return (num*-1)
}