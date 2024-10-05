const Post = require("../models/Post");
const parseVErr = require("../utils/parseValidationErrs")

const getAllPosts = async (req, res) => {
	const posts = await Post.find({ createdBy: req.user._id });
	res.render("posts", { posts });
};

const submitNewPost = async (req, res) => {
  	const {
			body: { title, message },
			user: { _id: userId },
		} = req;
	console.log( userId, title, message)
  const post = await Post.create()
  // res.send("add a new post");
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
	const {
		body: { title, message },
		user: { _id: userId },
		params: { id: postId },
	} = req;

	const post = await Post.findOne({ _id: postId, createdBy: userId });

	if (!title === "" || !message === "") {
		req.flash("error", "Title or Message fields cannot be empty");
	}

  try {
    await Post.findByIdAndUpdate({ _id: postId, createdBy: userId }, req.body, {
      new: true,
      runValidators: true,
    });
    req.flash("info", "Post Updated.");
    getAllPosts(req, res);
  } catch (error) {
    if (error.constructor.name === "ValidationError") {
      parseVErr(error, req)
    } else if (error) {
      req.flash("error", error._message);
    } else {
      return next(error)
    }
    return res.render("post", { post: post, errors: req.flash("error") });
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
