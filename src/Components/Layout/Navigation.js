/*import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useTransition, animated } from 'react-spring';
import { Link } from 'react-router-dom';

function Navigation() {
    const [showMenu, setShowMenu] = useState(false);
    const transitions = useTransition(showMenu, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });


    return (
        <nav>
            <div className="burger">
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                />

            </div>
            <div className="fixMenu">
                
            </div>
            {
                transitions.map(({ item, key, props }) =>
                    item && <animated.div
                        key={key}
                        style={props}
                        id="navigation"
                        onClick={() => setShowMenu(false)}
                    >
                        <ul>
                        <li className="navItem">
                                <Link to="/" >Dashboard</Link>
                            </li>
                            <li className="navItem">
                                <Link to="orders" >Orders</Link>
                            </li>
                            <li className="navItem">
                                <Link to="drivers" >Drivers</Link>
                            </li>


                        </ul>
                    </animated.div>
                )
            }

        </nav>
    )
}

export default Navigation
*/
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {

    return (
        <nav>
            <div className="fixMenu">
                <div>
                    <ul>
                        <li className="navItem">
                            <Link to="/" >Da</Link>
                        </li>
                        <li className="navItem">
                            <Link to="orders" >O</Link>
                        </li>
                        <li className="navItem">
                            <Link to="drivers" >D</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation