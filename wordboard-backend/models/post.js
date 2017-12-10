var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
    content: String,
    author_name: String,
    date_created: { type: Date, default: Date.now },
});

var PostSchema = new mongoose.Schema({
    comments: [CommentSchema],    
    title: String,
    content: String, 
    author_id: String,
    author_name: String, 
    date_created: { type: Date, default: Date.now },
});

// use Mongoose virtuals to return id instead of _id
PostSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
PostSchema.set('toJSON', {
    virtuals: true
});

// use Mongoose virtuals to return id instead of _id
CommentSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
CommentSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('Post', PostSchema);