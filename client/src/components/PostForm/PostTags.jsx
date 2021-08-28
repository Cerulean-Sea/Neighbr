import React from 'react';

var PostTags = (props) => (
    <div>
        <h4>Tags</h4>
        <input type="radio" name="tags" value="request" onClick={props.selectTag} />
        <label>Request</label>
        <input type="radio" name="tags" value="alert" onClick={props.selectTag} />
        <label>Alert</label>
        <input type="radio" name="tags" value="free" onClick={props.selectTag} />
        <label>Free</label>
    </div>
)

export default PostTags;