function hasCity(country, cities) {
  return function (city) {
    if (cities.some((c) => c === city)) {
      return `${city} is a city from ${country}`;
    } else {
      return `${city} is not a city from ${country}`;
    }
  };
}
