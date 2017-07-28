const mongoose = require('mongoose');
const slug = require('slugs');
const Blog = mongoose.model('Blog');

exports.slugGenerator = async (title) => {
    const newSlug = slug(title);
    const slugRegEx = new RegExp(`^(${newSlug})((-[0-9]*$)?)$`, 'i');
    const blogsWithSlug = await Blog.find({ slug: slugRegEx });
    if(blogsWithSlug.length) {
        newsSlug = `${newSlug}-${blogsWithSlug.length + 1}`;
    }
    return newsSlug;
};