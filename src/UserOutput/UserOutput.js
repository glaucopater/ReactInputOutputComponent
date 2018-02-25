import React from 'react';  
import './UserOutput.css';

const useroutput = (props) => { 
 
    return (
        <div className='myUserOutput'>
            <p className='myLabel'>Username:</p>
            <p className='myInput'>{props.username}</p>
        </div>
        );
};

export default useroutput;