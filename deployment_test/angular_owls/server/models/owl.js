const mongoose = require('mongoose');

const OwlSchema = new mongoose.Schema({
    name:{type:String, required: [true, 'please enter a name for the new owl'], minlength:[2, "owl's name must be at least two characters"], maxlength: [64, "owl's name cannot be more than 64 characters"]},
    age:{type:String, required: [true, 'please enter the age of the new owl']},
    color:{type:String, required:[true, 'please enter the color of the new owl'], minlength:[2, "owl's color must be more than two characters"], maxlength:[64, "owl's color cannot be more than 64 characters"]},
    breed:{type:String, required:[true, 'please enter the breed of the owl'], minlength:[2, "owl's breed must be two characters or greater"], maxlength:[64, "owl's breed must be 64 characters or less"]}
}, {timestamps: true})

mongoose.model('Owl', OwlSchema)