import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../Components/Marker';


function SimpleMap(props) {
    const center = {
        lat: 47.376888,
        lng: 8.541694
    };
    const zoom = 11;

    return (
        <div style={{ height: '70vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyC2hYFMzz1UXGgTNiLBwdWAGAy8Y2hIpx8' }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                <Marker
                    lat={47.376888}
                    lng={8.541694}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
}

export default SimpleMap;
