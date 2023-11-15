import React from "react";
import WeatherCard from "./WeatherCard";

const Location = ({ data, location, setMessage }) => {
    if (location) {
        const foundCity = data.find((item) => item.city === location);
        if (!foundCity) {
            setMessage("Location not found");
            return "";
        } else {
            setMessage("");
            return <WeatherCard data={foundCity} />;
        }
    }
};

export default Location;
