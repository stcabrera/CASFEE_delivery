import React from 'react';
//import ReactDOM from 'react-dom';
import '../App.css';
//import App from '../App';
import RoutesComponent from '../Components/RoutesComponent';
import GetOrders from '../Components/OrdersComponent';


function Orders() {
    return(
        <div>
               <div className="flex">
                <div id="a_Row">
                <GetOrders />

                
                </div>
                <div id="b_Row">
                    <RoutesComponent />
                    
                </div>
                <div id="c_Row">cc</div>
            </div>
            </div>
        
    )
}

export default Orders;