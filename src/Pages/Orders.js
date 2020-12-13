import React from 'react';
import '../App.css';
import RoutesComponent from '../Components/RoutesComponent';
import GetOrders from '../Components/Orders/OrdersComponent';
import DriversComponent from '../Components/DriversComponent';
import Map from '../Components/Map/showMap'

function Orders() {
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
                    <Map />
                    <div className="driverBox">
                        <DriversComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders;