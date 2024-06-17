const router = require("express").Router();

const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  getOwnProfile,
} = require("../controllers/user");

const {
  checkAuth,
  checkAdmin
} = require('../middlewares/index')

router.get("/", checkAuth, checkAdmin, getAllUsers);
router.get('/profile', checkAuth, checkAdmin, getOwnProfile)
router.get("/:id", checkAuth, checkAdmin, getOneUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);



module.exports = router;
