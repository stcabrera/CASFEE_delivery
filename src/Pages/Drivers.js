import React, { useEffect, useState } from 'react';
import '../App.css';
import firebase from '../lib/firebase';

function Drivers() {
    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
        firebase.firestore().collection('Users').onSnapshot((snapshot) => {
            const newDriver = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))

            setDrivers(newDriver)
        })
    }, [])

    return (

        <div>
            <div className="flex">
                <div id="a_Row">
                    <h2>Drivers</h2>
                    <ul>
                        {drivers.map((drivers) =>
                            <li key={drivers.id}>
                                {drivers.FirstName}
                                {drivers.LastName}
                            </li>
                        )}
                    </ul>

                </div>
                <div id="b_Row">bb</div>
                <div id="c_Row"><div className="responsive_map">

                </div>
                </div>
            </div>
        </div>
    )
}

export default Drivers;