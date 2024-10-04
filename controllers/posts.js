const Post = require("../models/Post");
const parseVErr = require("../utils/parseValidationErrs");

const getAllPosts = async (req, res) => {
	const posts = await Post.find({ createdBy: req.user._id });
	res.render("posts", { posts });
};

const submitNewPost = async (req, res) => {
	res.send("add a new post");
};

const getPostForm = async (req, res) => {
	res.render("post", { post: null });
};

const getPostEdit = async (req, res) => {
	try {
		const postId = req.params.id;
		const user = req.user._id;
		const post = await Post.findOne({ _id: postId, createdBy: user });
		res.render("post", { post });
	} catch (error) {
		console.log(error);
	}
};

const getPostUpdate = async (req, res) => {

	try {
		console.log("posts.js", req.body);
		Post.findByIdAndUpdate();
		res.send("Update specific post");
  } catch (error) {
   console 
  }
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
