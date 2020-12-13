import React from 'react';
import '../index.css';
import NewOrders from '../Components/Orders/NewOrders';


function Dashboard() {
    return (
        <div className="bodyWrapper">
            <div className="flex">
                <div className="row a_row">
                    <NewOrders />
                </div>
                <div className="row big_row">
                    blub
                </div>
                <div className="row big_row">
                    blub
                </div>
            </div>
        </div>
    )
}

export default Dashboard;