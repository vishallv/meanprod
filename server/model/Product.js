//Initializing model and model schema

const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({

    title : {
        type:String,
        required : [true, 'Please enter a title'],
        minlength : [4, 'Product title should be atleast 4 characters'],
    },
    price : {
        type: Number,
        required : [true, 'Please enter a price'],
        min: [1,"Enter a price above 1$"]
    },
    image : {
        type:String,
        required : [true, 'Please enter a Image URL'],
    }
},
{timestamps:true});

mongoose.model('Product',ProductSchema);