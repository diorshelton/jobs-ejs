const express = require("express")
const router = express.Router();

const {getAllPosts, addNewPost, newPostForm, getPostEdit, getPostUpdate, deletePost} = require("../controllers/posts")

router.get("/", getAllPosts)
//  Add a new post listing
router.post("/", addNewPost)
// Put up the form to create a new entry
router.get("/new", newPostForm)
// Get entry and show it in the edit box
router.get("/edit/:id",getPostEdit) 
// Update a particular entry
router.post("/update/:id", getPostUpdate); 
//Delete an entry
router.post("/delete/:id", deletePost); 

module.exports = router;