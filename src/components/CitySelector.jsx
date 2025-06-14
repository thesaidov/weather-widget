/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useMemo, useContext } from "react";
import debounce from "../utils/debounce";
import useWeatherData from "../hooks/useWeatherData";
import { ThemeContext } from "../context/ThemeContext";

const CITIES = ["London", "New York", "Tokyo", "Sydney", "Cairo"];

const CitySelector = ({ city, dispatch }) => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    e.preventDefault
    const value = e.target.value;
    setSearch(value);
    debouncedValidate(value);
  };

  const validate = (value) => {
    if (!CITIES.includes(value)) {
      setError("Please select a valid city from the list.");
    } else {
      setError(null);
      dispatch({ type: "CHANGE_CITY", payload: value });
    }
  };

  const debouncedValidate = useMemo(() => debounce(validate, 300), []);

  const theme = useContext(ThemeContext)
  return (
    <div className="flex justify-between animate-fadeIn">
      <div className="city-selector">
        <input
          type="text"
          list="city-list"
          placeholder="Search city..."
          value={search}
          onChange={handleChange}
          className={`${theme.theme ? "border-black" : "border-white"} outline-none border-[1px] px-4 py-1 rounded-md`}
        />
        <datalist id="city-list">
          {CITIES.map((c) => (
            <option key={c} value={c} />
          ))}
        </datalist>
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
};

export default CitySelector;