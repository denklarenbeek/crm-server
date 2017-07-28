const mongoose = require('mongoose');
const slug = require('slugs');
const Author = mongoose.model('Author');
const Blog = mongoose.model('Blog');
const { slugGenerator } = require('../handlers/slugGenerator');

exports.addBlog = async (req, res, next) => {
    const author = await Author.findOne({ name: req.body.author })
    req.body.author = author._id;
    const blog = new Blog(req.body);
    await blog.save();
    res.json(blog);
};

exports.getAllBlogs = async (req, res, next) => {
    const blogs = await Blog.find();
    res.json(blogs);
};

exports.getOneBlog = async (req, res, next) => {
    const blog = await Blog.findOne({_id: req.params.id});
    res.json(blog);
}

exports.updateOneBlog = async (req, res, next) => {
    const author = await Author.findOne({name: req.body.author})
    req.body.author = author._id;
    if(req.body.title){
        req.body.slug = await slugGenerator(req.body.title);
    }
    const blog = await Blog.findOneAndUpdate({_id: req.params.id}, req.body, {
        new: true,
        runValidators: true
    }).exec();
    res.json(blog);
}

exports.deleteOneBlog = async (req, res, next) => {
    const blog = await Blog.findOneAndRemove({_id: req.params.id});
    res.json(blog);
}