import React from 'react';

var PostTags = (props) => (
    <div>
        <input type="radio" name="tags" value="request" onClick={props.selectTag} />
        <label>Request</label>
        <input type="radio" name="tags" value="alert" onClick={props.selectTag} />
        <label>Alert</label>
        <input type="radio" name="tags" value="free" onClick={props.selectTag} />
        <label>Free</label>
    </div>
)

export default PostTags;