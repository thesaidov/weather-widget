import { useEffect, useReducer } from "react";
import { weatherReducer, initialState } from "../reducers/weatherReducer";
// import request from "../services/WeatherService";
import {fetchWeatherFromAPI} from "../services/WeatherService";

const useWeatherData = () => {
  const [state, dispatch] = useReducer(weatherReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWeatherFromAPI(state.city);
        dispatch({ type: "FETCH_WEATHER", payload: data });
      } catch (err) {
        dispatch({ type: "SET_ERROR", payload: err.message });
      }
    };

    fetchData();
  }, [state.city]);

  return { state, dispatch };
};

export default useWeatherData;
