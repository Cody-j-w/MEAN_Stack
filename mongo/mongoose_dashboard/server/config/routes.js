const owls = require('./../controllers/owls');

module.exports = (app) => {
    app.get('/', owls.index),
    app.get('/owls/:id', owls.owl),
    app.get('/new', owls.new),
    app.post('/owls', owls.create),
    app.get('/owls/edit/:id', owls.edit),
    app.post('/owls/:id', owls.update),
    app.post('/owls/destroy/:id', owls.destroy)
}
