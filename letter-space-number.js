function letterSpaceNumber(str) {
  const regex = /[a-zA-Z]\s\d\b/g;
  const matches = str.match(regex);
  return matches || [];
}
