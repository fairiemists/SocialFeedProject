import React, { useState } from 'react';
import { Icon } from '@iconify/react';


const DislikeButton = (props) => {

    const [thumbsDown, setDislikeButtonClass] = useState('inactive');

    function dislikeHandleClick(event) {
        event.preventDefault();
        if(thumbsDown === 'inactive'){
            setDislikeButtonClass('active');
        }
        else {
            setDislikeButtonClass('inactive');
        }
    }    


    return ( 
        <div>
            <button id='thumb_down' className='dislike' onClick={dislikeHandleClick}><Icon icon="fa:thumbs-down" aria-hidden="true"/></button>

        </div>
    );
}
 
export default DislikeButton;

