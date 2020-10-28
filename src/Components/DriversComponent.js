import React, { useEffect, useState } from 'react';
import db from '../lib/firebase';

function DriversComponent() {
    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
        db.collection('Users').onSnapshot((snapshot) => {
            const newDriver = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))

            setDrivers(newDriver)
        })
    }, [])

 

    return (
        <div>
            <div className="RowTitle flex">
            </div>

            <ul>
                {drivers.map((drivers) =>
                    <li className="list__Item driversList flex" key={drivers.id}>
                        <div className="avatarSmall">
                            <div className={drivers.Vehicle}>
                            </div>
                        </div>
                        <div className="Title__Medium">
                            {drivers.FirstName}
                            {drivers.LastName}
                        </div>
                    </li>
                )}
            </ul>

        </div>
    )
}

export default DriversComponent;