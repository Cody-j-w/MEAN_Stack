const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{type:String, required:[true, 'please enter a name!'], minlength: 2, maxlength: 24},
    quote:{type:String, required:[true, 'please enter a quote!'], minlength: 5, maxlength: 255}

}, {timestamps: true})

mongoose.model('User', UserSchema);