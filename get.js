function get(src, path) {
  const parts = path.split(".");
  let current = src;

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (current === undefined || current === null) {
      return undefined;
    }
    current = current[part];
  }

  return current;
}
