function pyramid(str, height) {
  if (height < 1) {
    return "";
  }
  let result = "";
  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= (height - i) * str.length; j++) {
      result += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      result += str;
    }
    if (i < height) {
      result += "\n";
    }
  }
  return result;
}
