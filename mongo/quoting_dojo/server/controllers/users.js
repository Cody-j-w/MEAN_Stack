const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    index: (req, res) => {
        res.render('index')
    },
    create: (req, res) => {
        const user = new User();
        user.name = req.body.name;
        user.quote = req.body.quote;
        user.save((err)=>{
            if(err){
                console.log(err);

                for(var key in err.errors){
                    req.flash('registration', err.errors[key].message);
                }
                res.redirect('/')
            }
            else{
                res.redirect('/quotes')
            }
        })
    },
    quotes: (req, res)=>{
        User.find({}, (err, usersFromDB)=>{
            if(err){
                console.log(err);
            }
            else{
                res.render('quotes', {users:usersFromDB});
            }
        })
    }
}