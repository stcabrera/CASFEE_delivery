import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Marker = ({ text }) => <div>
    <div className="marker">
        <FontAwesomeIcon
            icon={faMapMarkerAlt}
        /></div><div>{text}</div>;
</div>

export default Marker