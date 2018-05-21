const mongoose = require('mongoose');

var post = mongoose.model('post', {
    text: { type: String },
    created_by: { type: String },
    created_at: {type: Date, default: Date.now}
});

module.exports = { post };