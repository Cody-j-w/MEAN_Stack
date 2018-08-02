module.exports = app=>{
    app.get('/', (req, res)=>{
        res.render('index')
    })
    app.post('/results', (req,res)=>{
        console.log('POST DATA', req.body)
        user = req.body
        res.redirect('/results')
    })
    app.get('/results', (req, res)=>{
       res.render('results', {user: user})
    })

}