function getURL(dataSet) {
  const urlRegex = /https?:\/\/[\w.-]+(?::\d+)?(?:\/[^\s]*)?/g;
  const matches = dataSet.match(urlRegex);

  return matches ? matches : [];
}

function greedyQuery(dataSet) {
  const urlRegex =
    /https?:\/\/[\w.-]+\.[a-zA-Z]{2,}(?:\/[^\s]*)?\?(?:[^&]*&){2}[^&]*/g;
  const matches = dataSet.match(urlRegex);

  return matches ? matches : [];
}

function notSoGreedy(dataSet) {
  const urlRegex =
    /https?:\/\/[\w.-]+\.[a-zA-Z]{2,}(?:\/[^\s]*)?\?(?:[^&]*&){1,2}[^&]*/g;
  const matches = dataSet.match(urlRegex);

  return matches ? matches : [];
}
