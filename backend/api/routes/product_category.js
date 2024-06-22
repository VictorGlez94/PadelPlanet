const router = require("express").Router();

const {
  getAllProductCategories,
  getOneProductCategory,
  createProductCategory,
  updateProductCategory,
  deleteProductCategory,
} = require("../controllers/product_category");
const { checkAdmin, checkAuth, debugging } = require("../middlewares");

router.get("/", debugging, checkAuth, checkAdmin, getAllProductCategories);
router.get("/:id", debugging, checkAuth, checkAdmin, getOneProductCategory);
router.post("/", debugging, checkAuth, checkAdmin, createProductCategory);
router.put("/:id", debugging, checkAuth, checkAdmin, updateProductCategory);
router.delete("/:id", debugging, checkAuth, checkAdmin, deleteProductCategory);

module.exports = router;
