import React, { useEffect, useState } from "react";
import Search from "./Search";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState("");

  async function fetchWeatherApi(params) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${params}&appid=eb5b35b710b0f74194134fed3bea05c5`
      );
      const data = await response.json();

      if (data) {
        console.log(data);
        setWeatherData(data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log("error", error);
    }
  }

  function handleSubmit() {
    fetchWeatherApi(search);
    // setSearch('');
  }
  function getCurrentDate() {
    const date = new Date().toLocaleString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return date;
  }
 useEffect(()=>{
    fetchWeatherApi('bangalore');
 },[])
  return (
    <div>
      <Search
        searchData={search}
        setSearchData={setSearch}
        handleSubmit={handleSubmit}
      />
      <div>
        {loading ? (
          <h1>Loading the Data.. please wait...</h1>
        ) : (
          <div className="container">
            <div className="place">
              {weatherData?.name}, <span>{weatherData?.sys?.country} </span>
            </div>
            <div className="date">{<div>{getCurrentDate()}</div>}</div>
            <div>
              <div className="temperature">{weatherData?.main?.temp} </div>
              <p className="desc">
                {weatherData && weatherData.weather && weatherData.weather[0]
                  ? weatherData.weather[0].description
                  : ""}
              </p>
            </div>
          

            <div className="windAndHumidity">
              <div className="wind commonClass">
                <p>{weatherData?.wind?.speed} windSpeed</p>
              </div>
              <div className="humdity commonClass">
                <p>{weatherData?.main?.humidity}%</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
