const persons = require('./../controllers/persons');

module.exports = (app) => {
    app.get('/', persons.index),
    app.get('/:first_name%20:last_name', persons.show_one),
    app.get('/new/:first_name%20:last_name', persons.new),
    app.get('/remove/:first_name%20:last_name/', persons.remove)
}