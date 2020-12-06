import React, { useEffect, useState } from 'react';

const shopUrl = process.env.SHOP_URL;
const config = {
    method: 'get',
    headers: {
        'Authorization': process.env.SHOP_API
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
            <ul className="order__List">

                {!noOrders && orders.map((orders) => (

                    <li className="list__Item" key={orders.id}>
                        <div className="order__Title flex">
                            <div className="order__id">#{orders.id}</div>
                            <div className="order__Time">{orders.date_created}</div>
                        </div>
                        <div className="orderBox">
                            <div className="flex spaceBetween">
                                <div>{orders.status}</div>
                                <button className="accept">accept</button>
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