import React, { useEffect, useState } from 'react';
import NewOrders from '../Components/NewOrders';
import db from '../lib/firebase';




function GetOrders() {
  
  const [orders, setOrders] = useState([]);
  const noOrders = !orders || (orders && orders.length === 0);

    useEffect(() => {
        db.collection('Orders').onSnapshot((snapshot) => {
          setOrders(snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
                
            })))
            
        })
    }, []);

    return (
      <div>
      <div className="RowTitle flex">
        <h2>Orders</h2>
      </div>
      
      <div className="order__List">
      <NewOrders />
      <ul>
        {!noOrders && orders.map((orders) => (
          <li className="list__Item" key={orders.id}>
            <div className="order__Title flex">
              <div className="order__id">#{orders.id}</div>
              <div className="order__Time">{orders.date_created}</div>
              
            </div>

            <div className="orderBox">
              <div className="flex">
                <div>{orders.firstName}</div>
                <div>{orders.lastName}</div>
              </div>

              <div>{orders.adress}</div>
              <div>{orders.postcode}</div>
              <div>{orders.city}</div>
              <div>{orders.total} CHF</div>
              <div>{orders.paymentMethod}</div>
            </div>
          </li>
        ))}
      </ul></div>
    </div>
    )
}

export default GetOrders

