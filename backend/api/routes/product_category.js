const router = require("express").Router();

const {
  getAllProductsCategories,
  getOneProductsCategory,
  createProductsCategory,
  updateProductsCategory,
  deleteProductsCategory,
} = require("../controllers/products_category");

router.get("/", getAllProductsCategories);
router.get("/:id", getOneProductsCategory);
router.post("/", createProductsCategory);
router.put("/:id", updateProductsCategory);
router.delete("/:id", deleteProductsCategory);

module.exports = router;
