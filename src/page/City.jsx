import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Card from "../component/Card";
import "../css/City.css";
import cityData from "../constants/City";
import { useEffect } from "react";

const key = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const City = () => {
  const { title } = useParams();
  const city = cityData.find((item) => item.title === title);

  const center = {
    lat: city.lat,
    lng: city.lng,
  };

  return (
    <div className="City">
      <LoadScript googleMapsApiKey={key}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={18}
        />
      </LoadScript>
      <div className="city-card">
        <Card name={city.name} title={city.title} />
      </div>
    </div>
  );
};

export default City;
