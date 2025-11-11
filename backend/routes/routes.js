const express = require('express');
const router = express.Router();
const Blog = require('../schemas/Blog');

router.get('/posts', async (req, res) => {
  try {
    const posts = await Blog.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

