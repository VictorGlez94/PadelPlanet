const router = require("express").Router();

const {
  getAllPosts,
  getOnePost,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/post");

router.get("/", getAllPosts);
router.get("/:id", getOnePost);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
