const mongoose = require('mongoose');

var Post = mongoose.model('Post', {
    title: { type: String },
    body: { type: String },
    likes: { type: Number }, 
    created_by: { type: String },
    created_at: { type: Date, default: Date.now }
},'posts');

module.exports = { Post };