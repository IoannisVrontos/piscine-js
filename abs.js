const isPositive = (num) => (num <= 0 ? false : true);

const abs = (num) => (isPositive(num) || num === 0 ? num : num * -1);
