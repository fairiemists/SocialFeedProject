import React from 'react';
import Post from '../Post/Post';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


const DisplayPosts = (props) => {

    //the way to reverse info coming from database
    let postArrayRev = [...props.postArray].reverse()


    return ( 
        <ListGroup>
            {postArrayRev.map(post => 
                <ListGroupItem>
                    <Post post={post}/>
                    
                </ListGroupItem>
            )}
        </ListGroup>
     );
}
 
export default DisplayPosts;


