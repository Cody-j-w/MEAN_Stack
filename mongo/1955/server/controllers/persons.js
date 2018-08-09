const mongoose = require('mongoose');
const Person = mongoose.model('Person');

module.exports = {
    index: (req,res)=>{
        Person.find({}, (err, personsFromDB)=>{
            if(err){
                res.json({message:'Error!', error:err})
            }
            else{
                res.json({message:'success!', data:personsFromDB})
            }
        })
    },
    new: (req,res)=>{
        let newPerson = new Person()
        newPerson.first_name = req.params.first_name
        newPerson.last_name = req.params.last_name
        newPerson.save(function(err){
            if(err){
                res.json({message:'Error!', error:err})
            }
            else{
                res.redirect('/')
            }
        })
    },
    remove: (req,res)=>{
        Person.remove({first_name:req.params.first_name, last_name:req.params.last_name}, (err)=>{
            if(err){
                res.json({message:'Error!', error:err})
            }
            else{
                res.json({message:'Entry removed.'})
            }
        })

    }

}