import React from 'react';
import ThumbnailItem from './sub-components/ThumbnailItem.jsx';

var ThumbnailList = (props) => {

    return (
        <div>
            {props.photos.map((photo, index) =>
                <ThumbnailItem item={photo} key={index} removePhoto={props.removePhoto} />
            )}
        </div>
    )

}

export default ThumbnailList;