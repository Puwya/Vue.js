const { Schema, model } = require('mongoose');

const PostSchema = new Schema({
  name: String,
  author: String,
  createdAt: Date,
});

const Post = model('post', PostSchema);

module.exports = Post;
