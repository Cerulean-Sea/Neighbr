import React from 'react';

var AddPhotos = (props) => {

    return (
        <div>
            <form onSubmit={props.handlePhotoSubmit}>
                <h3>URL</h3>
                <input name="photoUrl" value={props.photoUrl} onChange={props.handleInputChange} placeholder="Paste URL here" />
                <p>or</p>
                <button>From Your Computer</button>
                <p></p>
                <input />
                <p></p>
                <button>Add Photo</button>
                <p></p>
            </form>
            <button onClick={props.toggleAddImages}>Cancel</button>
        </div>
    )
}

export default AddPhotos;