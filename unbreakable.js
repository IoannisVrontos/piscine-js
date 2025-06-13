function split(str,separator){
    const arr = [];
    let temp = "";
    for(let i=0;i<str.length;i++){
        if (str[i] === separator && temp !== ""){
            arr.push(temp);
            temp = "";
        } else {
            temp += str[i]
        }
    }
    if (temp !== ""){
        arr.push(temp);
    }
    return arr
}

function join(arr = [],joiner=','){
    let res = ""
    for(let i=0;i<arr.length-1;i++){
        res += arr[i] + joiner
    }
    res += arr[arr.length-1]
    return res
}

