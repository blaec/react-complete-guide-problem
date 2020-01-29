import React from 'react';
import './Users.css';


const userInput = (props) => {
    return (
        <div>
            <lable className='UserInput-blue'>Put text here:</lable>
            <input className='UserInput-border UserInput-input'
                   type="text"
                   onChange={props.changed}
                   value={props.name}/>
        </div>
    )
};

export default userInput;