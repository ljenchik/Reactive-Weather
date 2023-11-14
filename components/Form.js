import React, { useState } from "react";

const Form = ({ setLocation }) => {
    const [typedLocation, setTypedLocation] = useState("");

    const handleLocation = (event) => {
        setTypedLocation(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setLocation(typedLocation);
        setTypedLocation("");
    };
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <label className="city">
                    City:
                    <input
                        type="text"
                        value={typedLocation}
                        onChange={handleLocation}
                    />
                </label>
                <button className="btn btn-primary" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;
