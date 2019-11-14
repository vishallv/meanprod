
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    getAll: function(req,res) {
        Product.find()
        .then(data => res.json(data))
        .catch(err => res.json(err))
    },
    getOne: function(req,res) {
        Product.findOne({_id: req.params.id})
        .then(data => res.json(data))
        .catch(err => res.json(err))
    },
    create: function(req,res) {
        Product.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err))

    },
    update: function(req,res) {
        Product.findOneAndUpdate({_id:req.params.id},req.body,{runValidators:true})
        .then(data => res.json(data))
        .catch(err => res.json(err))

    },
    delete:function(req,res) {
        Product.findByIdAndDelete({_id:req.params.id})
        .then(data => res.json(data))
        .catch(err => res.json(err))
    }
}