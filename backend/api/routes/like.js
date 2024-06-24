const router = require("express").Router();

const {
  getAllLikes,
  getOneLike,
  createLike,
  updateLike,
  deleteLike,
  getOwnLikesList
} = require("../controllers/like");

const { 
  debugging, 
  checkAuth, 
  checkAdmin } = require("../middlewares");

router.get("/", debugging, checkAuth, checkAdmin, getAllLikes);
router.get("/getMyLikes", debugging, checkAuth, getOwnLikesList);
router.get("/:id", debugging, checkAuth, checkAdmin, getOneLike);
router.post("/", debugging, checkAuth, checkAdmin, createLike);
router.put("/:id", debugging, checkAuth, checkAdmin, updateLike);
router.delete("/:id", debugging, checkAuth, checkAdmin, deleteLike);


module.exports = router;
