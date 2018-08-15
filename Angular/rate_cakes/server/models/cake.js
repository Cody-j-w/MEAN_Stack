const mongoose = require('mongoose');

const RatingSchema = new mongoose.Schema({
    rating:{type:Number, required:true},
    comment:{type:String, required:true, minlength:5, maxlength:64}
}, {timestanmps:true})

mongoose.model('Rating', RatingSchema);

const CakeSchema = new mongoose.Schema({
    baker:{type:String, required:[true, 'please provide the baker!'], minlength:[2, "baker's name must be two characters or more."], maxlength:[16, "baker's name must be 16 characters or less."]},
    img:{type:String, required:[true, "we can't rate your cake if you don't give us a cake!"]},
    ratings:[RatingSchema]
}, {timestamps:true})

mongoose.model('Cake', CakeSchema);