const convertToCelsius = function(tempInFahrenheit) {
  const tempInCelsius = 5 / 9 * (tempInFahrenheit - 32);
  return roundToOneDecimalPlace(tempInCelsius);
};

const convertToFahrenheit = function(tempInCelsius) {
  const tempInFahrenheit = 32 + (9 / 5 * tempInCelsius);
  return roundToOneDecimalPlace(tempInFahrenheit);
};

function roundToOneDecimalPlace(num) {
  return Math.round(num * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
