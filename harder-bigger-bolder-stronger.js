export function generateLetters() {
  let fontSize = 11;
  for (let i = 0; i < 120; i++) {
    const body = document.querySelector("body");
    const newDiv = document.createElement("div");
    const letter = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    newDiv.style.fontSize = fontSize + "px";
    if (i <= 39) {
      newDiv.style.fontWeight = 300;
    } else if (i > 39 && i <= 79) {
      newDiv.style.fontWeight = 400;
    } else {
      newDiv.style.fontWeight = 600;
    }
    fontSize++;
    newDiv.append(letter);
    body.append(newDiv);
  }
}
