export function getArchitects() {
  const architects = document.getElementsByTagName("a");
  const nonArchitects = document.getElementsByTagName("span");

  console.log([[...architects], [...nonArchitects]]);
  return [[...architects], [...nonArchitects]];
}

export function getClassical() {
  const classicalArchitects = document.querySelectorAll("a.classical");

  const nonClassicalArchitects = document.querySelectorAll("a:not(.classical)");

  console.log([[...classicalArchitects], [...nonClassicalArchitects]]);
  return [[...classicalArchitects], [...nonClassicalArchitects]];
}

export function getActive() {
  const classicalArchitectsActive =
    document.querySelectorAll("a.classical.active");

  const classicalArchitectsNonActive = document.querySelectorAll(
    "a.classical:not(.active)"
  );

  console.log([
    [...classicalArchitectsActive],
    [...classicalArchitectsNonActive],
  ]);
  return [[...classicalArchitectsActive], [...classicalArchitectsNonActive]];
}
export function getBonannoPisano() {
  const bonannoPisano = document.getElementById("BonannoPisano");
  const remainingArchitects = document.querySelectorAll(
    "a.classical.active:not(.BonannoPisano)"
  );
  console.log(bonannoPisano, [...remainingArchitects]);
}
