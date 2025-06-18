function map(arr = [], func) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i], i, arr));
  }
  return newArr;
}

function flatMap(arr = [], func) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const mappedValue = func(arr[i], i, arr);
    if (Array.isArray(mappedValue)) {
      for (let j = 0; j < mappedValue.length; j++) {
        result.push(mappedValue[j]);
      }
    } else {
      result.push(mappedValue);
    }
  }
  return result;
}
