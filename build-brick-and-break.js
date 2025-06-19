export function build(amount) {
  let i = 1;
  let middle = 2;

  const buildInterval = setInterval(() => {
    if (i > amount) {
      clearInterval(buildInterval);
      return;
    }

    let body = document.querySelector("body");
    let brick = document.createElement("div");
    brick.setAttribute("id", "brick-" + i);

    if (i === middle) {
      brick.setAttribute("foundation", true);
      middle += 3;
    }
    body.append(brick);
    console.log(brick);
    i++;
  }, 100);
}

export function repair(...ids) {
  for (const id of ids) {
    let elem = document.getElementById(id);

    if (elem.hasAttribute("foundation")) {
      elem.setAttribute("repaired", "in progress");
    } else {
      elem.setAttribute("repaired", true);
    }
    console.log(elem);
  }
}
export function destroy() {
  const bricks = document.querySelectorAll('[id^="brick-"]');
  const lastBrick = bricks[bricks.length - 1].id;
  const elem = document.getElementById(lastBrick);
  elem.remove();
}
