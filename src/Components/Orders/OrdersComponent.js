import React from 'react';
import NewOrders from './NewOrders';
import db from '../../lib/firebase';
import Orders from './Orders';

function GetOrders() {

  let orders = Orders();
  const noOrders = !orders || (orders && orders.length === 0);

  return (
    <div>
      <div className="RowTitle flex">
        <h2>Orders</h2>
      </div>

      <div className="order__List">
        <NewOrders />
        <ul className="activeOrders">
          {!noOrders && orders.map((orders) => (
            <li className="list__Item" key={orders.id}>
              <div className="order__Title flex">
                <div className="order__id">#{orders.number}</div>
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
                <button className="icon delete" onClick={event => db.collection('Orders').doc(orders.id).delete()}></button>
              </div>
            </li>
          ))}
        </ul></div>
    </div>
  )
}

export default GetOrders