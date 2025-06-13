function indexOf(arr = [], searchElement, fromIndex = 0) {
    for (let i = fromIndex; i < arr.length; i++) {
        if (arr[i] === searchElement) {
            return i;
        }
    }
    return -1;
}

function include(arr = [],searchElement){
    if (indexOf(arr,searchElement) !== -1){
        return true
    }
    return false
}

function lastIndexOf(arr = [], searchElement, fromIndex = 0) {
    let find = false;
    let pos = 0;
    for (let i = fromIndex; i < arr.length; i++) {
        if (arr[i] === searchElement) {
            find = true;
            pos = i
        }
    }
    if (find === true) {
        return pos
    }
    return -1;
}