const router = require("express").Router();

const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  getOwnProfile,
  updateOwnProfile,
  updatePassword
} = require("../controllers/user");

const {
  checkAuth,
  checkAdmin,
  debugging
} = require('../middlewares/index')

router.get("/", checkAuth, checkAdmin, getAllUsers);
router.get('/ownProfile', checkAuth, getOwnProfile)
router.get("/:id", checkAuth, checkAdmin, getOneUser);
router.post("/", createUser);
router.put("/:id",checkAuth, updateUser);
router.put("/ownProfile/update",debugging, checkAuth, updateOwnProfile);
router.delete("/:id", deleteUser);
router.put("/ownProfile/updatePassword", debugging, checkAuth, updatePassword)



module.exports = router;
