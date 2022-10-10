import React, { useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa';




const LikeButton = (props) => {

    function LikeButton() {
        const [FaThumbsUp, setLikeButtonClass] = useState('inactive');
    
    
        function likeHandleClick() {
            if(FaThumbsUp === 'inactive'){
                setLikeButtonClass('active');
            }
            else {
                setLikeButtonClass('inactive');
            }
        }


    return ( 
        <div>
            <button className='btn' onClick={likeHandleClick}><i className='FaThumbsUp'></i></button>

        </div>
    );
}}
 
export default LikeButton;
