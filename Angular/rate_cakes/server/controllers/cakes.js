const mongoose = require('mongoose');
const Cake = mongoose.model('Cake');
const Rating = mongoose.model('Rating');

module.exports = {
    index: (req,res)=>{
        Cake.find({})
        .then(cakes => res.json(cakes))
        .catch(err => res.send(err))
    },
    show: (req, res)=>{
        Cake.findOne({_id:req.params.id})
        .then(cake => res.json(cake))
        .catch(err => res.send(err))
    },
    create:(req,res)=>{
        Cake.create(req.body)
        .then(cake => res.json(cake))
        .catch(err => res.send(err))
    },
    comment:(req, res)=>{
        Cake.findByIdAndUpdate(req.params.id, {$set: req.body})
        .then(cake => res.json(cake))
        .catch(err => res.send(err))
    }
}