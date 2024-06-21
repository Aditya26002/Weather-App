import { useEffect, useState } from "react";
import Forecast from "./Components/Forecast";
import Inputs from "./Components/Inputs";
import TempAndDetails from "./Components/TempAndDetails";
import TimeAndLoc from "./Components/TimeAndLoc";
import TopButtons from "./Components/TopButtons";
import getFormattedWeatherData from "./Services/weatherServices.js";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const App = () => {
  const [query, setQuery] = useState({ q: "delhi" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    const message = query.q ? query.q : "Current location";
    toast.info(
      `Fetching weather data for ${capitalizeFirstLetter(message)}...`
    );

    const data = await getFormattedWeatherData({ ...query, units }).then(
      (data) => {
        
        if (data === "error") {
          toast.error("Error fetching weather data. Please try again later.");
          return;
        } else if (data === "not found") {
          toast.error("City not found. Please try again.");
          return;
        } else if (data === "no internet") {
          toast.error("No internet connection. Please try again later.");
          return;
        } else if (data === "invalid") {
          toast.error("Invalid input. Please try again.");
          return;
        } else if (data === "timeout") {
          toast.error("Request timed out. Please try again later.");
          return;
        } else if (data === "server error") {
          toast.error("Server error. Please try again later.");
          return;
        } else if (data === "unknown error") {
          toast.error("Unknown error. Please try again later.");
          return;
        } else {
          toast.success("Weather data fetched successfully!");
        }

        setWeather(data);
      }
    );
  };

  useEffect(() => {
    getWeather();
  }, [query]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-400 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-blue-400 to-blue-700";
    return "from-yellow-400 to-orange-700";
  };

  return (
    <div
      className={`mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br  shadow-xl shadow-gray-400 ${formatBackground()}`}
    >
      <TopButtons setQuery={setQuery} units={units} />
      <Inputs setQuery={setQuery} setUnits={setUnits} />

      {weather && (
        <>
          <TimeAndLoc weather={weather} />
          <TempAndDetails weather={weather} />
          <Forecast title="3 hour step forecast" data={weather.hourly} />
          <Forecast title="daily forecast" data={weather.daily} />
        </>
      )}

      <ToastContainer autoClose={2500} hideProgressBar={true} theme="colored" />
    </div>
  );
};

export default App;
