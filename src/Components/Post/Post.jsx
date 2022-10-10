import React from 'react';
//import LikeButton from '../LikeButton';
//import DislikeButton from '../DislikeButton';


const Post = ({post}) => {

    // $('.like, .dislike').on('click', function() {
    //     event.preventDefault();
    //     $('.active').removeClass('active');
    //     $(this).addClass('active');
    // });

    return ( 

        <div className='btn'>
            <p>{post.person}</p>
            <p>{post.comment}</p>
            <div className="rating">
                <i className="fa fa-thumbs-up fa-3x like" aria-hidden="true"></i>
                <i className="fa fa-thumbs-down fa-3x like" aria-hidden="true"></i>
            </div>
        </div>

    );
}
 
export default Post;


