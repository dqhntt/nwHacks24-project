const mongoose = require('mongoose');
const Schema = mongoose.Schema

const users_schema = new Schema({
    email: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        required: true
    }
})

const User = mongoose.model('User', users_schema)

module.exports = User;