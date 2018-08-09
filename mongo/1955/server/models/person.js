const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    first_name:{type:String, required:true},
    last_name:{type:String, required:true}
}, {timestamps: true})

mongoose.model('Person', PersonSchema);