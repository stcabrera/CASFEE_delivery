import React, { useEffect, useState } from 'react';
import axios from 'axios';

const config = {
  method: 'get',
  url: 'https://testshop.cabrera.media//wp-json/wc/v2/orders/',
  headers: {
    'Authorization': 'Basic Y2tfNzc1YjhmNTE1MGQzYWE2MWU0OGFkMDFhYzJhN2VhYWMxMzhmODUwODpjc180ZmEyOGE5MGNlMjY5ZjY1NTBmNzVhN2ZjN2VhYTRmYmE1ZWQxOTQ0'
  }
};

function GetOrders() {

  const [orders, setOrders] = useState([]);
  const noOrders = !orders || (orders && orders.length === 0);
  const getOrders = async () => {
    const response = await axios
      .get('https://testshop.cabrera.media//wp-json/wc/v2/orders/', config)
      .catch((err) => console.log('Error: ', err));

    if (response && response.data)
      setOrders(response.data)
  };

  useEffect(() => {
    getOrders();
  }, []);

  console.log(orders)

  return (
    <div>

      <h1>Orders</h1>
      <ul>
        {!noOrders && orders.map((orders) => (
          <li className="flex list__Item" key={orders.id}>
            <div className="order__id">{orders.id}</div>
            <div className="flex">
            <div>{orders.billing.first_name}</div>
            <div>{orders.billing.last_name}</div>
              </div> 
          </li>
        ))}
      </ul>



    </div>
  )
}

export default GetOrders