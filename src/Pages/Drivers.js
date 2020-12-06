import React from 'react';
//import { Router } from 'react-router-dom';
import '../App.css';
import DriversComponent from '../Components/DriversComponent';
import RoutesComponent from '../Components/RoutesComponent';
import RoutesMap from '../Components/Map/RoutesMap';

function Drivers() {

    return (

        <div>
            <div className="flex">
                <div className="row">
                    <DriversComponent />
                </div>
                <div className="row">
                    <RoutesComponent />
                </div>
                <div id="c_Row"><div className="responsive_map">
                    <RoutesMap />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Drivers;