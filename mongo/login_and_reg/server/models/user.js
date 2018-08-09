const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({
    first_name:{type:String, required:[true, 'please enter a valid first name!'], minlength:[2, 'first name must be at least 2 characters!'], maxlength:[16, 'first name must be 16 characters or less!']},
    last_name:{type:String, required:[true, 'please enter a valid last name!'], minlength:[2, 'last name must be at least 2 characters!'], maxlength:[16, 'last name must be 16 characters or less!']},
    email:{type:String, required:[true, 'please enter a valid email!'], match: [/@/, 'please enter a valid email!'], unique:[true, 'this email already exists!'], uniqueCaseInsensitive:[true, 'this email already exists!']},
    password:{type:String, required:[true, 'please enter a password!'], minlength:[8, 'password must be at least 8 characters!'], maxlength:[24, 'password must be 24 characters or less!']},
    birthday:{type:Date, required:[true, 'please provide a birthday']}
}, {timestamps:true})

UserSchema.plugin(uniqueValidator, {message:'email already taken!'});
mongoose.model('User', UserSchema)
