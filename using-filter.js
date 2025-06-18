function filterShortStateName(words) {
  return words.filter((word) => word.length < 7);
}

function filterStartVowel(words) {
  return words.filter((word) => /^[aeiouAEIOU]/.test(word));
}

function filter5Vowels(words) {
  return words.filter((word) => (word.match(/[aeiou]/gi) || []).length >= 5);
}

function filter1DistinctVowel(words) {
  return words.filter((word) => {
    const vowels = word.match(/[aeiou]/gi) || [];
    const distinctVowels = new Set(vowels.map((v) => v.toLowerCase()));
    return distinctVowels.size === 1 && vowels.length > 0;
  });
}

function multiFilter(obj) {
  obj = obj.filter((item) => item.capital.length >= 8);
  obj = obj.filter((item) => !/^[aeiouAEIOU]/.test(item.name));
  obj = obj.filter((item) => {
    const vowels = item.tag.match(/[aeiou]/gi) || [];
    const distinctVowels = new Set(vowels.map((v) => v.toLowerCase()));
    return distinctVowels.size >= 1;
  });
  obj = obj.filter((item) => {
    return item.region !== "South";
  });
  return obj;
}

// module.exports = {
//   filterShortStateName,
//   filterStartVowel,
//   filter5Vowels,
//   filter1DistinctVowel,
//   multiFilter,
// };
