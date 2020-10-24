import React, { useEffect, useState } from 'react';
import db from '../lib/firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';



function RoutesComponent() {
    const [routes, setRoutes] = useState([]);

    useEffect(() => {
        db.collection('Routes').onSnapshot((snapshot) => {
            setRoutes(snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            })))
        })
    }, []);

    const openAddRoute = () => {
        console.log('add Route ausgelöst')
        db.collection('Routes').add({
            Title: 'New Route'
        })
        setRoutes([...routes])
    }

    return (
        <div>
            <div className="RowTitle flex">
                <h2>Routes</h2>
                <button className="add">
                    <FontAwesomeIcon
                        icon={faPlus}
                        onClick={openAddRoute}
                    />
                </button>
            </div>
            <ul className="listWrapper">
                {routes.map((routes) =>
                    <li className="list__Item route flex" key={routes.id}>
                        <div> {routes.Title} </div>
                        <div className="iconBox flex">
                            <div className="icon"> <FontAwesomeIcon icon={faEdit} /> </div>
                            <div className="icon delete"> <FontAwesomeIcon icon={faTrashAlt} /> </div>
                        </div>
                    </li>
                )}
            </ul>

        </div>
    )
}

export default RoutesComponent;