const User = require('./User');
const Post = require("./Post");
const Comment = require("./Comment");

// create associations
User.hasMany(Post, {
    foreignKey: 'userId'
});

Post.belongsTo(User, {
    foreignKey: 'userId',
});

Comment.belongsTo(User, {
    foreignKey: 'userId',
});

module.exports = { User, Post, Comment };