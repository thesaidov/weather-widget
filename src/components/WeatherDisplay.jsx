import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { kelvinToCelsius } from "../utils/tempUtils";

const WeatherDisplay = ({ data, unit }) => {
  if (!data || !data.temp || !data.description) return <div>Loading current weather...</div>;
  

  const temperatureUnit = unit ? "°K" : "°C";

  let desc

  if (data.description == "light rain") {
    desc = <Icon icon="lets-icons:rain-light" width="84" height="84" />
  }else if(data?.description == "overcast clouds"){
    desc = <Icon icon="bi:clouds-fill" width="84" height="84" />
  }else if(data.description == "broken clouds"){
    desc = <Icon icon="solar:clouds-broken" width="84" height="84" />
  }else if(data.description == "scattered clouds"){
    desc = <Icon icon="material-symbols:cloudy" width="84" height="84" />
  }else if(data.description == "few clouds"){
    desc = <Icon icon="solar:clouds-bold-duotone" width="84" height="84" />
  }else if(data.description == "clear sky" && data.description == "sun"){
    desc = <Icon icon="ph:sun-thin" width="84" height="84" />
  }else{
    desc = <Icon icon="ph:sun-thin" width="84" height="84" />
  }

  return (
    <div className="mb-10 animate-fadeIn">
      <h2>Current Weather</h2>
      <div className="flex gap-10 text-6xl">
        <span className="uppercase">{unit ? data.temp : kelvinToCelsius(data.temp).toFixed(2)}{temperatureUnit}</span>
        <span className="capitalize">{desc}</span>
      </div>
    </div>
  );
};

export default WeatherDisplay;