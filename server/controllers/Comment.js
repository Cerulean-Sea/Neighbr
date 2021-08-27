const Comment = require('../database/Comment');
const Post = require('../database/Post');

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).send(comments);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getCommentById = async (req, res) => {
  const { commentId } = req.params;
  try {
    const comment = await Comment.find({_id: commentId});
    res.status(200).send(comment);
  } catch (error) {
    res.status(400).send(error);
  }
};

const postComment = async (req, res) => {
  const { postId } = req.body;
  try {
    const comment = await Comment.create(req.body);
    const updatePost = await Post.updateOne(
      {_id: postId},
      {
        $push: {commentId: comment._id}
      });
    res.status(201).send(comment);
  } catch (error) {
    res.status(400).send(error);
  }
};

const updateComment = async (req, res) => {
  const { commentId } = req.params;
  const updatedComment = req.body;
  try {
    const comment = await Comment.findByIdAndUpdate(commentId, updatedComment, {new: true});
    res.status(200).send(comment);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}

const deleteComment = async (req, res) => {
  const { commentId } = req.params;
  try {
    const comment = await Comment.deleteOne({_id: commentId});
    res.status(200).send(comment);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}

module.exports = {
  getComments,
  getCommentById,
  postComment,
  updateComment,
  deleteComment
};