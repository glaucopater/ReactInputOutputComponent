import React from 'react'; 
import './UserInput.css';


const userinput = (props) => {
    return (
        <input type="text" value={props.username} onChange={props.changed}/>
        );
};

export default userinput;