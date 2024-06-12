const router = require("express").Router();

const {
  getAllProductStatuses,
  getOneProductStatus,
  createProductStatus,
  updateProductStatus,
  deleteProductStatus,
} = require("../controllers/product_status");

router.get("/", getAllProductStatuses);
router.get("/:id", getOneProductStatus);
router.post("/", createProductStatus);
router.put("/:id", updateProductStatus);
router.delete("/:id", deleteProductStatus);

module.exports = router;
