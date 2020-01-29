import React from 'react';
import '../UserInput/Users.css';

const UserOutput = (props) => {
    return (
        <div>
            <p>first paragraph with name='{props.name2}'</p>
            <p>second paragraph with name='{props.name}'</p>
        </div>
    )
};

export default UserOutput;