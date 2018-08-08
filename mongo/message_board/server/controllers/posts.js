const mongoose = require('mongoose');
const Comment = mongoose.model('Comment');
const Message = mongoose.model('Message');

module.exports = {
    index: (req, res)=>{
        Message.find({}).populate('_comments').exec(function(err, messagesFromDB){
            if(err){
                console.log('something bad happened!')
            }
            else{
                res.render('index', {posts:messagesFromDB})
            }
        })
    },
    message:(req, res)=>{
        var newMessage = new Message()
        newMessage.poster = req.body.name
        newMessage.message = req.body.message
        console.log(newMessage)
        newMessage.save(function(err){
            if(err){
                console.log('Oops.')
                res.redirect('/')
            }
            else{
                res.redirect('/')
            }
        })
    },
    comment:(req, res)=>{
        Message.findOne({_id:req.params.id}, (err, message)=>{
            if(err){
                console.log('error! Returning to index.')
                res.redirect('/')
            }
            else{
                const comment = new Comment()
                comment.poster = req.body.name
                comment.comment = req.body.comment
                comment._message = req.params.id
                comment.save(function(err){
                    if(err){
                        res.redirect('/');
                    }
                });
                message._comments.push(comment);
                message.save(function(err){
                    if(err){
                        res.redirect('/');
                    }
                    else{
                        console.log(comment);
                        res.redirect('/');
                    }
                });
            }
        })
    }
}