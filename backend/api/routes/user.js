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
  checkAuth
} = require('../middlewares/index')

router.get("/",checkAuth,  getAllUsers);
router.get('/profile', checkAuth, getOwnProfile)
router.get("/:id", getOneUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);



module.exports = router;
