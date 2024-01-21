const mongoose = require('mongoose');
const Schema = mongoose.Schema

const posts_schema = new Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: false
    }
})

const Post = mongoose.model('Post', posts_schema)

module.exports = Post;