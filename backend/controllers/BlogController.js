const blogModel = require("../models/BlogModel");
const userModel = require("../models/UserModel");

exports.createBlog = async (req, res) => {
  try {
    const { title, description, image, id } = req.body;
    if (!title || !description || !image) {
      return res.status(400).send({
        message: "Success false",
        success: false,
      });
    }

    const blog = new blogModel({
      title: title,
      description: description,
      image: image,
    });
    await blog.save();
    const user = await userModel.findById(id);
    user.blogs.push(blog);
    await user.save();

    return res.status(200).send({
      message: "Succesfully created",
      success: true,
      blog,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Internal Server Error",
      success: false,
      error,
    });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.body;

    const blog = await blogModel.findByIdAndDelete(id);
    if (!blog) {
      return res.status(404).send({
        message: "Blog not found",
        success: false,
      });
    }

    return res.status(200).send({
      message: "Successfully deleted",
      success: true,
      blog,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Internal Server Error",
      success: false,
      error,
    });
  }
};

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogModel.find();
    return res.status(200).send({
      message: "All blogs data",
      success: true,
      blogs,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Internal Server Error",
      success: false,
      error,
    });
  }
};
