import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const CreatePost = (props) => {
    return ( 
        <form className="form-inline">
            <div className="col-sm-3 my-1">
                <label className="sr-only" htmlFor="inlineFormInputName">Name</label>
                <input type="text" className="form-control" id="inlineFormInputName" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Post</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-default">Create</button>
        </form>
     );
}
 
export default CreatePost;