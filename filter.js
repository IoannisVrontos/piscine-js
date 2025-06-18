function filter(arr = [], func) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function reject(arr = [], func) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!func(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function partition(arr = [], func) {
  const resultArr = [[], []];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i], i, arr)) {
      resultArr[0].push(arr[i]);
    } else {
      resultArr[1].push(arr[i]);
    }
  }
  return resultArr;
}
