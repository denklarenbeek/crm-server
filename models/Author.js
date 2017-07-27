const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Please fill in a name'
    },
    description: {
        type: String,
        trim: true
    },
    role: {
        type: String,
        require: 'Please add the role for this author'
    }
});

module.exports = mongoose.model('Author', authorSchema);