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
        type: Date,
        default: Date.now
    },
    lastModified: {
        type: Date
    },
    status: {
        type: String,
        default: 'Draft'
    },
    author: {
        type: mongoose.Schema.ObjectId,
        ref: 'Author',
        required: 'You must supply an author'
    }
});

// Generate a Slug for the Blog
blogSchema.pre('save', async function(next){
    //Only generates a slug when the title is modified
    if(!this.isModified('title')){
        next();
        return;
    }
    this.slug = slug(this.title);

    const slugRegEx = new RegExp(`^(${this.slug})((-[0-9]*$)?)$`, 'i');
    const blogsWithSlug = await this.constructor.find({ slug: slugRegEx });
    if(blogsWithSlug.length) {
        this.slug = `${this.slug}-${blogsWithSlug.length + 1}`;
    }
    next();
})

// When the Title, Body or the Autoher is changed, change the LastModified Date
blogSchema.pre('save', async function(next){
    if(!this.isModified('title') || !this.isModified('body') || !this.isModified('author')){
        next()
        return;
    }

    this.lastModified = Date.now();
    next()
})

module.exports = mongoose.model('Blog', blogSchema);