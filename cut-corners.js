const trunc = (n) => {
  // Handles non-finite numbers, NaN, and zero.
  if (!(n > 0 || n < 0)) {
    return n;
  }

  let result = 0;
  if (n > 0) {
    while (result + 1 <= n) {
      result = result + 1;
    }
  } else {
    while (result - 1 >= n) {
      result = result - 1;
    }
  }
  return result;
};

const floor = (n) => {
    const tr = trunc(n);
    if (n<0 && n !== tr){
        return tr - 1;
    }
    return tr
};

const ceil = (n) => {
    const tr = trunc(n);
    if (n>0 && n !== tr){
        return tr + 1;
    }
    return tr
};

const round = (n) => {
    return floor(n + 0.5)
};


const nums = [3.7, -3.7, 3.1, -3.1]
console.log(nums.map(round))
console.log(nums.map(floor))
console.log(nums.map(trunc))
console.log(nums.map(ceil))