const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        require: "Please fill in a title"
    },
    slug: String,
    body: {
        type: String,
        trim: true,
        require: "Please fill in the text of the blog"
    },
    createdOn: {
        tpye: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Blog', blogSchema);