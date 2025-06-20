let lastCircle = null;
let isTrapped = false;

export function createCircle() {
  document.addEventListener("mousedown", (event) => {
    const circle = document.createElement("div");
    circle.classList.add("circle");

    circle.style.background = "white";

    const radius = 25;
    circle.style.left = `${event.clientX - radius}px`;
    circle.style.top = `${event.clientY - radius}px`;

    document.body.appendChild(circle);

    lastCircle = circle;
    isTrapped = false;
  });
}

export function moveCircle() {
  document.addEventListener("mousemove", (event) => {
    if (!lastCircle) {
      return;
    }

    const box = document.querySelector(".box");
    if (!box) {
      return;
    }

    const boxRect = box.getBoundingClientRect();
    const radius = 25;

    let x = event.clientX;
    let y = event.clientY;

    if (!isTrapped) {
      const circleLeft = x - radius;
      const circleTop = y - radius;
      const circleRight = x + radius;
      const circleBottom = y + radius;

      const isInside =
        circleLeft >= boxRect.left + 1 &&
        circleRight <= boxRect.right - 1 &&
        circleTop >= boxRect.top + 1 &&
        circleBottom <= boxRect.bottom - 1;

      if (isInside) {
        isTrapped = true;
        lastCircle.style.background = "var(--purple)";
      }
    }

    if (isTrapped) {
      const minX = boxRect.left + 1 + radius;
      const maxX = boxRect.right - 1 - radius;
      const minY = boxRect.top + 1 + radius;
      const maxY = boxRect.bottom - 1 - radius;

      x = Math.max(minX, Math.min(x, maxX));
      y = Math.max(minY, Math.min(y, maxY));
    }

    lastCircle.style.left = `${x - radius}px`;
    lastCircle.style.top = `${y - radius}px`;
  });
}

export function setBox() {
  const box = document.createElement("div");
  box.classList.add("box");
  document.body.appendChild(box);
}
