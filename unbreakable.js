function split(str,sep){
    const arr = [];
    const seplen = sep.length
    let seperator = "";
    let word = "";


    for(let i=0;i<str.length;i++){
        for(let j=i;j<seplen+i;j++){
            seperator += str[j];
        }
        if (seperator === sep && word !== ""){
            arr.push(word)
            word = "";
            i += seplen-1;
        } else {
            word += str[i]
        }
        seperator = "";
    }

    arr.push(word);
    
    return arr;
}

function join(arr = [],joiner=','){
    let res = "";
    for(let i=0;i<arr.length-1;i++){
        res += arr[i] + joiner;
    }
    res += arr[arr.length-1];
    return res;
}