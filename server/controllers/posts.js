const productModel = require("../models/posts")


exports.getPost = async (req, res) => {
    try{
        const product = await productModel.find();
        res.status(401).json(product);
    }catch(error){
        res.status(401).json({message:error.message});
    }
}

exports.createPost = async (req, res) => {
    const product = req.body;
    try{
        const newProduct = productModel.create(product)
        await newProduct.save();
    }catch(error){
        res.status(401).json({message:error.message})
    }
}