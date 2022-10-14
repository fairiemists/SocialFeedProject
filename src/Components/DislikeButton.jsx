import React, { useState } from 'react';
import { Icon } from '@iconify/react';


const DislikeButton = (props) => {

    const [thumbsDown, setDislikeButtonClass] = useState('like');
    const [activeState, setActiveState] = useState(props.isActive);

    // function dislikeHandleClick(event) {
    //     event.preventDefault();
    //     if(thumbsDown === 'inactive'){
    //         setDislikeButtonClass('active');
    //     }
    //     else {
    //         setDislikeButtonClass('inactive');
    //     }
    // }    


    return ( 
        <div>
            <button className={activeState ? 'like active-dislike' : thumbsDown} onClick={() => setActiveState(!activeState)}><Icon icon="fa:thumbs-down" aria-hidden="true"/></button>

        </div>
    );
}
 
export default DislikeButton;

