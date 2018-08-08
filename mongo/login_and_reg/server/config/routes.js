const users = require('./../controllers/users');

module.exports = app =>{
    app.get('/', users.index),
    app.post('/register', users.register),
    app.post('/login', users.login)
}