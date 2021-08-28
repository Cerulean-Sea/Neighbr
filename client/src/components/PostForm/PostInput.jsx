import React from 'react';

var PostInput = (props) => (
    <div>
        <h4>Title</h4>
        <input name="postTitle" value={props.postTitle} onChange={props.handleInputChange} placeholder="Type title here" />

        <h4>Body</h4>
        <textarea name="postBody" value={props.postBody} onChange={props.handleInputChange} placeholder="Type post here"  cols="50" rows="8"></textarea>
    </div>
)

export default PostInput;


{/* <input name="postBody" value={props.postBody} onChange={props.handleInputChange} placeholder="Type post here" />        */}