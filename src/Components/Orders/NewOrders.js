import React, { useEffect, useState } from 'react';
import db from '../../lib/firebase';
import ChangeStatus from '../Orders/ChangeStatus'

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

    function readOrder(event) {
        let lat;
        let long;
        let firstName = event.target.parentElement.parentElement.parentElement.dataset.firstname,
            lastname = event.target.parentElement.parentElement.parentElement.dataset.lastname,
            adress = event.target.parentElement.parentElement.parentElement.dataset.adress,
            postcode = event.target.parentElement.parentElement.parentElement.dataset.postcode,
            city = event.target.parentElement.parentElement.parentElement.dataset.city,
            total = event.target.parentElement.parentElement.parentElement.dataset.total,
            paymentmethod = event.target.parentElement.parentElement.parentElement.dataset.payment,
            ordernumber = event.target.parentElement.parentElement.parentElement.dataset.ordernumber

        fetch(process.env.REACT_APP_MAPBOX_GEOCODING + adress + ' ' + postcode + ' ' + city + ' switzerland.json?access_token=' + process.env.REACT_APP_MAPBOX_ACCESS_TOKEN)
            .then(response => response.json())
            .then(data => {
                lat = data.features[0].center[0]
                long = data.features[0].center[1]

                db.collection('Orders').add({
                    firstName: firstName,
                    lastName: lastname,
                    adress: adress,
                    postcode: postcode,
                    city: city,
                    total: total,
                    paymentMethod: paymentmethod,
                    latitude: lat,
                    longitude: long
                })
            })
            .then(setTimeout(() => {
                const myHeaders = new Headers();
                myHeaders.append("Authorization", "Basic Y2tfNzc1YjhmNTE1MGQzYWE2MWU0OGFkMDFhYzJhN2VhYWMxMzhmODUwODpjc180ZmEyOGE5MGNlMjY5ZjY1NTBmNzVhN2ZjN2VhYTRmYmE1ZWQxOTQ0");
                myHeaders.append("Content-Type", "application/json");
                
                console.log(ordernumber);
                    
                const config = {
                  method: 'PUT',
                  headers: myHeaders,
                  body: JSON.stringify({"status":"on-hold"}),
                  redirect: 'follow'
                };
                
                
                fetch("https://testshop.cabrera.media//wp-json/wc/v2/orders/" + ordernumber, config)
                  .catch(error => console.log('error', error));
                window.location.reload();
            }, 500))
            .catch(error => console.log('error', error));



    }

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