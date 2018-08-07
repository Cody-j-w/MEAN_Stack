const mongoose = require('mongoose');
const Owl = mongoose.model('Owl');

module.exports = {
    index: (req, res) => {
        Owl.find({}, (err, owlsFromDB)=>{
            if(err){
                console.log(err);
            }
            else{
                res.render('index', {owls:owlsFromDB});
            }
        })
    },
    new: (req, res)=>{
        console.log('*****************************************************')
        console.log('Made it!')
        console.log('*****************************************************')
        res.render('new_owl')
    },
    owl: (req, res) =>{
        Owl.findOne({_id: req.params.id}, (err, owlsFromDB)=>{
            if(err){
                console.log(req.params.id);
                res.redirect('/')
            }
            else{
                res.render('owl', {owl:owlsFromDB});
            }
        })
    },
    
    create: (req, res)=>{
        var newOwl = new Owl()
        newOwl.name = req.body.name
        newOwl.age = req.body.age
        newOwl.color = req.body.color
        newOwl.breed = req.body.breed
        console.log(newOwl)
        newOwl.save(function(err){
            if(err){

                for(var key in err.errors){
                    req.flash('registration', err.errors[key].message);
                }
                res.redirect('/new')
            }
            else{
                res.redirect('/')
            }
        })
    },
    edit:(req, res)=>{
        Owl.findOne({_id: req.params.id}, (err, owlsFromDB)=>{
            if(err){
                console.log(err);
                res.redirect('/')
            }
            else{
                res.render('change_owl', {owl:owlsFromDB});
            }
        })
    },
    update:(req, res)=>{
        Owl.findOne({_id: req.params.id}, (err, owl)=>{
                owl.name = req.body.name
                owl.age = req.body.age
                owl.color = req.body.color
                owl.breed = req.body.breed
                owl.save(err=>{
                    if(err){
                        console.log(err);
        
                        for(var key in err.errors){
                            req.flash('registration', err.errors[key].message);
                        }
                        res.redirect('/')
                    }
                    else{
                        res.redirect('/')
                    }
                }) 
        })
    },
    destroy:(req,res)=>{
        Owl.remove({_id:req.params.id}, err=>{
            if(err){
                console.log(err);

                for(var key in err.errors){
                    req.flash('registration', err.errors[key].message);
                }
                res.redirect('/')
            }
            else{
                res.redirect('/')
            }
        })
    }
}