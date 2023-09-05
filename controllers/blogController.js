const asyncHandler = require("express-async-handler");

const Blog = require("../models/blogModel");

// @desc Create a new blog
// @route POST /api/blogs
// @access Private
const createBlog = asyncHandler(async (req, res) => {
  const { title, shortDescription, description, imgFile, subtitle } = req.body;

  if (!title) {
    res.status(400);
    throw new Error("Please include title");
  }

  const blog = await Blog.create({
    title,
    shortDescription,
    description,
    imgFile: {
      data: req?.file?.buffer,
      contentType: req?.file?.mimetype,
    },
    subtitle,
  });

  res.status(201).json(blog);
});

// @desc Get all blogs
// @route POST /api/blogs
// @access Private
const getAllBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find();

  res.status(200).json(blogs);
});

// @desc Get user single blog
// @route POST /api/blogs/:id
// @access Private
const getBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(404);
    throw new Error("Blog not found");
  }

  res.status(200).json(blog);
});

// @desc Update blog
// @route PUT /api/blogs/:id
// @access Private
const updateBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(404);
    throw new Error("Blog not found");
  }

  const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedBlog);
});

// @desc Delete blog
// @route DELETE /api/blogs/:id
// @access Private
const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  console.log({ blog });

  if (!blog) {
    res.status(404);
    throw new Error("Blog not found");
  }

  //   await blog.remove();
  if (blog) {
    await Blog.findOneAndDelete({ _id: blog._id });
  }

  res.status(200).json({ success: true });
});

module.exports = {
  createBlog,
  getAllBlogs,
  getBlog,
  updateBlog,
  deleteBlog,
};
