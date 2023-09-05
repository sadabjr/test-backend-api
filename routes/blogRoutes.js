const express = require("express");
const {
  createBlog,
  getAllBlogs,
  getBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");
const multer = require("multer");

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/", upload.single("imgFile"), createBlog);
router.get("/", getAllBlogs);
router.route("/:id").get(getBlog).put(updateBlog).delete(deleteBlog);

module.exports = router;
