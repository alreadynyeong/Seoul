import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { GoogleMap, LoadScript, useJsApiLoader } from "@react-google-maps/api";
import Card from "../component/Card";
import "../css/City.css";
import cityData from "../constants/City";

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

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: key,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    map.setZoom(18);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <div className="City">
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          onLoad={onLoad}
          onUnmount={onUnmount}
        />
      )}
      <div className="city-card">
        <Card name={city.name} title={city.title} />
      </div>
    </div>
  );
};

export default City;
