import React, { useState } from 'react';
import { FaThumbsDown } from 'react-icons/fa';


function DislikeButton() { 
    const [FaThumbsDown, setDislikeButtonClass] = useState('inactive');


    function dislikeHandleClick() {
        if(FaThumbsDown === 'inactive'){
            setDislikeButtonClass('active');
        }
        else {
            setDislikeButtonClass('inactive');
        }
    }    


const DislikeButton = (props) => {
    return ( 
        <div>
            <button className='btn' onClick={dislikeHandleClick}><i class='FaThumbsDown'></i></button>

        </div>
    );
}}
 
export default DislikeButton;

