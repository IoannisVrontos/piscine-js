function longWords(array) {
  return array.every((item) => typeof item === "string" && item.length >= 5);
}

function oneLongWord(array) {
  return array.some((item) => typeof item === "string" && item.length >= 10);
}

function noLongWords(array) {
  return array.every((item) => typeof item === "string" && !(item.length >= 7));
}
