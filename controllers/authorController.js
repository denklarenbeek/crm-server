const mongoose = require('mongoose');
const Author = mongoose.model('Author');
const Blog = mongoose.model('Blog');

exports.addAuthor = async (req, res, next) => {
    const author = new Author(req.body);
    await author.save();
    res.json(author);
};

exports.getAllAuthors = async (req, res, next) => {
    const authors = await Author.find();
    res.json(authors);
};

exports.getOneAuthor = async (req, res, next) => {
    const author = await Author.find({_id: req.params.id});
    res.json(author);
};

exports.updateOneAuthor = async (req, res, next) => {
    const author = await Author.findOneAndUpdate({_id: req.params.id}, req.body, {
        new: true,
        runValidators: true
    }).exec();
    res.json(author);
};

exports.deleteOneAuthor = async (req, res, next) => {
    const author = await Author.findOneAndRemove({_id: req.params.id});
    res.json(author);
};
