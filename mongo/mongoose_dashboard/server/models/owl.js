const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{type:String, required: true, minlength:2, maxlength: 64},
    age:{type:String, required: true},
    color:{type:String, required:true, minlength:2, maxlength:64},
    breed:{type:String, required:true, minlength:2, maxlength:64}
}, {timestamps: true})

mongoose.model('Owl', UserSchema)