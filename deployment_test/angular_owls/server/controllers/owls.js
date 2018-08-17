const mongoose = require('mongoose');
const Owl = mongoose.model('Owl');
const path = require('path');


module.exports = {
    index: (req, res) => {
        console.log('In controller!')
        Owl.find({})
        .then(owls => res.json(owls))
        .catch(err => res.send(err))
    },
    show: (req, res) =>{
        Owl.findOne({_id:req.params.id})
        .then(owl => res.json(owl))
        .catch(err => res.send(err))
    },
    
    create: (req, res)=>{
        Owl.create(req.body)
        .then(owl => res.json(owl))
        .catch(err => res.send(err))
    },
    
    update:(req, res)=>{
        Owl.findByIdAndUpdate(req.params.id, {$set: req.body})
        .then(owl => res.json(owl))
        .catch(err => res.send(err))
    },
    destroy:(req,res)=>{
        Owl.deleteOne({_id:req.params.id})
        .then(owl => res.json(owl))
        .catch(err => res.send(err))
    }
}