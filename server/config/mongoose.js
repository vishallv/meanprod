const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/PPM', {useUnifiedTopology:true,useNewUrlParser:true});

require('./../model/Product');