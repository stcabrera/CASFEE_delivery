import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl'; 
import '../App.css';
import RoutesComponent from '../Components/RoutesComponent';
import GetOrders from '../Components/OrdersComponent';
import DriversComponent from '../Components/DriversComponent';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;


let locations = [
    [8.568986, 47.363136],
    [8.555, 47.36],
    [8.55, 47.38]
];

function Orders() {
    const mapContainerRef = useRef(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [8.54, 47.37],
            zoom: 13,
        });

        locations.forEach(function(coords) {
            new mapboxgl.Marker().setLngLat(coords).addTo(map);
        });

        map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

        return () => map.remove();

        

    }, []);


    return (
        <div className="bodyWrapper">
            <div className="flex">
                <div className="row a_row">
                    <GetOrders />
                </div>
                <div className="row b_row">
                    <RoutesComponent />
                </div>
                <div id="c_Row">
                    <div className="map-container" ref={mapContainerRef} />
                    <div className="driverBox">
                        <DriversComponent />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Orders;