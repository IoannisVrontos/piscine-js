function sameAmount(str, regExp1, regExp2) {
  const ensureGlobal = (regex) => {
    let flags = regex.flags;
    if (!flags.includes("g")) {
      flags += "g";
    }
    return new RegExp(regex.source, flags);
  };

  const globalReg1 = ensureGlobal(regExp1);
  const globalReg2 = ensureGlobal(regExp2);

  const matches1 = str.match(globalReg1);
  const matches2 = str.match(globalReg2);

  const count1 = matches1 ? matches1.length : 0;
  const count2 = matches2 ? matches2.length : 0;

  return count1 === count2;
}
