import React from 'react';


const Post = ({post}) => {
    return ( 
        <div>
            <p>{post.person}</p>
            <p>{post.comment}</p>
        </div>
    );
}
 
export default Post;