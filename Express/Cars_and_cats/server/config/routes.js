module.exports = app =>{
    // console.log('Here I am.')
    app.get('', (request, response)=>{
        console.log('I am at Index');
        response.render('index')
    })
    
    app.get('/cars', (request, response)=>{
        console.log('I am in cars');
        response.render('cars', {car: ''})
    })
    app.get('/cats', (request, response)=>{
        console.log('i am in cats')
        response.render('cats', {cat: ''})
    })
    app.get('/form', (request, response)=>{
        console.log('I am in form')
        response.render('form')
    })

}