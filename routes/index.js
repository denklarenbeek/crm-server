const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { catchErrors } = require('../handlers/errorHandlers');
const Blog = mongoose.model('Blog');
const Author = mongoose.model('Author');
const { addAuthor, getAllAuthors, getOneAuthor, updateOneAuthor, deleteOneAuthor } = require('../controllers/authorController');
const { addBlog, getAllBlogs, getOneBlog, updateOneBlog, deleteOneBlog } = require('../controllers/blogController');

router.get('/blogs', catchErrors(getAllBlogs));

router.post('/blog', catchErrors(addBlog));
router.get('/blog/:id', catchErrors(getOneBlog));
router.put('/blog/:id', catchErrors(updateOneBlog));
router.delete('/blog/:id', catchErrors(deleteOneBlog));

router.get('/authors', catchErrors(getAllAuthors));
router.post('/authors', catchErrors(addAuthor));

router.get('/author/:id', catchErrors(getOneAuthor));
router.put('/author/:id', catchErrors(updateOneAuthor));
router.delete('/author/:id', catchErrors(deleteOneAuthor));

module.exports = router;