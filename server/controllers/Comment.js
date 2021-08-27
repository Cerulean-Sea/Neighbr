const Comment = require('../database/Comment');

const getComments = (req, res) => {
  Comment.find()
    .then(comments => res.status(200).send(comments))
    .catch(err => res.status(400).send(err));
};

const postComment = (req, res) => {
  Comment.create(req.body)
    .then(comment => res.status(201).send(comment))
    .catch(err => res.status(400).send(err));
};

module.exports = {
  getComments,
  postComment
}