import React, { useState } from 'react';


const CreatePost = (props) => {

    const [postName, setPostName] = useState('');
    const [postBody, setPostBody] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            person: postName,
            comment: postBody,
            id: props.entries.length +1
        };
        props.newPostProperty(newPost);
        setPostName('');
        setPostBody('');
    }

    return ( 

        <form className="form-inline" onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="name" className='name_field' value={postName} onChange={(event) => setPostName(event.target.value)} />
            </div>
            <div>
                <label>Post</label>
                <textarea rows="3" className='post_field' value={postBody} onChange={(event) => setPostBody(event.target.value)}></textarea>
            </div>
            <button type="submit" className='create-button'>Create</button>
        </form>
     );
}
 
export default CreatePost;