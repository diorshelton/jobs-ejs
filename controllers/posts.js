const Post = require("../models/Post");

const getAllPosts = async (req, res) => {
	const posts = await Post.find({ createdBy: req.user._id });
	res.render("post", { posts });
};

const submitNewPost = async (req, res) => {
	res.send("add a new post");
};

const getPostForm = async (req, res) => {
	res.render("post", { post: null });
};

const getPostEdit = async (req, res) => {

    const postId  = req.params;
    const user  = req.user._id;
    const body  = req.body
    console.log(postId, user, body);
	// try {
  const post = await Post.findOne({ _id: postId, createdBy: user })
 res.send("Get POST Edit")
};

const getPostUpdate = async (req, res) => {
	res.send("Update specific post");
};

const deletePost = async (req, res) => {
	res.send("Delete a post");
};

module.exports = {
	getAllPosts,
	submitNewPost,
	getPostForm,
	getPostEdit,
	getPostUpdate,
	deletePost,
};
