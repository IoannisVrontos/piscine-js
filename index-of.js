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

// Η διόρθωση εστιάζει στον βρόχο for
function lastIndexOf(arr = [], searchElement, fromIndex = arr.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
        if (arr[i] === searchElement) {
            return i; 
        }
    }
    return -1; 
}