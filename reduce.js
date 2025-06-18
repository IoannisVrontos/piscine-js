function fold(array, func, accumulator) {
  let result = accumulator;
  for (let i = 0; i < array.length; i++) {
    result = func(result, array[i], i, array);
  }
  return result;
}

function foldRight(array, func, accumulator) {
  let result = accumulator;
  for (let i = array.length - 1; i >= 0; i--) {
    result = func(result, array[i], i, array);
  }
  return result;
}

function reduce(array, func) {}

function reduceRight(array, func) {}
