function triangle(str, height) {
  if (height < 1) {
    return "";
  }

  let result = "";
  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= i; j++) {
      result += str;
    }
    if (i < height) {
      result += "\n";
    }
  }
  return result;
}
