const words = (str) => str.split(" ");
const sentence = (str) => str.join(" ");
const yell = (str) => str.toUpperCase();
const whisper = (str) => "*" + str.toLowerCase() + "*";

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
