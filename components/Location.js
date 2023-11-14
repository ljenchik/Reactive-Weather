import React from "react";
import WeatherCard from "./WeatherCard";

const Location = (props) => {
    const foundCity = props.data.find((item) => item.city === props.location);
    return (
        <>
            <WeatherCard data={foundCity} />
        </>
    );
};

export default Location;
