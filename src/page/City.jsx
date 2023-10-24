import React from "react";
import { useParams } from "react-router-dom";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import CityCard from "../component/CityCard";
import "../css/City.css";
import cityData from "../constants/City";
import { useNavigate } from "react-router-dom";

const key = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const City = () => {
  const { title } = useParams();
  const city = cityData.find((item) => item.title === title);
  const navigate = useNavigate();

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

  const gifSrc = gifPaths[title];
  return (
    <div className="City">
      <div className="back" onClick={() => navigate("/")}>
        {isLoaded && (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            onLoad={onLoad}
            onUnmount={onUnmount}
          />
        )}
        <img className="gif" src={gifSrc} alt={city.name} width={1440} />
      </div>
      <div className="card_box">
        <CityCard name={city.name} title={city.title} />
      </div>
    </div>
  );
};

export default City;

const gifPaths = {
  신촌: require("../assets/background/신촌.gif"),
  혜화: require("../assets/background/혜화.gif"),
  덕수궁: require("../assets/background/덕수궁.gif"),
  잠실: require("../assets/background/잠실.gif"),
  남산: require("../assets/background/남산.gif"),
  여의도: require("../assets/background/여의도.gif"),
  석촌: require("../assets/background/석촌.gif"),
  상암: require("../assets/background/상암.gif"),
  성북동: require("../assets/background/성북동.gif"),
  정릉: require("../assets/background/정릉.gif"),
  한강: require("../assets/background/한강.gif"),
  지하철: require("../assets/background/지하철.gif"),
  압구정: require("../assets/background/압구정.gif"),
  성수: require("../assets/background/성수.gif"),
  동대문: require("../assets/background/동대문.gif"),
  홍대: require("../assets/background/홍대.gif"),
  대치: require("../assets/background/대치.gif"),
  인사동: require("../assets/background/인사동.gif"),
  을지로: require("../assets/background/을지로.gif"),
  북한산: require("../assets/background/북한산.gif"),
  디디피: require("../assets/background/디디피.gif"),
  서울역: require("../assets/background/서울역.gif"),
  동묘: require("../assets/background/동묘.gif"),
  경복궁: require("../assets/background/경복궁.gif"),
};
