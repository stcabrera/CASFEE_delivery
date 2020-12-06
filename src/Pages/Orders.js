import React from 'react';
import '../App.css';
import RoutesComponent from '../Components/RoutesComponent';
import GetOrders from '../Components/OrdersComponent';
import SimpleMap from '../Components/Map/OrdersMap';
import DriversComponent from '../Components/DriversComponent';

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
                    <SimpleMap />
                    <div className="driverBox">
                        <DriversComponent />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Orders;