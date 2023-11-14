import React from "react";
import sunny from "../assets/Sunny.svg";
import partlyCloudy from "../assets/PartlyCloudy.svg";
import rainy from "./../assets/Rainy.svg";
import cloudy from "../assets/Cloudy.svg";
import snowy from "../assets/Snowy.svg";

function WeatherCard({ data }) {
    return (
        <div className="card">
            <div class="card-body">
                <h3 className="card-title">{data.city}</h3>
                <div className="img-container">
                    <img
                        className="card-img-top"
                        src={
                            data.forecast === "Sunny"
                                ? sunny
                                : data.forecast === "Partly cloudy"
                                ? partlyCloudy
                                : data.forecast === "Rainy"
                                ? rainy
                                : data.forecast === "Cloudy"
                                ? cloudy
                                : data.forecast === "Snowy"
                                ? snowy
                                : ""
                        }
                        alt="Card image cap"
                        id="icon"
                    />
                </div>
                <h4 className="card-text">The weather in {data.city} is </h4>
                <h5 className="card-text">{data.temperature}C°</h5>
                <h5 className="card-text">It is {data.forecast} out today</h5>
            </div>
        </div>
    );
}

export default WeatherCard;
