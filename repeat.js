const repeat = (str, n) => {
    const text = str
    while(n>1){
        str += text;
        n -= 1;
    }
    return str
}