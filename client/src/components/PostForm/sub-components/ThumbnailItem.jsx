import React from 'react';
import Button from '@material-ui/core/Button';

var ThumbnailItem = (props) => (
    <div>
        <img src={props.item} />
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
