const router = require("express").Router();

const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  getOwnProfile,
  updateOwnProfile,
  updatePassword,
  deleteOwnUser
} = require("../controllers/user");

const {
  checkAuth,
  checkAdmin,
  debugging
} = require('../middlewares/index')

router.get("/", debugging, checkAuth, checkAdmin, getAllUsers);
router.get("/ownProfile", debugging, checkAuth, getOwnProfile);
router.get("/:id", debugging, checkAuth, checkAdmin, getOneUser);
router.post("/",debugging, checkAdmin, createUser);
router.put("/:id", debugging, checkAuth, checkAdmin, updateUser);
router.put("/ownProfile/update",debugging, checkAuth, updateOwnProfile);
router.put("/ownProfile/updatePassword", debugging, checkAuth, updatePassword)
router.delete("/:id",debugging, checkAuth, checkAdmin, deleteUser);
router.delete("/ownProfile/deletede",debugging, checkAuth, deleteOwnUser);




module.exports = router;
