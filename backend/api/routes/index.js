const router = require("express").Router();

router.use("/like", require("./like"));
router.use("/post", require("./post"));
router.use("/productcategory", require("./product_category"));
router.use("/productstatus", require("./product_status"));
router.use("/product", require("./product"));
router.use("/role", require("./role"));
router.use("/user", require("./user"));

module.exports = router;
