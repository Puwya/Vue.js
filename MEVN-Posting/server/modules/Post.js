const { Schema, model } = require('mongoose');

const PostSchema = new Schema({
  post_name: String,
  language: String,
});

const Post = model('post', PostSchema);

module.exports = Post;
