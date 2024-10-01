const Post = require("../models/Post")

const getAllPosts = async (req, res) => {
  res.send("Retrieve all posts")
}

const addNewPost = async (req, res) => {
  res.send("add a new post")
}

const newPostForm = async (req, res) => {
  res.send("form for a new post")
}

const getPostEdit = async (req, res) => {
  const  _id  = req.params;
  res.send('Retrieve single post and show in edit box')
}

const getPostUpdate = async (req, res) => {
  res.send("Update specific post")
}

const deletePost = async (req, res) => {
  res.send("Delete a post")
}

module.exports = {getAllPosts, addNewPost, newPostForm, getPostEdit, getPostUpdate, deletePost}