const mongoose = require('mongoose');
const Schema = mongoose.Schema

const rewards_schema = new Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    }
})

const Reward = mongoose.model('Reward', rewards_schema)

module.exports = Reward;