function slice (elem, startIndx = 0, endIndx = elem.length){
    let newSlice = []
    let count = 0
    for (let i=startIndx;i<=endIndx-1;i++){
        newSlice[count] = elem[i]
        count++
    }
    return newSlice
}

// const animals = ["ant", "bison", "camel", "duck", "elephant"];

// console.log(slice(animals,1,5))