import React from 'react';
import '../App.css';
import RoutesComponent from '../Components/RoutesComponent';
import GetOrders from '../Components/Orders/OrdersComponent';
import DriversComponent from '../Components/DriversComponent';
import ShowMap from '../Components/Map/showMap';
import MarkerPopup from '../Components/Map/Popup';


function Orders() {
    return (
        <div className="bodyWrapper">
            <div className="flex">
                <div className="row a_row">
                    <GetOrders />
                </div>
                <div className="row b_row">
                    <RoutesComponent />
                    <MarkerPopup />

                </div>
                <div id="c_Row">
                    <ShowMap />
                    <div className="driverBox">
                        <DriversComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders;