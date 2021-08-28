import React from 'react';

var PostInput = (props) => (
    <div>
        <h4>Post Title</h4>
        <input name="postTitle" value={props.postTitle} onChange={props.handleInputChange} />
        <h4>Post Body</h4>
        <input name="postBody" value={props.postBody} onChange={props.handleInputChange} />       
    </div>
)

export default PostInput;