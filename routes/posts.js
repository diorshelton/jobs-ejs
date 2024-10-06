const express = require("express")
const router = express.Router();

const {getAllPosts, submitNewPost, getPostForm, getPostEdit, getPostUpdate, deletePost} = require("../controllers/posts")

router.get("/", getAllPosts).post("/", submitNewPost)
router.get("/new", getPostForm)
router.get("/edit/:id", getPostEdit) 
router.post("/update/:id", getPostUpdate); 
router.post("/delete/:id", deletePost); 

module.exports = router;