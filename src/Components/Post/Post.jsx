import React from 'react';
import DislikeButton from '../DislikeButton';
import LikeButton from '../LikeButton';


const Post = ({post}) => {

    // const $('.like, .dislike').on('click', function(event) {
    //     event.preventDefault();
    //     $('.active').removeClass('active');
    //     $(this).addClass('active');
    // });

    return ( 

        <div>
            <p>{post.person}</p>
            <p>{post.comment}</p>
            <div className='rating'><LikeButton/><DislikeButton/></div>
        </div>

    );
}
 
export default Post;


