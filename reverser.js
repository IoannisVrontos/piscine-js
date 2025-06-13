function reverse(arr = []) {
    const arrlen = arr.length-1
    let result = []
    for(let i=arrlen;i>=0;i--){
        result.push(arr[i])
    }
    return result
}