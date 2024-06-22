const router = require("express").Router();

const {
  getAllRoles,
  getOneRole,
  createRole,
  updateRole,
  deleteRole,
} = require("../controllers/role");

const { 
  checkAuth, 
  checkAdmin, 
  debugging } = require("../middlewares/index");

router.get("/", debugging, checkAuth, checkAdmin, getAllRoles);
router.get("/:id", debugging, checkAuth, checkAdmin, getOneRole);
router.post("/", debugging, checkAuth, checkAdmin, createRole);
router.put("/:id", debugging, checkAuth, checkAdmin, updateRole);
router.delete("/:id", debugging, checkAuth, checkAdmin, deleteRole);

module.exports = router;
