import { colors } from "./fifty-shades-of-cold.data.js";

export function generateClasses() {
  const head = document.getElementsByTagName("head")[0];
  const styleTag = document.createElement("style");
  for (const color of colors) {
    const attr = `.${color} {
  background: ${color};
}`;
    styleTag.append(attr);
  }
  head.append(styleTag);
}
export function generateColdShades() {
  const body = document.getElementsByTagName("body")[0];
  const colorList = [
    "aqua",
    "blue",
    "turquoise",
    "green",
    "cyan",
    "navy",
    "purple",
  ];
  const coldShades = colors.filter((colorName) => {
    return colorList.some((keyword) => colorName.includes(keyword));
  });
  for (const color of coldShades) {
    const div = document.createElement("div");
    div.classList.add(color);
    div.textContent = color;
    body.append(div);
  }
}

export function choseShade(colorFromTextContent) {
  const divs = document.getElementsByTagName("div");
  Array.from(divs).forEach((element) => {
    element.classList.replace(
      element.getAttribute("class"),
      colorFromTextContent
    );
  });
}
