const Comment = require('../database/Comment');
const Post = require('../database/Post');

const getComments = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const comments = await Comment.find().limit(limit * 1).skip((page - 1) * limit).sort({ created: 'desc' });
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

const getCommentsByUserId = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const { userId } = req.params;
  try {
    const comments = await Comment.find({userId}).limit(limit * 1).skip((page - 1) * limit).sort({ created: 'desc' });
    res.status(200).send(comments);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getCommentsByPostId = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const { postId } = req.params;
  try {
    const comments = await Comment.find({postId}).limit(limit * 1).skip((page - 1) * limit).sort({ created: 'desc' });
    res.status(200).send(comments);
  } catch (error) {
    res.status(400).send(error);
  }
};

const postComment = async (req, res) => {
  const { name, user_id } = req.currentUser;
  const { postId, text } = req.body;
  try {
    const comment = await Comment.create({username: name, userId: user_id, text, postId});
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
  getCommentsByUserId,
  getCommentsByPostId,
  postComment,
  updateComment,
  deleteComment
};