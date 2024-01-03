const express = require("express");
const router = express.Router();

const { login, register, current } = require("../controllers/users");
const { auth } = require("../middleware/auth");

/* login */
router.post("/login", login);
/* register */
router.post("/register", register);
/* current */
router.get("/current", auth, current);

module.exports = router;
