function slice (elem, startIndx, endIndx) {
    if (elem == null) {
        return typeof elem === 'string' ? '' : [];
    }
    
    const len = elem.length;

    let start = startIndx === undefined ? 0 : startIndx;
    if (start < 0) {
        start = Math.max(len + start, 0);
    }

    let end = endIndx === undefined ? len : endIndx;
    if (end < 0) {
        end = Math.max(len + end, 0);
    } else {
        end = Math.min(end, len);
    }

    //slice logic
    const newSlice = [];
    for (let i = start; i < end; i++) {
        newSlice.push(elem[i]);
    }

    if (Array.isArray(elem)) {
        return newSlice;
    } else {
        return newSlice.join('');
    }
}