import React from 'react';
import '../index.css';
import NewOrders from '../Components/NewOrders';


function Dashboard() {
    return (
        <div>
            <div className="flex">
                <div className="row a_row">
                    <NewOrders />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;