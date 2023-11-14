import React, { useState } from "react";
import cities from "./data";
import WeatherCard from "./components/WeatherCard";
import Location from "./components/Location";

function App() {
    const [location, setLocation] = useState("London");
    return (
        <div className="app">
            <h1 className="title">REACTIVE WEATHER</h1>
            <h3 className="subtitle">Up to the minute weather news</h3>
            <Location
                data={cities}
                location={location}
                setLocation={setLocation}
            />
            <div className="app">
                {cities.map((city) => (
                    <WeatherCard data={city} />
                ))}
            </div>
        </div>
    );
}

export default App;
