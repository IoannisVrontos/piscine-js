function split(str, sep) {
    const result = [];
    
    if (sep === '') {
        for (let i = 0; i < str.length; i++) {
            result.push(str.charAt(i));
        }
        return result;
    }

    let lastIndex = 0;
    let matchIndex = str.indexOf(sep, lastIndex);

    while (matchIndex !== -1) {
        result.push(str.slice(lastIndex, matchIndex));
        lastIndex = matchIndex + sep.length;
        matchIndex = str.indexOf(sep, lastIndex);
    }

    result.push(str.slice(lastIndex));

    return result;
}


function join(arr = [], joiner = ',') {
    if (arr.length === 0) {
        return "";
    }
    let res = "";
    for (let i = 0; i < arr.length - 1; i++) {
        res += arr[i] + joiner;
    }
    res += arr[arr.length - 1];
    return res;
}

