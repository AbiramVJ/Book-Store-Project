const mongoose = require("mongoose");


// create schema

const BookSchema = mongoose.Schema(
{
    image:String,
    title :String,
    actor:String
    
    }
);

const MovieModel = mongoose.model("movies", BookSchema);
module.exports = MovieModel;