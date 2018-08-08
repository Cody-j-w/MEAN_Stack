const posts = require('./../controllers/posts');

module.exports = app =>{
    app.get('/', posts.index),
    app.post('/message', posts.message),
    app.post('/message/:id', posts.comment)
}