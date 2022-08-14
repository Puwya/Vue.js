const express = require('express');
const Post = require('../../modules/Post.js');

const router = express.Router();

// Get Posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Add Post
router.post('/', async (req, res) => {
  try {
    if (!req.body.name) throw new Error('Need to provide a name!');
    const NewPost = new Post({
      name: req.body.name,
      author: req.body.author,
      createdAt: new Date(),
    });
    await NewPost.save();
    res.status(201).json(`New Post added with id: ${NewPost?.id}`);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Delete Post
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await Post.deleteOne({ _id: id });
    res.status(200).send(`Post: ${id} Deleted`);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
