import React, { useState } from "react";

const Form = ({ setLocation, setMessage }) => {
    const [typedLocation, setTypedLocation] = useState("");
    const handleLocation = (event) => {
        setTypedLocation(event.target.value);
        setMessage("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setLocation(typedLocation);
        if (!typedLocation) {
            setMessage("Enter location");
        }
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
