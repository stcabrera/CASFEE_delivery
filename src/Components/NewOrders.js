import React, { useEffect, useState } from 'react';
import db from '../lib/firebase';


const shopUrl = process.env.REACT_APP_SHOP_URL;
const config = {
    method: 'get',
    headers: {
        'Authorization': process.env.REACT_APP_SHOP_API
    }
};


function NewOrders() {
    const [orders, setOrders] = useState([]);
    const noOrders = !orders || (orders && orders.length === 0);
    let newOrder = [];
    useEffect(() => {
        (async function getOrders() {
            await fetch(shopUrl, config)
                .then(response => response.json())
                .then(data => {
                    data.map(newData => {
                        if (newData.status === 'on-hold') {
                            newOrder.push(newData)
                        }
                    })
                    setOrders(newOrder)
                });
        })();
    });
    

   

    return (
        <div>
            <ul>

                {!noOrders && orders.map((orders) => (

                    <li className="list__Item" key={orders.id}>
                        <div className="order__Title flex">
                            <div className="order__id">#{orders.id}</div>
                            <div className="order__Time">{orders.date_created}</div>
                        </div>
                        <div className="orderBox">
                            <div className="flex spaceBetween">
                                <div>{orders.status}</div>
                                <button className="accept" onClick={
                                  
                                    event => db.collection('Orders').add({
                                    firstName: orders.billing.first_name + ' ',
                                    lastName: orders.billing.last_name,
                                    adress: orders.billing.address_1,
                                    postcode: orders.billing.postcode,
                                    city: orders.billing.city,
                                    total: orders.total,
                                    paymentMethod: orders.payment_method_title
                                })
                             }>accept</button>
                            </div>
                        </div>
                    </li>
                ))}

                {orders.length === 0 && (
                    <div>No new Orders</div>
                )}
            </ul>
        </div>
    )



}

export default NewOrders