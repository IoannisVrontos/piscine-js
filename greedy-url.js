function getURL(dataSet){
    const urlRegex = /https?:\/\/[\w.-]+\.[a-zA-Z]{2,}(?:\/[^\s]*)?/g;
    const matches = dataSet.match(urlRegex);

    return matches ? matches : [];
}

function greedyQuery(dataSet) {
    const urlRegex = /https?:\/\/[\w.-]+\.[a-zA-Z]{2,}(?:\/[^\s]*)?\?(?:[^&]*&){2}[^&]*/g;
    const matches = dataSet.match(urlRegex);

    return matches ? matches : [];
}

function notSoGreedy(dataSet) {
    const urlRegex = /https?:\/\/[\w.-]+\.[a-zA-Z]{2,}(?:\/[^\s]*)?\?(?:[^&]*&){1,2}[^&]*/g;
    const matches = dataSet.match(urlRegex);

    return matches ? matches : [];
}


// const dataSet = 'qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you'

// console.log(getURL(dataSet));