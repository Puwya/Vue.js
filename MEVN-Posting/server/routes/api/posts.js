const express = require('express');
const Post = require('../../modules/Post.js');

const router = express.Router();

// Get Posts
router.get('/', async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
});

// Add Post
router.post('/', async (req, res) => {
  const NewPost = new Post(req.body);
  await NewPost.save();
  res.status(201).json(NewPost);
});

// Delete Post
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await Post.deleteOne({ _id: id });
  res.status(200).send();
});

module.exports = router;
