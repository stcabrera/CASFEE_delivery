import React from 'react';
import '../index.css';
import Signup from '../Components/Security/Signup';

function Dashboard() {
    return (
        <div className="bodyWrapper">
            <div className="row full_row">
                <div className="blur">
                    <Signup />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;