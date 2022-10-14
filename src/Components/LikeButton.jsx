import React, { useState } from 'react';
import { Icon } from '@iconify/react';


const LikeButton = (props) => {

    const [thumbsUp, setLikeButtonClass] = useState('like');
    const [activeState, setActiveState] = useState(props.isActive);

    // function likeHandleClick(event) {
    //     event.preventDefault();
    //     if(thumbsUp === 'inactive'){
    //         setLikeButtonClass('like active-like');
    //     }
    //     else {
    //         setLikeButtonClass('inactive');
    //     }
    // }


    return ( 
        <div>
            <button className={activeState ? 'like active-like' : thumbsUp} onClick={() => setActiveState(!activeState)}><Icon icon="fa:thumbs-up" aria-hidden="true"/></button>
        </div>
    );
}
 
export default LikeButton;
