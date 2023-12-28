import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import "./Map.css";

const Map = () => {

  const [coordinates, setCoordinates] = useState(null);
  const position = [ 6.2300,-75.5000]

  useEffect(() => {
    fetch(
      "https://usc1.contabostorage.com/d069ea98e2df4b0e9e99b1e7b2ca9a58:pruebasceluweb/jsonciudad/medellin.geojson"
    )
      .then((response) => response.json())
      .then((data) => setCoordinates(data));
  }, []);

  const blackOptions = {
    color: "black",
  };

  return (
    <div className="App">
      {coordinates && (
        <MapContainer center={position} zoom={11.5} scrollWheelZoom={true} className="mapa">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <GeoJSON data={coordinates} pathOptions={blackOptions} />
        </MapContainer>
      )}
    </div>
  );
};

export default Map;
