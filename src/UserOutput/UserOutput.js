import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>This is some user output by {props.username}! (1)</p>
            <p>This is some user output by {props.username}! (2)</p>
        </div>
    )
};

export default userOutput;