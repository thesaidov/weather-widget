

export const fetchWeatherFromAPI = async (city) => {
  const API_KEY = import.meta.env.VITE_REACT_APP_OWM_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch weather data.");
  }

  const data = await response.json();

  const current = {
    temp: data.list[0].main.temp,
    description: data.list[0].weather[0].description,
  };

  const forecast = data.list
    .filter((entry, index) => index % 8 === 0)
    .map((entry) => ({
      day: new Date(entry.dt_txt).toLocaleDateString("en-US", { weekday: "short" }),
      temp: entry.main.temp,
    }));

  return {
    city: data.city.name,
    current,
    forecast,
  };
};