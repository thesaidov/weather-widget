import { Icon } from "@iconify/react/dist/iconify.js";
import { useTheme } from "../context/ThemeContext";

const SettingsPanel = ({dispatch, state}) => {
  
  const { theme, toggleTheme } = useTheme();
   function handleClick(e) {
    e.preventDefault()
    dispatch({ type: "TOGGLE_UNIT"})
   }
  return (
    <div className="flex animate-fadeIn md:gap-32 sm:gap-24 max-sm:gap-9">
      <div className="setting-item">
        <button onClick={handleClick} className="text-6xl">
          {state.unit ? "Kelvin(°K)" : "Celsius(°C)"}
        </button>
      </div>
      <div className="setting-item">
        <button onClick={toggleTheme}>
          {theme ? <Icon icon="line-md:sun-rising-loop" width="54" height="54" /> : <Icon icon="line-md:moon-loop" width="54" height="54" />} 
        </button>
      </div>
    </div>
  );
};

export default SettingsPanel;
