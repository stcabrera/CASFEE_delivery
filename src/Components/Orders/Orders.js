import { useState, useEffect } from 'react';
import db from '../../lib/firebase';

function Orders() {
    const [orders, setOrders] = useState([])

    useEffect(() => {

        db.collection('Orders').onSnapshot((snapshot) => {
            let data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))

            setOrders(data)
        })
    }, []);

    return (orders)
}

export default Orders