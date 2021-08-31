import axios from 'axios';
import React from 'react';
import PostTags from './PostTags.jsx';
import PostInput from './PostInput.jsx';
import AddPhotos from './AddPhotos.jsx';
import ThumbnailList from './ThumbnailList.jsx';

class PostForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            postTitle: '',
            postBody: '',
            postTag: '',
            wasAddImagesClicked: false,
            photoUrl: '',
            photoFilePath: '',
            photoArray: []
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.selectTag = this.selectTag.bind(this);
        this.toggleAddImages = this.toggleAddImages.bind(this);
        this.handlePhotoSubmit = this.handlePhotoSubmit.bind(this);
        this.removePhoto = this.removePhoto.bind(this);
        this.readImage = this.readImage.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        }, () => {
        })
    }

    handleFormSubmit(event) {
        event.preventDefault();

        var inputObj = {
            title: this.state.postTitle,
            body: this.state.postBody,
            tag: this.state.postTag,
            photoArray: this.state.photoArray,
            claimed: false
        };

        if (inputObj.title.length === 0) {
            alert('Must input a title');
            return;
        }

        if (inputObj.body.length === 0) {
            alert('Need to input a post in body')
            return;
        }

        console.log('inputObj: ', inputObj);

        this.setState({
            postTitle: '',
            postBody: '',
            postTag: ''
        })
    }

    selectTag(event) {
        this.setState({
            postTag: event.target.value
        })
    }

    toggleAddImages() {
        this.setState(prevState => ({
            wasAddImagesClicked: !prevState.wasAddImagesClicked,
            photoUrl: '',
            photoFilePath: ''
        }))
    }

    handlePhotoSubmit(event) {
        event.preventDefault();

        // alert for no photos selected
        if (this.state.photoUrl.length === 0 && this.state.photoFilePath.length === 0) {
            alert("Must add photoUrl or upload photo from computer");
            return;

        // alert for both fields selected
        } else if (this.state.photoUrl.length !== 0 && this.state.photoFilePath.length !== 0) {
            alert("Can only choose one upload option at a time");
            return;

        // if photoUrl is selected
        } else if (this.state.photoUrl.length !== 0 && this.state.photoFilePath.length === 0) {

            this.setState({
                photoArray: [...this.state.photoArray, this.state.photoUrl]
            }, () => {
                console.log('photoArray: ', this.state.photoArray);
            })

        // if photo file path is selected
        } else if (this.state.photoUrl.length === 0 && this.state.photoFilePath.length !== 0) {

            this.setState({
                photoArray: [...this.state.photoArray, this.state.photoFilePath]
            }, () => {
                console.log('photoArray: ', this.state.photoArray);
            })

        }

        // switches back to main form view
        this.setState({
           photoUrl: '',
           photoFilePath: ''
        }, () => {
            this.toggleAddImages();
        })
    }

    removePhoto(event) {
        this.setState({
            photoArray: this.state.photoArray.filter((photo) => {
                    return photo !== event.target.value
                }
            )
        })
    }

    readImage(file) {
        // Check if the file is an image.
        if (file.type && !file.type.startsWith('image/')) {
            console.log('File is not an image.', file.type, file);
            return;
        }

        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            img.src = event.target.result;
        });

        this.setState({
            photoFilePath: reader.readAsDataURL(file.files[0])
        })
    }


    render() {
            return (
                <div>
                    <h2>Create New Post</h2>
                    <form onSubmit={this.handleFormSubmit}>
                        <PostInput
                        postTitle={this.state.postTitle}
                        postBody={this.state.postBody}
                        handleInputChange={this.handleInputChange} />
                        <p></p>
                        <PostTags selectTag={this.selectTag} />
                        <p></p>
                        <h4>[ Your Location Goes Here ]</h4>
                        <p></p>
                        <button>Submit Post</button>
                        <p></p>
                        <button>Delete Post</button>
                    </form>
                        <p></p>
                        <h4>Thumbnail Preview</h4>
                        <div>
                            <AddPhotos
                            toggleAddImages={this. toggleAddImages}
                            handleInputChange={this.handleInputChange}
                            photoUrl={this.state.photoUrl}
                            photoFilePath={this.state.photoFilePath}
                            handleInputChange={this.handleInputChange}
                            handlePhotoSubmit={this.handlePhotoSubmit}
                            readImage={this.readImage} />
                        </div>
                        <ThumbnailList
                        photos={this.state.photoArray}
                        removePhoto={this.removePhoto} />
                </div>
            )
    }

}

export default PostForm;