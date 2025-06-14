import React from "react";
import CitySelector from "./CitySelector";
import WeatherDisplay from "./WeatherDisplay";
import ForecastList from "./ForecastList";
import DataVisualization from "./DataVisualization";
import SettingsPanel from "./SettingsPanel";
import useWeatherData from "../hooks/useWeatherData";
import { Icon } from "@iconify/react/dist/iconify.js";

const WeatherWidget = () => {
  const weatherData = useWeatherData();

  return (
    <div className="h-full flex flex-col gap-10  ">
      <div className="flex justify-between gap-5 items-center">
        <CitySelector dispatch={weatherData.dispatch} />
        <SettingsPanel dispatch={weatherData.dispatch} state={weatherData.state}/>
      </div>
      <div>
        <WeatherDisplay data={weatherData.state.current } unit={weatherData.state.unit}/>
        <div className="flex flex-col gap-14 lg:w-3/4 md:w-full">
          <ForecastList forecast={weatherData.state.forecast} unit={weatherData.state.unit}/>
          <DataVisualization data={weatherData.state.forecast} />
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;