import React, { useState } from 'react';
import { Icon } from '@iconify/react';


const LikeButton = (props) => {

    const [thumbsUp, setLikeButtonClass] = useState('inactive');
    
    function likeHandleClick(event) {
        event.preventDefault();
        if(thumbsUp === 'inactive'){
            setLikeButtonClass('active');
        }
        else {
            setLikeButtonClass('inactive');
        }
    }


    return ( 
        <div>
            <button id='thumb_up' className='like' onClick={likeHandleClick}><Icon icon="fa:thumbs-up" aria-hidden="true"/></button>
        </div>
    );
}
 
export default LikeButton;
