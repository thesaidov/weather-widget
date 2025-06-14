import WeatherWidget from "./components/WeatherWidget";
import ThemeProvider from "./context/ThemeContext";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <div className="">
          <WeatherWidget />
        </div>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
