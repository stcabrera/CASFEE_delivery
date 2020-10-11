import React from 'react';
import '../App.css';
import RoutesComponent from '../Components/RoutesComponent';
import GetOrders from '../Components/OrdersComponent';
import InitMap from '../Components/OrdersMap';

function Orders() {
    return (
        <div>
            <div className="flex">
                <div className="row a_row">
                    <GetOrders />
                </div>
                <div className="row b_row">
                    <RoutesComponent />
                </div>
                <div id="c_Row">
                    <div id="map">
                        <InitMap
                            googleMapURL= {"https://maps.googleapis.com/maps/api/js?key=AIzaSyC2hYFMzz1UXGgTNiLBwdWAGAy8Y2hIpx8&callback=initMap"}
                            containerElement= {<div style={{ height: '90vh' }} />}
                            mapElement= {<div style={{ height: '100%' }} />}
                            loadingElement= {<p>Loading</p>}
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Orders;