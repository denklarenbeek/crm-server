const mongoose = require('mongoose');
const slug = require('slugs');
const Blog = mongoose.model('Blog');

exports.slugGenerator = async (title) => {
    console.log(title);
    let newSlug = slug(title);
    const slugRegEx = new RegExp(`^(${newSlug})((-[0-9]*$)?)$`, 'i');
    const blogsWithSlug = await Blog.find({ slug: slugRegEx });
    if(blogsWithSlug.length) {
        let = `${newSlug}-${blogsWithSlug.length + 1}`;
    }
    return newSlug;
};