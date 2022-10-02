import React from 'react';
import Post from './Components/Post/Post';

const DisplayPosts = (props) => {
    return ( 
        
        <ul>
            {props.postArray.map(post => <li><Post post={post}/></li>)}
        </ul>
     );
}
 
export default DisplayPosts;


    // <div className='border-box'>
    // <Post/>
    // </div>
