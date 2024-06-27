const router = require("express").Router();

const {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");

const { 
  debugging, 
  checkAuth, 
  checkAdmin } = require("../middlewares");

router.get("/", debugging, getAllProducts);
router.get("/:id", debugging, checkAuth, checkAdmin, getOneProduct);
router.post("/", debugging, checkAuth, checkAdmin, createProduct);
router.put("/:id", debugging, checkAuth, updateProduct);
router.delete("/:id", debugging, checkAuth, checkAdmin, deleteProduct);

module.exports = router;
