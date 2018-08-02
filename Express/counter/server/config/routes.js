module.exports = app =>{
    app.get('/', (req, res)=>{
        if(req.session.views){
            req.session.views++
        }
        else{
            req.session.views = 0
        }
        res.render('index', {views:req.session.views})
    })
    app.get('/double', (req, res)=>{
        if(req.session.views){
            req.session.views +=1
        }
        else{
            req.session.views = 1
        }
        res.redirect('/')
    })
    app.get('/reset', (req, res)=>{
        req.session.destroy();
        res.redirect('/')
    })
}