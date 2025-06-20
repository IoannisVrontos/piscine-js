function dogYears(planet, dogAgeInSeconds) {
  const earthPeriodInSec = 31557600;

  const planets = {
    earth: 1,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
  };

  return Number(
    ((dogAgeInSeconds / (planets[planet] * earthPeriodInSec)) * 7).toFixed(2)
  );
}

console.log(dogYears("mars", 10000000000));
