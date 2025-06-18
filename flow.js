function flow(functions) {
  return function (...args) {
    let result = functions[0](...args);
    for (let i = 1; i < functions.length; i++) {
      result = functions[i](result);
    }
    return result;
  };
}
