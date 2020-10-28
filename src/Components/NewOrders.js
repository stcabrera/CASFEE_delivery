import React, { useEffect, useState } from 'react';

const config = {
    method: 'get',
    url: 'https://testshop.cabrera.media//wp-json/wc/v2/orders/',
    headers: {
        'Authorization': 'Basic Y2tfNzc1YjhmNTE1MGQzYWE2MWU0OGFkMDFhYzJhN2VhYWMxMzhmODUwODpjc180ZmEyOGE5MGNlMjY5ZjY1NTBmNzVhN2ZjN2VhYTRmYmE1ZWQxOTQ0'
    }
};

function NewOrders() {
    const [orders, setOrders] = useState([]);
    const noOrders = !orders || (orders && orders.length === 0);
    let newOrder = []
    useEffect(() => {
        (async function getOrders() {
            await fetch('https://testshop.cabrera.media//wp-json/wc/v2/orders/', config)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    data.map(function (newData) {
                        
                        if(newData.status === 'on-hold') {
                            newOrder.push(newData)
                            console.log(newOrder)
                        }
                    }
                    )
                    setOrders(newOrder)
                });
        })();
    }, []);



        return (
            <div>
                <div className="RowTitle flex">
                    <h2>Orders</h2>
                </div>
                <ul className="order__List">

                    {!noOrders && orders.map((orders) => (
                        
                        <li className="list__Item" key={orders.id}>
                            <div className="order__Title flex">
                                <div className="order__id">#{orders.id}</div>
                                <div className="order__Time">{orders.date_created}</div>
                            </div>
    
                            <div className="orderBox">
                                <div className="flex">
                    <div>{orders.status}</div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    

    
}

export default NewOrders