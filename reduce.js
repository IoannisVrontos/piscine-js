function fold(array,func,accumulator){
    const init = func(accumulator, 0, array);
    let result = init
    for(let i=0;i<array.length;i++){
        result = func(array[i],i,array);
    }
    return result
}

function foldRight(array,func,accumulator){

}

function reduce(array,func){

}

function reduceRight(array,func){
    
}