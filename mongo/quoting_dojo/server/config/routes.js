const users = require('./../controllers/users');

module.exports = (app) => {
    app.get('/', users.index),
    app.get('/quotes', users.quotes),
    app.post('/quotes', users.create)
}