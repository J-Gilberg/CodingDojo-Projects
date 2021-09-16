const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: {
        type: String
        , required: [true, "Title is required"]
        , minlength: [2, "Title must be at least 2 characters long"]
        , maxlength: [40, "Title must be at less than 40 characters"]
    }
}, { timestamps: true });

module.exports.Author = mongoose.model('Author', AuthorSchema);

//come back too watch his video

// const UserSchema = new mongoose.Schema({
//     userName: {
//         type: String
//         , required: [true, "Title is required"]
//         , minlength: [2, "Title must be at least 2 characters long"]
//         , maxlength: [40, "Title must be at less than 40 characters"]
//     }
//     ,    email: {
//         type: String
//         , required: [true, "Title is required"]
//         , minlength: [2, "Title must be at least 2 characters long"]
//         , maxlength: [40, "Title must be at less than 40 characters"]
//         , required: {}
//     }
//     ,    password: {
//         type: String
//         , required: [true, "Title is required"]
//         , minlength: [2, "Title must be at least 2 characters long"]
//         , maxlength: [40, "Title must be at less than 40 characters"]
//     }
// }, { timestamps: true });

// module.exports.User = mongoose.model('User', userSchema);