function slice (elem, startIndx = 0, endIndx = elem.length - 1){
    let newSlice = []
    let count = 0
    for (let i=startIndx;i<endIndx;i++){
        newSlice[count] = elem[i]
        count++
    }
    return newSlice
}
