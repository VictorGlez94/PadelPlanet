const router = require("express").Router();

const {
  getAllLikes,
  getOneLike,
  createLike,
  updateLike,
  deleteLike,
} = require("../controllers/like");

router.get("/", getAllLikes);
router.get("/:id", getOneLike);
router.post("/", createLike);
router.put("/:id", updateLike);
router.delete("/:id", deleteLike);

module.exports = router;
