import React from "react";
import { kelvinToCelsius } from "../utils/tempUtils";

const ForecastList = ({ forecast, unit}) => {
  
  const unitSymbol = unit ?  "°K" : "°C"
  return (
    <div className="flex w-full md:text-2xl text-center sm:text-xl animate-fadeIn">
      {forecast.map((day, index) =>{ 
        return(
        <div key={index} className="w-full">
          <div className="forecast-day">{day.day}</div>
          <div className="forecast-temp">{unit ? day.temp : kelvinToCelsius(day.temp).toFixed(2)}{unitSymbol}</div>
        </div>
      )})}
    </div>
  );
};

export default ForecastList;