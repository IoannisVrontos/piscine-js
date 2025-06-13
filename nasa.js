function nasa(n) {
    let res = ''
    for(let i=1;i<=n;i++){
        let appended = false;
        if(i%3===0){
            res += 'NA'
            appended = true;
        }
        
        if(i%5===0){
            res += 'SA'
            appended = true;
        }
        if(!appended){
            res += i
        }

        if (i !== n){
            res += ' '
        }
    }
    return res
}
