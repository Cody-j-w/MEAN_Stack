const mongoose = require('mongoose');
const Task = mongoose.model('Task');

module.exports = {
    index: (req,res)=>{
        Task.find({}, (err, tasksFromDB)=>{
            if(err){
                res.json({message:'Error!', error:err})
            }
            else{
                res.json({message:'success!', data:tasksFromDB})
            }
        })
    },
    show: (req, res)=>{
        Task.findOne({_id:req.params.id}, (err, tasksFromDB)=>{
            if(err){
                res.json({message:'Error!', error:err})
            }
            else{
                res.json({message:'success!', data:tasksFromDB})
            }
        })
    },
    create:(req,res)=>{
        let task = new Task(req.body)
        task.save(function(err){
            if(err){
                res.json({message:'Error!', error:err})
            }
            else{
                res.json({message:'success!', data:task})
            }
        })
    },
    update:(req,res)=>{
        Task.findOne({_id:req.params.id}, (err, task)=>{
            if(err){
                res.json({message:'Error!', error:err})
            }
            else{
                task.title = req.body.title
                task.description = req.body.description
                task.completed = req.body.completed
                task.save(function(err){
                    if(err){
                        res.json({message:'Error!', error:err})
                    }
                    else{
                        res.json({message:'success!', data:task})
                    }
                })
            }
        })
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