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
                <h2>Drivers</h2>
                        <div className="add">+</div>
                        </div>
                    
                    <ul>
                        {drivers.map((drivers) =>
                            <li className="list__Item" key={drivers.id}>
                                <div className="avatarSmall">
                                    <div className={drivers.Vehicle}>
                                      
                                    </div>
                                </div>
                                <div className="Title__Medium">
                                    <p>{drivers.FirstName}</p>
                                    <p>{drivers.LastName}</p>
                                    </div> 
                            </li>
                        )}
                    </ul>

        </div>
    )
}

export default DriversComponent;