import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';

const InitMap = (props) => {

    return (
        <GoogleMap defaultZoom={14}
            defaultCenter={{ lat: 47.38, lng: 8.53 }}
            googleMapURL={"https://maps.googleapis.com/maps/api/js?key=AIzaSyC2hYFMzz1UXGgTNiLBwdWAGAy8Y2hIpx8&callback=initMap"}
            containerElement={<div style={{ height: '90vh' }} />}
            mapElement={<div style={{ height: '100%' }} />}
            loadingElement={<p>Loading</p>}
        >

            <Marker
                position={
                    { lat: 47.38, lng: 8.53 }
                }
            />

        </GoogleMap>
    )
}
export default withScriptjs(
    withGoogleMap(
        InitMap
    )
)