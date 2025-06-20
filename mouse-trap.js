export function createCircle() {
  document.addEventListener("mousedown", (event) => {
    const mpX = event.clientX;
    const mpY = event.clientY;
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.left = mpX - 25 + "px";
    circle.style.top = mpY - 25 + "px";
    document.body.appendChild(circle);
    const box = document.querySelector(".box");
    const boxBound = box.getBoundingClientRect();
    const circleBound = circle.getBoundingClientRect();
    if (
      circleBound.top > boxBound.top &&
      circleBound.bottom < boxBound.bottom &&
      circleBound.left > boxBound.left &&
      circleBound.right < boxBound.right
    ) {
      circle.style.backgroundColor = "var(--purple)";
    } else {
      circle.style.backgroundColor = "white";
    }
    moveCircle();
  });
}

const mouseMoveOutOfTheBox = (event) => {
  let circles = document.querySelectorAll(".circle");
  if (circles.length > 0) {
    let lastCircle = circles[circles.length - 1];
    const mpX = event.clientX;
    const mpY = event.clientY;
    lastCircle.style.left = mpX - 25 + "px";
    lastCircle.style.top = mpY - 25 + "px";
    const box = document.querySelector(".box");
    const boxBound = box.getBoundingClientRect();
    const circleBound = lastCircle.getBoundingClientRect();
    if (
      circleBound.top > boxBound.top &&
      circleBound.bottom < boxBound.bottom &&
      circleBound.left > boxBound.left &&
      circleBound.right < boxBound.right
    ) {
      lastCircle.style.backgroundColor = "var(--purple)";
      document.removeEventListener("mousemove", mouseMoveInTheBox);
      trapMouse();
    }
  }
};

const mouseMoveInTheBox = (event) => {
  const circles = document.querySelectorAll(".circle");
  if (circles.length === 0) return;

  const lastCircle = circles[circles.length - 1];
  const box = document.querySelector(".box");
  const boxBound = box.getBoundingClientRect();

  const circleSize = 50;
  const radius = circleSize / 2;

  const targetX = event.clientX - radius;
  const targetY = event.clientY - radius;

  const innerLeft = boxBound.left + 1;
  const innerRight = boxBound.right - 1;
  const innerTop = boxBound.top + 1;
  const innerBottom = boxBound.bottom - 1;

  const finalX = Math.max(
    innerLeft,
    Math.min(targetX, innerRight - circleSize)
  );

  const finalY = Math.max(
    innerTop,
    Math.min(targetY, innerBottom - circleSize)
  );

  lastCircle.style.left = finalX + "px";
  lastCircle.style.top = finalY + "px";
};

export function moveCircle() {
  document.addEventListener("mousemove", mouseMoveOutOfTheBox);
}

export function setBox() {
  const box = document.createElement("div");
  box.classList.add("box");
  document.body.appendChild(box);
}

function trapMouse() {
  document.removeEventListener("mousemove", mouseMoveOutOfTheBox);

  document.addEventListener("mousemove", mouseMoveInTheBox);
}
