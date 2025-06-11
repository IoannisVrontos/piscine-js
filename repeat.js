const repeat = (str, n) => {
    str = String(str)
    let text = ''
    while(n > 0){
        text += str
        n -= 1
    }
    return text
}