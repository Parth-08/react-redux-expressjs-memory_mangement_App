const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    creator:String,
    title: String,
    message:String,
    tag: String,
    selectedFile:String,
    createdAt:{
        type:Date,
        default:new Date()
    }
})

const product = mongoose.model("product",productSchema);

module.exports = product;