import React from "react";
import WeatherCard from "./WeatherCard";

const Location = ({ data, location }) => {
    const foundCity = data.find((item) => item.city === location);
    return <>{foundCity ? <WeatherCard data={foundCity} /> : ""}</>;
};

export default Location;
