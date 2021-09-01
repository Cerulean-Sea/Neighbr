import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import ThumbnailList from './ThumbnailList.jsx';
import { createPost } from '../../redux/actions/Posts';
import firebaseConfig from '../../redux/actions/firebase/config';

const PostForm = () => {

    const firebaseApp = initializeApp(firebaseConfig);
    const storage = getStorage(firebaseApp);

    const AUTH = useSelector((state) => state.firebase);
    const userId = AUTH?.user.uid;
    const displayName = AUTH?.user.displayName;
    const community = AUTH?.community;

    const initialState = {
        title: '',
        body: '',
        tag: '',
        wasAddImagesClicked: false,
        photoUrl: '',
        filepath: '',
        photos: []
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

        const { title, body, tag, photos } = form;

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
            photos,
            community
        }));

        setForm(initialState);
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

    const removePhoto = (e) => {
        let photos = form.photos.filter(photo => photo !== e.target.value);
        setForm(prevState => ({
            ...prevState,
            photos
        }));
    };

    const handleFileChange = async (e) => {
        e.preventDefault();
        try {
            let fileList = e.target.files;
            let storageRef = ref(storage, fileList[0].name);
            let snapshot = await uploadBytes(storageRef, fileList[0]);
            let url = await getDownloadURL(snapshot.ref);
            setForm(prevState => ({
                ...prevState,
                photos: [...prevState.photos, url]
            }));
        } catch (error) {
            console.log(error);
        }
    }

    if (!userId) {
        return (
            <Paper style={{paddingBottom: "20px"}}>
                <Typography variant="h6" align="center">
                Please sign in to make your first post!
                </Typography>
            </Paper>
        )
    }

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
                    <h3>Upload Photo</h3>
                    <input type="file" name="filepath" value={form.filepath} onChange={handleFileChange}/>
                </div>
                <h4>Thumbnail Preview</h4>
                <ThumbnailList photos={form.photos} removePhoto={removePhoto} />
                <p></p>
                <Button type="submit" onClick={handleFormSubmit} color="primary">Submit Post</Button>
                <p></p>
                <Button color="secondary">Delete Post</Button>
            </form>
        </div>
    )
}

export default PostForm;