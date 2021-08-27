const Post = require('../database/Post');

const getPosts = (req, res) => {
  Post.find()
    .then(posts => res.status(200).send(posts))
    .catch(err => res.status(400).send(err));
};

const postPost = (req, res) => {
  Post.create(req.body)
    .then(post => res.status(201).send(post))
    .catch(err => res.status(400).send(err));
};

module.exports = {
  getPosts,
  postPost
}