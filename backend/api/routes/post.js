const router = require("express").Router();

const {
  getAllPosts,
  getOnePost,
  createPost,
  updatePost,
  deletePost,
  createPostWithProduct,
} = require("../controllers/post");
const { checkAuth } = require("../middlewares");

router.get("/", getAllPosts);
router.get("/:id", getOnePost);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.post("/createPostWithProduct", checkAuth, createPostWithProduct)

module.exports = router;
