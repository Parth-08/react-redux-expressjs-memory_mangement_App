const express = require("express")
const getPost = require('../controllers/posts')
const router = express.Router();


router.get('/',getPost.getPost);
router.post('/',getPost.createPost);







module.exports =  router;