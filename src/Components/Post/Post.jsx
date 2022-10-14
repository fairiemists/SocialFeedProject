import React from 'react';
import DislikeButton from '../DislikeButton';
import LikeButton from '../LikeButton';


const Post = ({post}) => {

    // function handleClick(){

    // }

    return ( 

        <div>
            <p>{post.person}</p>
            <p>{post.comment}</p>
            <div className='rating'><LikeButton isActive={post.isLiked}/><DislikeButton isActive={post.isDisliked}/></div>
        </div>

    );
}
 
export default Post;


