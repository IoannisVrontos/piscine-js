
function ionOut(str) {
    const regex = /\b(\w*t)ion\b/g;

    return Array.from(str.matchAll(regex), match => match[1]);
}

