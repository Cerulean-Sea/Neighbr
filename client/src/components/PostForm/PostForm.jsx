import axios from 'axios';
import React from 'react';
import PostTags from './PostTags.jsx';
import PostInput from './PostInput.jsx';
import AddPhotos from './AddPhotos.jsx';

class PostForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            postTitle: '',
            postBody: '',
            postTag: '',
            wasAddImagesClicked: false,
            photoUrl: '',
            photoArray: []
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.selectTag = this.selectTag.bind(this);
        this.toggleAddImages = this.toggleAddImages.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        }, () => {
            // console.log('photoUrl: ', this.state.photoUrl);
        })
    }

    handleFormSubmit(event) {
        event.preventDefault();

        var inputObj = {
            title: this.state.postTitle,
            body: this.state.postBody,
            tag: this.state.postTag,
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

        // create Axios POST request at '/create'
        axios.post('/create', inputObj)
        .then(() => {
            this.setState({
                postTitle: '',
                postBody: '',
                postTag: ''
            })

            console.log('Received response from Axios POST request!');
        })
        .catch((err) => {
            console.log('Error received from Axios POST request.');
        })

    }

    selectTag(event) {

        this.setState({
            postTag: event.target.value
        }, () => {
            // console.log('this.state.postTag: ', this.state.postTag);
        })

    }

    toggleAddImages() {
        this.setState(prevState => ({
            wasAddImagesClicked: !prevState.wasAddImagesClicked
        }))
    }



    render() {

        if (!this.state.wasAddImagesClicked) {
    
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
                        <h4>Your Location Goes Here</h4>
                        <button>Submit Post</button>
                        <button>Delete Post</button>
                    </form>
                        <button onClick={this.toggleAddImages}>Add Images</button>
                </div>
            )

        } else {

            return (

                <div>
                    <AddPhotos 
                    toggleAddImages={this. toggleAddImages}
                    handleInputChange={this.handleInputChange}
                    photoUrl={this.state.photoUrl} />
                </div>

            )

        }

    }

}

export default PostForm;


// String
// Location
// Created
  // Type
  // Default
// Updated
  // Type
  // Default
// Username
// UserId
// Tags


{/* <h4>Post Title</h4>
<input name="postTitle" value={this.state.postTitle} onChange={this.handleInputChange} />
<h4>Post Body</h4>
<input name="postBody" value={this.state.postBody} onChange={this.handleInputChange} />
<h4>Choose a tag</h4> */}