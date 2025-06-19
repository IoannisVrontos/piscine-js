export function getArchitects() {
  const architects = document.getElementsByTagName("a");
  const nonArchitects = document.getElementsByTagName("span");

  return [[...architects], [...nonArchitects]];
}

export function getClassical() {
  const classicalArchitects = document.querySelectorAll("a.classical");

  const nonClassicalArchitects = document.querySelectorAll("a:not(.classical)");

  return [[...classicalArchitects], [...nonClassicalArchitects]];
}

export function getActive() {
  const classicalArchitectsActive =
    document.querySelectorAll("a.classical.active");

  const classicalArchitectsNonActive = document.querySelectorAll(
    "a.classical:not(.active)"
  );

  return [[...classicalArchitectsActive], [...classicalArchitectsNonActive]];
}
export function getBonannoPisano() {
  const bonannoPisano = document.getElementById("BonannoPisano");
  const remainingArchitects = document.querySelectorAll(
    "a.classical.active:not(.BonannoPisano)"
  );
  return [bonannoPisano, [...remainingArchitects]];
}
