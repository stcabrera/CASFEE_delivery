import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

//let key = AIzaSyC2hYFMzz1UXGgTNiLBwdWAGAy8Y2hIpx8;

const InitMap = (props) => {
    return(
        <GoogleMap defaultZoom={13}
        defaultCenter={{ lat: 47.3769646, lng: 8.53088379}}
        />
    )
}
export default withScriptjs(
    withGoogleMap(
        InitMap
    )
)