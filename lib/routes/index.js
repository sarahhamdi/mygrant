const express = require("express");
const Router = express.Router;
const router = Router();

router.use("/auth", require("./auth"));
router.use("/users", require("./users"));

module.exports = router;
