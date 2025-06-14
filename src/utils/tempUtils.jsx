export const celsiusToFahrenheit = (c) => (c * 9) / 5 + 32;
export const fahrenheitToCelsius = (f) => (((f - 32) * 5) / 9);

export const calculateForecastStats = (forecast) => {
  const temps = forecast.map((f) => f.temp);
  const avg = temps.reduce((a, b) => a + b, 0) / temps.length;
  const min = Math.min(...temps);
  const max = Math.max(...temps);
  return { min, max, avg: Number(avg.toFixed(2)) };
};
