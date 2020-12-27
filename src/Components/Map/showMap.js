import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import GetMarkers from '../Map/Marker';

function ShowMap() {
  let orders = GetMarkers();

  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [8.54, 47.37],
        zoom: 12
      });

      function setMarkers() {
        orders.forEach((coords) => {
          new mapboxgl.Marker()
            .setLngLat([coords.lat, coords.lng])
            .setPopup(new mapboxgl.Popup({ offset: 25 })
              .setHTML(
                coords.name + '<br>' +
                coords.adress
              ))
            .addTo(map);
        })
      }

      map.on("load", () => {
        setMap(map);
        map.resize();
        setMarkers();
        map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
      });
    }

    if (!map) initializeMap({ setMap, mapContainer });

  }, [map]);

  return <div className="map-container" ref={el => (mapContainer.current = el)} />;
};

export default ShowMap;