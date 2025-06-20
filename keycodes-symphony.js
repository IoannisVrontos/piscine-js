export function compose() {
  document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (key.length === 1 && key >= "a" && key <= "z") {
      const note = document.createElement("div");
      note.classList.add("note");
      note.textContent = key;

      const letterIndex = key.charCodeAt(0) - "a".charCodeAt(0);
      const hue = (letterIndex / 26) * 360;
      note.style.backgroundColor = `hsl(${hue}, 90%, 60%)`;

      document.body.appendChild(note);
    } else if (key === "Backspace") {
      const notes = document.querySelectorAll(".note");
      const lastNote = notes[notes.length - 1];
      if (lastNote) {
        lastNote.remove();
      }
    } else if (key === "Escape") {
      const notes = document.querySelectorAll(".note");
      notes.forEach((note) => note.remove());
    }
  });
}
