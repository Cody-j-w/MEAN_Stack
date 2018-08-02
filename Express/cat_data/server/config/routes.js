module.exports = app =>{
    app.get('/', (request, response)=>{
        response.render('index')
    })
    
    app.get('/bub', (request, response)=>{
        var bubs_spots = ['behind the laundry basket', 'in the laundry basket', 'in the shower', 'under the window']
        response.render('cat', {name: 'Bub', age:'3', sleeping_spots: bubs_spots})
    })
    app.get('/frankie', (request, response)=>{
        var frankies_spots = ['in the coat closet', 'in the linen closet', 'in the game closet', 'on the couch']
        response.render('cat', {name: 'Frankie', age:'2', sleeping_spots:frankies_spots})
    })
    app.get('/norgannon', (request, response)=>{
        var norgannons_spots = ['Ulduar', 'Uldorus', 'Uldaman', 'Uldir']
        response.render('cat', {name:'Norgannon', age:'untold millions', sleeping_spots:norgannons_spots})
    })

}