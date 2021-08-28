import React from 'react';

var PostTags = (props) => (
    <div>
        <h4>Tags</h4>
        <input type="radio" name="tags" value="Happenings" onClick={props.selectTag} />
        <label>Happenings</label>
        <input type="radio" name="tags" value="Swaps" onClick={props.selectTag} />
        <label>Swaps</label>
        <input type="radio" name="tags" value="Safety" onClick={props.selectTag} />
        <label>Safety</label>
        <input type="radio" name="tags" value="Favors" onClick={props.selectTag} />
        <label>Favors</label>
        <input type="radio" name="tags" value="Chit Chat" onClick={props.selectTag} />
        <label>Chit Chat</label>

    </div>
)

export default PostTags;