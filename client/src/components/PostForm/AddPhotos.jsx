import React from 'react';

var AddPhotos = (props) => {

    return (
        <div>
            <form onSubmit={props.handlePhotoSubmit}>
                <h3>From Your Computer</h3>
                <p></p>
                <input type="file" name="photoFilePath" value={props.photoFilePath} onChange={props.handleInputChange} placeholder="Filepath goes here" />
                <p></p>
                <button>Add Photo</button>
                <p></p>
            </form>
        </div>
    )
}

export default AddPhotos;