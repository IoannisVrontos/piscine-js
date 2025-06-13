function findExpression(num) {

  function find(current, expression) {
    if (current === num) {
      return expression;
    } else if (current > num) {
      return null; 
    } else {
      let found = find(current * 2, expression + " " + mul2);
      if (found) {
        return found;
      }
      found = find(current + 4, expression + " " + add4);
      if (found) {
        return found;
      }
      return null; 
    }
  }

  const result = find(1, "1");
  return result === null ? undefined : result.replace("1 ", ""); 
}
