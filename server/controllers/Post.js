const Post = require('../database/Post');
const Comment = require('../database/Comment');

const getPosts = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const posts = await Post.aggregate(aggregates(page, limit));
    res.status(200).send(posts);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getPostById = async (req, res) => {
  const { postId } = req.params;
  try {
    const post = await Post.aggregate(aggregates(page, limit, {_id: postId}));
    res.status(200).send(post);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getPostsByUserId = async (req, res) => {
  const { userId } = req.params;
  const { page = 1, limit = 10 } = req.query;
  try {
    const posts = await Post.aggregate(aggregates(page, limit, {userId}));
    res.status(200).send(posts);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getPostsByCommunity = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const { community } = req.params;
  try {
    const posts = await Post.aggregate(aggregates(page, limit, {community}))
    res.status(200).send(posts);
  } catch (error) {
    res.status(400).send(error);
  }
};

const postPost = async (req, res) => {
  const { title, text, tags, photos, community, location } = req.body;
  const { name, user_id } = req.currentUser;
  try {
    const post = await Post.create({title, text, tags, photos, community, location, username: name, userId: user_id});
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


const aggregates = (page, limit, match = {}, or = []) => {
  return [
    {$match: match},
    {$lookup: {
      from: 'comments',
      localField: 'commentId',
      foreignField: '_id',
      as: 'comments'
    }},
    {$lookup: {
      from: 'users',
      localField: 'userId',
      foreignField: 'userId',
      as: 'userInfo'
    }},
    {$unwind: {path: '$userInfo', preserveNullAndEmptyArrays: true}},
    {$project: {
      _id: '$_id',
      title: '$title',
      text: '$text',
      location: '$location',
      tags: '$tags',
      photos: '$photos',
      created: '$created',
      updated: '$updated',
      community: '$community',
      commentId: '$comments',
      userInfo: '$userInfo',
    }},
    {$sort: { created: -1 }},
    {
      $limit: (limit * 1)
    },
    {
      $skip: (page - 1) * limit
    }
  ]
}

const getPostWithTagFilter = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const { filters } = req.params;
  let filterArray = filters.split(',');
  const filterParams = filterArray.map(tag => ({tags: tag}));
  try {
    const posts = await Post.aggregate(aggregates(page, limit, {$or: filterParams}));
    res.status(200).send(posts);
  } catch (error) {
    res.status(400).send(error);
  }
}

const getPostWithTagFilterByUserId = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const { userId, filters } = req.params;
  let filterArray = filters.split(',');
  const filterParams = filterArray.map(tag => ({tags: tag}));
  try {
    const posts = await Post.aggregate(aggregates(page, limit, {$and: [{$or: filterParams}, {userId}]}));
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
  getPostWithTagFilter,
  getPostWithTagFilterByUserId
};