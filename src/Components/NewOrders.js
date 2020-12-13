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
                        return (newOrder);
                    })
                    setOrders(newOrder)
                });
        })();
    }, []);

    console.log(orders)
    let adress;
    let city;
    let postcode;
    orders.map((orders) => (
        adress = orders.billing.address_1,
        city = orders.billing.city,
        postcode = orders.billing.postcode

    ))


    function readOrder(event) {
        let lat;
        let long;
        let firstName = event.target.parentElement.parentElement.parentElement.dataset.firstname,
            lastname = event.target.parentElement.parentElement.parentElement.dataset.lastname,
            adress = event.target.parentElement.parentElement.parentElement.dataset.adress,
            postcode = event.target.parentElement.parentElement.parentElement.dataset.postcode,
            city = event.target.parentElement.parentElement.parentElement.dataset.city,
            total = event.target.parentElement.parentElement.parentElement.dataset.total,
            paymentmethod = event.target.parentElement.parentElement.parentElement.dataset.payment;

        fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/' + adress + ' ' + postcode + ' ' + city + ' switzerland.json?access_token=pk.eyJ1Ijoic2NhYnJlcmEyMiIsImEiOiJja2loZjFsM2Iwb2I1MndtcXlyMDV5OTZkIn0.ZRIdJnMHQupwixDPbyebTA')
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
            .catch(error => console.log('error', error));
    }

    return (
        <div>
            <ul>

                {!noOrders && orders.map((orders) => (


                    <li className="list__Item"
                        key={orders.id}
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

                                /*
                                event => db.collection('Orders').add({
                                    firstName: orders.billing.first_name + ' ',
                                    lastName: orders.billing.last_name,
                                    adress: orders.billing.address_1,
                                    postcode: orders.billing.postcode,
                                    city: orders.billing.city,
                                    total: orders.total,
                                    paymentMethod: orders.payment_method_title,
                                   
                                })
                                */
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