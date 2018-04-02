const express = require("express");
const Router = express.Router;
const router = Router();

router.use("/auth", require("./auth"));
router.use("/users", require("./users"));
router.use("/grants", require("./grants"));
router.use("/org-details", require("./org-details"));

module.exports = router;
