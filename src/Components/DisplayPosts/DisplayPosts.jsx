import React from 'react';
import Post from '../Post/Post';

const DisplayPosts = (props) => {

    //the way to reverse info coming from database
    let postArrayRev = [...props.postArray].reverse()


    return ( 
        
        <ul>
            {postArrayRev.map(post => <li><Post post={post}/></li>)}
        </ul>
     );
}
 
export default DisplayPosts;


