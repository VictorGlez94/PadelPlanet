const router = require("express").Router();

const {
  getAllProductStatuses,
  getOneProductStatus,
  createProductStatus,
  updateProductStatus,
  deleteProductStatus,
} = require("../controllers/product_status");
const { debugging, checkAuth, checkAdmin } = require("../middlewares");

router.get("/", debugging, checkAuth, getAllProductStatuses);
router.get("/:id", debugging, checkAuth, checkAdmin, getOneProductStatus);
router.post("/", debugging, checkAuth, checkAdmin, createProductStatus);
router.put("/:id", debugging, checkAuth, checkAdmin, updateProductStatus);
router.delete("/:id", debugging, checkAuth, checkAdmin, deleteProductStatus);

module.exports = router;
