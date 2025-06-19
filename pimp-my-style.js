import { styles } from "./pimp-my-style.data.js";

export function pimp() {
  const btn = document.getElementsByClassName("button")[0];

  const isUnpimping = btn.classList.contains("unpimp");

  if (isUnpimping) {
    for (let i = styles.length - 1; i >= 0; i--) {
      if (btn.classList.contains(styles[i])) {
        btn.classList.remove(styles[i]);
        if (i == 0) {
          btn.classList.remove("unpimp");
        }
        return;
      }
    }
  } else {
    for (let i = 0; i < styles.length; i++) {
      if (!btn.classList.contains(styles[i])) {
        btn.classList.add(styles[i]);

        if (i === styles.length - 1) {
          btn.classList.add("unpimp");
        }

        return;
      }
    }
  }
}
