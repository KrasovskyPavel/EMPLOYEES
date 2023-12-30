const express = require("express");
const router = express.Router();

const { login, register, current } = require("../controllers/users");

/* login */
router.post("/login", login);
/* register */
router.post("/register", register);
/* current */
router.get("/current", current);

module.exports = router;
