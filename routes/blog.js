const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// Create a new blog
router.post('/blogs', async (req, res) => {
  try {
    const newBlog = req.body;
    const createdBlog = await Blog.create(newBlog);
    res.status(201).json(createdBlog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all blogs
router.get('/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single blog by ID
router.get('/blogs/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog) {
      res.status(200).json(blog);
    } else {
      res.status(404).json({ message: 'Blog not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a blog by ID
router.put('/blogs/:id', async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedBlog) {
      res.status(200).json(updatedBlog);
    } else {
      res.status(404).json({ message: 'Blog not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a blog by ID
router.delete('/blogs/:id', async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (deletedBlog) {
      res.status(200).json({ message: 'Blog deleted' });
    } else {
      res.status(404).json({ message: 'Blog not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
