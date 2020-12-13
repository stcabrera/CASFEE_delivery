import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
    
    let locationsData = localStorage.getItem("Markers");
    let locations = JSON.parse(locationsData);
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [8.54, 47.37],
        zoom: 12
      });

      locations.forEach(function (coords) {
        new mapboxgl.Marker().setLngLat(coords).addTo(map);
    });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div className="map-container" ref={el => (mapContainer.current = el)} />;
};

export default Map;