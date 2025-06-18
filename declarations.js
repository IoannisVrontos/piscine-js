function deepFreeze(object) {
  const propNames = Reflect.ownKeys(object);

  for (const name of propNames) {
    const value = object[name];

    if ((value && typeof value === "object") || typeof value === "function") {
      deepFreeze(value);
    }
  }

  return Object.freeze(object);
}

const escapeStr = "`\\/\"'";

const arr = [4, "2"];

const obj = {
  str: "",
  num: 0,
  bool: false,
  undef: undefined,
};

const nested = {
  arr: [4, undefined, "2"],
  obj: {
    str: "",
    num: 0,
    bool: false,
  },
};

deepFreeze(nested);
deepFreeze(arr);
deepFreeze(obj);
