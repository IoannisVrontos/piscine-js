function fold(array,func,accumulator){
    let result = accumulator
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