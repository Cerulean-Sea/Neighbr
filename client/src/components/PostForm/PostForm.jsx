import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import { Button, TextField, RadioGroup, Radio, FormControl, FormLabel, FormControlLabel, Paper, Typography, Card, Box, Tooltip, CircularProgress } from '@material-ui/core';
import PinDropIcon from '@material-ui/icons/PinDrop';

import ThumbnailList from './ThumbnailList.jsx';
import { createPost } from '../../redux/actions/Posts';
import firebaseConfig from '../../redux/actions/firebase/config';
import getCurrentLocation from '../../helper-functions/getCurrentLocation';

import './styles.css';
import { spacing } from '@material-ui/system';
const theme = {
    spacing: 1
}

const PostForm = () => {

    const firebaseApp = initializeApp(firebaseConfig);
    const storage = getStorage(firebaseApp);

    const AUTH = useSelector((state) => state.firebase);
    const [isLoading, setIsLoading] = useState(false);
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
        photos: [],
        location: {}
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

        const { title, body, tag, photos, location } = form;

        dispatch(createPost({
            userId,
            username: displayName,
            title,
            body,
            tags: [tag],
            photos,
            community,
            location
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

    const getLocation = async () => {
        setIsLoading(true);
        const {latitude, longitude} = await getCurrentLocation();
        setIsLoading(false);
        setForm(prevState => ({
            ...prevState,
            location: {latitude, longitude}
        }));
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
        <Card className="main" style={{marginBottom: "50px", padding: "25px"}}>
            <Typography variant="h5" gutterBottom >Create New Post</Typography>
            <form onSubmit={handleFormSubmit}>
                <TextField id="title" name="title" label="Title" value={form.title} onChange={handleInputChange} placeholder="Type title here"  variant="outlined" required/>
                <p></p>
                <TextField multiline rows={4} id="body" name="body" label="Body" value={form.body} onChange={handleInputChange} placeholder="Type post here"  variant="outlined" required/>
                <p></p>
                <FormControl component="fieldset">
                    <Box p={2} >
                        <FormLabel component="legend">Choose a tag</FormLabel>
                    </Box>
                    <RadioGroup row>
                        <FormControlLabel value="Happenings" control={<Radio />} label="Happenings" onClick={selectTag}  />
                        <FormControlLabel value="Swaps" control={<Radio />} label="Swaps" onClick={selectTag}  />
                        <FormControlLabel value="Safety" control={<Radio />} label="Safety" onClick={selectTag}  />
                        <FormControlLabel value="Favors" control={<Radio />} label="Favors" onClick={selectTag}  />
                        <FormControlLabel value="Chit Chat" control={<Radio />} label="Chit Chat" onClick={selectTag}  />
                    </RadioGroup>
                </FormControl>
                <p></p>
                <Tooltip title="Pin Location">
                    <Button color="primary" onClick={getLocation}>
                        <PinDropIcon />
                    </Button>
                </Tooltip>
                <p></p>
                {isLoading && <CircularProgress color="inherit" />}
                <Typography variant="body1">{form.location.latitude && (`Latitude: ${form.location.latitude}, Longitude: ${form.location.longitude}`)}</Typography>
                <p></p>
                <div className="photo-upload">
                    <Box p={2}>
                        <Typography>Upload Photo</Typography>
                    </Box>
                    <Button variant="contained" component="label">
                        <input className="photo-upload-h3" type="file" name="filepath" value={form.filepath} onChange={handleFileChange}/>
                    </Button>
                </div>
                <ThumbnailList photos={form.photos} removePhoto={removePhoto} />
                <p></p>
                <Button type="submit" color="primary" variant="outlined">Submit Post</Button>
            </form>
        </Card>
    )
}

export default PostForm;