const router = require("express").Router();

const {
  getAllRoles,
  getOneRole,
  createRole,
  updateRole,
  deleteRole,
} = require("../controllers/role");

router.get("/", getAllRoles);
router.get("/:id", getOneRole);
router.post("/", createRole);
router.put("/:id", updateRole);
router.delete("/:id", deleteRole);

module.exports = router;
