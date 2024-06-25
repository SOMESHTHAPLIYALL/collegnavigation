const express = require("express");
const {
  createBlog,
  deleteBlog,
  getAllBlogs,
} = require("../controllers/BlogController");

const router = express.Router();

router.post("/create", createBlog);

router.post("/delete", deleteBlog);

router.get("/allblogs", getAllBlogs);

module.exports = router;
