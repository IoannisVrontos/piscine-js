function chunk(nums = [], size) {
  let chunks = [];
  let arr = [];
  for (let i = 0; i < nums.length; i += size) {
    for (let j = i; j < i + size && j < nums.length; j++) {
      arr.push(nums[j]);
    }
    chunks.push(arr);
    arr = [];
  }
  return chunks;
}
