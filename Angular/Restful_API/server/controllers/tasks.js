const mongoose = require('mongoose');
const Task = mongoose.model('Task');

module.exports = {
    index: (req,res)=>{
        Task.find({})
        .then(tasks => res.json(tasks))
        .catch(err => res.send(err))
    },
    show: (req, res)=>{
        Task.findOne({_id:req.params.id})
        .then(task => res.json(task))
        .catch(err => res.send(err))
    },
    create:(req,res)=>{
        Task.create(req.body)
        .then(task => res.json(task))
        .catch(err => res.send(err))
    },
    update:(req,res)=>{
        Task.findByIdAndUpdate(req.params.id, {$set: req.body})
        .then(task => res.json(task))
        .catch(err => res.send(err))
    },
    delete:(req,res)=>{
        Task.deleteOne({_id:req.params.id}, (err)=>{
            if(err){
                res.json({message:'Error!', error:err})
            }
            else{
                res.json({message:'success!'})
            }
        })
    }
}