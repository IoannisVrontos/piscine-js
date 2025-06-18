function sign(n) {
  if (n === 0) {
    return 0;
  }
  if (n < 0) {
    return -1;
  }
  return 1;
}

const sameSign = (n1, n2) => (sign(n1) === sign(n2) ? true : false);
