import React from 'react';

var ThumbnailItem = (props) => (
    <div>
        <p>{props.item}</p>
        <button>Remove Image</button>
    </div>
)

export default ThumbnailItem;