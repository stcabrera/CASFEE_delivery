import React, { useEffect, useState } from 'react';
import readOrder from '../Orders/ChangeStatus';


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
                        if (newData.status === 'processing') {
                            newOrder.push(newData)
                        }
                        return (newOrder);
                    })
                    setOrders(newOrder)
                });
        })();
    });

    return (
        <div>
            <ul>
                {!noOrders && orders.map((orders) => (
                    <li className="list__Item"
                        key={orders.id}
                        data-ordernumber={orders.id}
                        data-firstname={orders.billing.first_name}
                        data-lastname={orders.billing.last_name}
                        data-adress={orders.billing.address_1}
                        data-postcode={orders.billing.postcode}
                        data-city={orders.billing.city}
                        data-total={orders.total}
                        data-payment={orders.payment_method_title}
                    >
                        <div className="order__Title flex">
                            <div className="order__id">#{orders.id}</div>
                            <div className="order__Time">{orders.date_created}</div>
                        </div>
                        <div className="orderBox">
                            <div className="flex spaceBetween">
                                <div>{orders.status}</div>
                                <button className="accept" onClick={readOrder}
                                >accept</button>
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