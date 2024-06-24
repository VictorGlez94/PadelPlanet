const router = require("express").Router();

const {
  getAllPosts,
  getOnePost,
  createPost,
  updatePost,
  deletePost,
  createPostWithProduct,
  getAllMyPosts,
} = require("../controllers/post");
const { checkAuth, debugging, checkAdmin } = require("../middlewares");

router.get("/", debugging, checkAuth, checkAdmin, getAllPosts);
router.get("/getMyPosts", debugging, checkAuth, getAllMyPosts);
router.get("/:id", debugging, checkAuth, checkAdmin, getOnePost);
router.post("/", debugging, checkAuth, checkAdmin, createPost);
router.post("/createPostWithProduct", checkAuth, createPostWithProduct)
router.put("/:id", debugging, checkAuth, checkAdmin, updatePost);
router.delete("/:id", debugging, checkAuth, checkAdmin, deletePost);

module.exports = router;
