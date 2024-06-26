const router = require("express").Router();

const {
  login,
  signup
} = require("../controllers/auth.controller");

const { debugging } = require("../middlewares/index");

router.post('/login',debugging, login)
router.post('/signup',debugging, signup)

module.exports = router;
