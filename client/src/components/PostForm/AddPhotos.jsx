import React from 'react';
import Button from '@material-ui/core/Button';

var AddPhotos = (props) => {

    return (
        <div>
            <h3>From Your Computer</h3>
            <p></p>
            <input type="file" name="photoFilePath" value={props.photoFilePath} onChange={props.handleInputChange} placeholder="Filepath goes here" />
            <p></p>
            <Button type="submit" onClick={props.handlePhotoSubmit}>Add Photo</Button>
            <p></p>
        </div>
    )
}

export default AddPhotos;

// test



{/* <form onSubmit={props.handlePhotoSubmit}>
<h3>URL</h3>
<input name="photoUrl" value={props.photoUrl} onChange={props.handleInputChange} placeholder="Paste URL here" />
<p>or</p>
<button>From Your Computer</button>
<p></p>
<input name="photoFilePath" value={props.photoFilePath} onChange={props.handleInputChange} placeholder="Filepath goes here" />
<p></p>
<button>Add Photo</button>
<p></p>
</form> */}

// test