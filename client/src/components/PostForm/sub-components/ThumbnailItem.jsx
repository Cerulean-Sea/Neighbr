import React from 'react';

var ThumbnailItem = (props) => (
    <div>
        {/* <p>{props.item}</p> */}
        <img src={props.item} />
        <button value={props.item} onClick={props.removePhoto}>Remove Image</button>
    </div>
)

export default ThumbnailItem;