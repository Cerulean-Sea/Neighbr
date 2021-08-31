import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThumbnailList from './ThumbnailList.jsx';
import { createPost } from '../../redux/actions/Posts';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const PostForm = () => {

    const AUTH = useSelector(state => state.firebase);
    const userId = AUTH?.user.uid;
    const displayName = AUTH?.user.displayName;

    const initialState = {
        title: '',
        body: '',
        tag: '',
        wasAddImagesClicked: false,
        photoUrl: '',
        photoFilePath: '',
        photoArray: []
    };


    const dispatch = useDispatch();
    const [form, setForm] = useState(initialState);

    const handleInputChange = (e) => {
        setForm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
          }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const { title, body, tag, photoArray } = form;

        if (!title.length) {
            alert('Must input a title');
            return;
        }
        if (!body.length) {
            alert('Need to input a post in body')
            return;
        }

        dispatch(createPost({
            userId,
            username: displayName,
            title,
            body,
            tags: [tag],
            photos: photoArray
        }));
    };

    const selectTag = (e) => {
        setForm(prevState => ({
            ...prevState,
            tag: e.target.value
          }));
    };

    const toggleAddImages = () => {
        setForm(prevState => ({
            ...prevState,
            wasAddImagesClicked: !prevState.wasAddImagesClicked,
            photoUrl: '',
            photoFilePath: ''
          }));
    };

    const handlePhotoSubmit = (e) => {
        e.preventDefault();
        if (!form.photoFilePath.length) {
            alert("Must select file from computer");
            return;
        }

        // upload photo here;
    };

    const removePhoto = (e) => {
        let photoArray = form.photoArray.filter(photo => photo !== e.target.value);
        setForm(prevState => ({
            ...prevState,
            photoArray
        }));
    };

    const readImage = (file) => {
        if (file.type && !file.type.startsWith('image/')) {
            console.log('File is not an image.', file.type, file);
            return;
        }

        const reader = new FileReader();
        reader.addEventListener('load', (e) => {
            img.src = e.target.result;
        });

        setForm(prevState => ({
            ...prevState,
            photoFilePath: reader.readAsDataURL(file.files[0])
        }));
    };

    return (
        <div>
            <h2>Create New Post</h2>
            <form>
                <TextField id="title" name="title" label="Title" value={form.title} onChange={handleInputChange} placeholder="Type title here"  />
                <p></p>
                <TextField id="body" name="body" label="Body" value={form.body} onChange={handleInputChange} placeholder="Type post here"  />
                <p></p>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Tags</FormLabel>
                    <RadioGroup>
                        <FormControlLabel value="Happenings" control={<Radio />} label="Happenings" onClick={selectTag}  />
                        <FormControlLabel value="Swaps" control={<Radio />} label="Swaps" onClick={selectTag}  />
                        <FormControlLabel value="Safety" control={<Radio />} label="Safety" onClick={selectTag}  />
                        <FormControlLabel value="Favors" control={<Radio />} label="Favors" onClick={selectTag}  />
                        <FormControlLabel value="Chit Chat" control={<Radio />} label="Chit Chat" onClick={selectTag}  />
                    </RadioGroup>
                </FormControl>
                <p></p>
                <h4>[ Your Location Goes Here ]</h4>
                <p></p>
                <div className="photo-upload">
                    <h3>From Your Computer</h3>
                    <input type="file" name="photoFilePath" value={form.photoFilePath} onChange={handleInputChange} placeholder="Filepath goes here" />
                    <p></p>
                    <Button type="submit" onClick={handlePhotoSubmit}>Add Photo</Button>
                    <p></p>
                </div>
                <h4>Thumbnail Preview</h4>
                <ThumbnailList photos={form.photoArray} removePhoto={removePhoto} />
                <p></p>
                <Button type="submit" onClick={handleFormSubmit} color="primary">Submit Post</Button>
                <p></p>
                <Button color="secondary">Delete Post</Button>
            </form>
        </div>
    )
}

export default PostForm;