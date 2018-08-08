const mongoose = require('mongoose');
const Schema = mongoose.Schema

const CommentSchema = new mongoose.Schema({
    poster:{type:String, required:[true, 'a name is required!'], minlength:[2, 'name must be at least 2 characters!'], maxlength:[16, 'name must be under 16 characters!']},
    comment:{type:String, required:[true, 'please enter a comment!'], minlength:[5, 'comments must be at least 5 characters'], maxlength:[255, 'messages must be under 255 characters']},
    _message:{type:Schema.Types.ObjectId, ref: 'Message'}
}, {timestamps: true})

mongoose.model('Comment', CommentSchema)

const MessageSchema = new mongoose.Schema({
    poster:{type:String, required:[true, 'a name is required!'], minlength:[2, 'name must be at least 2 characters!'], maxlength:[16, 'name must be under 16 characters!']},
    message:{type:String, required:[true, 'please enter a message!'], minlength:[5, 'messages must be at least 5 characters'], maxlength:[255, 'messages must be under 255 characters']},
    _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps:true})

mongoose.model('Message', MessageSchema)