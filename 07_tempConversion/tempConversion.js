const convertToCelsius = function(fahrenheitDegree) {
  return Math.round((fahrenheitDegree - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function(celsiusDegree) {
  return Math.round(((celsiusDegree * 9) / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
