const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcrypt');

module.exports = {
    index:(req,res)=>{
        res.render('index')
    },
    register:(req, res)=>{
        var user = new User()
        user.first_name = req.body.first_name
        user.last_name = req.body.last_name
        user.email = req.body.email
        user.birthday = req.body.birthday
        user.password = req.body.password
        user.save(function(err){
            if(err){
                console.log('error!')
                console.log(user.password)
                for(var key in err.errors){
                    req.flash('reg_errors', err.errors[key].message);
                }
                res.redirect('/')
            }
            else{
                user.password = bcrypt.hashSync(req.body.password, 12)
                user.save(function(err){
                    console.log('success!')
                    req.flash('info', 'Successfully registered!')
                    res.redirect('/')
                })
            }
        })
    },
    login:(req, res)=>{
        if(req.body.email.length == 0){
            req.flash('login_errors', 'Login failed, email not found')
                res.redirect('/')
        }
        else{
            User.findOne({email:req.body.email}, (err, user)=>{
                if(err){
                    req.flash('login_errors', 'Login failed, email not found')
                    res.redirect('/')
                }
                else{
                    test_pass = bcrypt.hashSync(req.body.password, 12);
                    if(test_pass != user.password){
                        req.flash('login_errors', 'login failed, incorrect password')
                        res.redirect('/')
                    }
                    else{
                        req.session.email = req.body.email;
                        req.flash('login_success', 'successfully logged in')
                        res.redirect('/')
                    }
                }
            })
        }
    }
}