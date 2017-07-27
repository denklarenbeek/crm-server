const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Blog = require('../models/Blog');

router.get('/blogs', (req, res, next) => {
    res.send('Blog API')
});

module.exports = router;