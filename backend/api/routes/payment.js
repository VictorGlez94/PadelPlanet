const router = require("express").Router();

const {
  getPayment,
  getConfig,
  createPayment
} = require("../controllers/payment");

router.get("/", getPayment);
router.get("/config", getConfig);
router.post("/create-payment-intent", createPayment);

module.exports = router;
