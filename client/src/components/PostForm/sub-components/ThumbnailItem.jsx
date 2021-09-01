import React from 'react';
import Button from '@material-ui/core/Button';

// Todo: Clicking delete button refreshes page

var ThumbnailItem = (props) => (
    <div className="thumbnail-image">
        <img className="thumbnail-img" src={props.item} />
        <p></p>
        <button value={props.item} onClick={props.removePhoto}>Remove Image</button>
    </div>
)

export default ThumbnailItem;


// var ThumbnailItem = (props) => (
//     <div>
//         {/* <p>{props.item}</p> */}
//         <img src={props.item} />
//         <button value={props.item} onClick={props.removePhoto}>Remove Image</button>
//     </div>
// )
