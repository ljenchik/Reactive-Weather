import React, { useState } from "react";
import cities from "./data";
import WeatherCard from "./components/WeatherCard";
import Form from "./components/Form";
import Location from "./components/Location";

function App() {
    const [location, setLocation] = useState("");
    return (
        <div className="app">
            <h1 className="title">REACTIVE WEATHER</h1>
            <h3 className="subtitle">Up to the minute weather news</h3>
            <Form location={location} setLocation={setLocation} />
            <Location data={cities} location={location} />
            <div className="app">
                {cities.map((city) => (
                    <WeatherCard data={city} />
                ))}
            </div>
        </div>
    );
}

export default App;
