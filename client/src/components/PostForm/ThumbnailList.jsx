import React from 'react';
import ThumbnailItem from './sub-components/ThumbnailItem.jsx';

var ThumbnailList = (props) => {

    // console.log('props.photo: ', props.photos);

    return (
        <div>
            {props.photos.map((photo, index) => 
                <ThumbnailItem item={photo} key={index} />
            )}
        </div>
    )

}

export default ThumbnailList;