import React, { useEffect, useState } from 'react';
import firebase from '../lib/firebase';

function RoutesComponent() {
    const [routes, setRoutes] = useState([]);

    useEffect(() => {
        firebase.firestore().collection('Routes').onSnapshot((snapshot) => {
            const newRoutes = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))

            setRoutes(newRoutes)
        })
    }, [])

    return (

        <div>
            <div className="flex">
                <div id="a_Row">
                    <div className="RowTitle flex">
                        <h2>Routes</h2>
                        <div className="add">+</div>
                        </div>
                    <ul>
                        {routes.map((routes) =>
                            <li className="list__Item" key={routes.id}>
                                {routes.Title}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RoutesComponent;