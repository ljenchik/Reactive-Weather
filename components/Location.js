import React from "react";
import WeatherCard from "./WeatherCard";

const Location = ({ data, location }) => {
    if (location) {
        const foundCity = data.find((item) => item.city === location);
        return (
            <>
                {foundCity ? (
                    <WeatherCard data={foundCity} />
                ) : (
                    <h5>Location not found</h5>
                )}
            </>
        );
    }
};

export default Location;
