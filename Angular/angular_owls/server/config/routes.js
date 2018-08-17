const owls = require('./../controllers/owls');

module.exports = (app) => {
    
    app.get('/owls', owls.index),
    app.get('/owls/:id', owls.show),
    app.post('/owls', owls.create),
    app.put('/owls/:id', owls.update),
    app.delete('/owls/:id', owls.destroy)
}
