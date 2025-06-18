function reverse(elem) {
  const elemlen = elem.length - 1;
  const newSlice = [];
  for (let i = elemlen; i >= 0; i--) {
    newSlice.push(elem[i]);
  }

  if (Array.isArray(elem)) {
    return newSlice;
  } else {
    return newSlice.join("");
  }
}

console.log(reverse([1, 2, 3, 4]));
