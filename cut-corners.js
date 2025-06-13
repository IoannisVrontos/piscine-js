const trunc = (n) => {
  if (!(n > 0 || n < 0) || n === Infinity || n === -Infinity) {
    return n;
  }

  let result = 0;
  const absN = n > 0 ? n : -n;

  let powerOf2 = 1;
  while (powerOf2 <= absN) {
    powerOf2 = powerOf2 * 2;
  }
  powerOf2 = powerOf2 / 2;

  while (powerOf2 >= 1) {
    if (result + powerOf2 <= absN) {
      result = result + powerOf2;
    }
    powerOf2 = powerOf2 / 2;
  }

  return n > 0 ? result : -result;
};

const floor = (n) => {
    const tr = trunc(n);
    if (n<0 && n !== tr){
        return tr - 1;
    }
    return tr;
};

const ceil = (n) => {
    const tr = trunc(n);
    if (n>0 && n !== tr){
        return tr + 1;
    }
    return tr;
};

const round = (n) => {
    return floor(n + 0.5);
};
