const faker = require('faker');
const mongoose = require('mongoose');

const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

const users = [];
const posts = [];
const comments = [];
const defaultTags = ['Happenings', 'Swaps', 'Safety', 'Favors', 'Chit Chat'];

const createUsers = async (n = 5) => {
  for (let i = 0; i < n; i++) {
    let name = faker.name.findName();
    let email = faker.internet.email();
    let userId = faker.datatype.uuid();
    let community = faker.address.zipCode().slice(0, 5);
    let user = await User.create({name, email, userId, community});
    users.push(user);
  }
  console.log('Created users:', users);
};

const createPosts = async (users) => {
  for (const user of users) {
    let username = user.name;
    let userId = user.userId;
    let title = faker.lorem.words();
    let text = faker.lorem.sentence();
    let latitude = faker.address.latitude();
    let longitude = faker.address.longitude();
    let location = { latitude, longitude };
    let tags = [defaultTags[Math.floor(Math.random() * defaultTags.length)]];
    let photos = [faker.image.imageUrl()];
    let post = await Post.create({ username, userId, title, text, location, tags, photos });
    posts.push(post);
  }
  console.log('Created posts:', posts);
};

const createComments = async (posts) => {
  for (const user of users) {
    let username = user.name;
    let userId = user.userId;
    for (const post of posts) {
      let postId = post.id;
      let text = faker.lorem.sentence();
      let comment = await Comment.create({ text, username, userId, postId });
      let updatePost = await Post.updateOne(
        {_id: postId},
        {$push:
          {commentId: comment._id}
        });
      comments.push(comment);
    }
  }
  console.log('Created comments:', comments);
};

const seedData = async (n) => {
  await createUsers(n);
  await createPosts(users);
  await createComments(posts);
  mongoose.connection.close();
};

seedData(10);