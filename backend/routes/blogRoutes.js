/**
 * Route used to post and get all blogs using Express Router
 */
const express = require('express');
const router = express.Router();
const Blog = require('../schemas/Blog');

//Gets all the blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// Route to post a title and content of a blog
router.post('/', async (req, res) => {
  const { title, content } = req.body;
  try {
    const newBlog = new Blog({ title, content });
    //The new blog is saved to the database
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


module.exports = router;

