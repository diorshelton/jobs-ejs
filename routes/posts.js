const express = require("express")
const router = express.Router();

const {getAllPosts, addNewPost, newPostForm, getPostEdit, getPostUpdate, deletePost} = require("../controllers/posts")

router.get("/", getAllPosts).post("/", addNewPost)
router.get("/new", newPostForm)
router.get("/edit/:id", getPostEdit) 
router.post("/update/:id", getPostUpdate); 
router.post("/delete/:id", deletePost); 

module.exports = router;