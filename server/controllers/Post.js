const Post = require('../database/Post');
const Comment = require('../database/Comment');

const getPosts = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const posts = await Post.find().limit(limit * 1).skip((page - 1) * limit).populate(['commentId']).sort({ created: 'desc' });
    res.status(200).send(posts);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getPostById = async (req, res) => {
  const { postId } = req.params;
  try {
    const post = await Post.find({_id: postId}).populate(['commentId']);
    res.status(200).send(post);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getPostsByUserId = async (req, res) => {
  const { userId } = req.params;
  const { page = 1, limit = 10 } = req.query;
  try {
    const posts = await Post.find({userId}).limit(limit * 1).skip((page - 1) * limit).populate(['commentId']);
    res.status(200).send(posts);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getPostsByCommunity = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const { community } = req.params;
  try {
    const posts = await Post.find({community}).limit(limit * 1).skip((page - 1) * limit).populate(['commentId']);
    res.status(200).send(posts);
  } catch (error) {
    res.status(400).send(error);
  }
};

const postPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).send(post);
  } catch (error) {
    res.status(400).send(error);
  }
};

const updatePost = async (req, res) => {
  const { postId } = req.params;
  const updatedPost = req.body;
  try {
    const post = await Post.findByIdAndUpdate(postId, updatedPost, {new: true});
    res.status(200).send(post);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}

const deletePost = async (req, res) => {
  const { postId } = req.params;
  try {
    const post = await Post.deleteOne({_id: postId});
    res.status(200).send(post);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}

const getPostWithTagFilter = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const { filters } = req.params;
  let filterArray = filters.split(',');
  const filterParams = filterArray.map(tag => ({tags: tag}));
  try {
    const posts = await Post.find({ $or: filterParams }).limit(limit * 1).skip((page - 1) * limit).populate(['commentId']).sort({ created: 'desc' });
    res.status(200).send(posts);
  } catch (error) {
    res.status(400).send(error);
  }
}

module.exports = {
  getPosts,
  getPostById,
  getPostsByUserId,
  getPostsByCommunity,
  postPost,
  updatePost,
  deletePost,
  getPostWithTagFilter
};