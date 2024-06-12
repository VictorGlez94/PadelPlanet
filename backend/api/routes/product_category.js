const router = require("express").Router();

const {
  getAllProductCategories,
  getOneProductCategory,
  createProductCategory,
  updateProductCategory,
  deleteProductCategory,
} = require("../controllers/product_category");

router.get("/", getAllProductCategories);
router.get("/:id", getOneProductCategory);
router.post("/", createProductCategory);
router.put("/:id", updateProductCategory);
router.delete("/:id", deleteProductCategory);

module.exports = router;
