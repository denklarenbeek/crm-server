const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Blog = mongoose.model('Blog');

router.get('/blogs', async (req, res, next) => {
    const blogs = await Blog.find();
    res.json(blogs);
});

module.exports = router;