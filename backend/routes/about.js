const router = require("express").Router();
router.route("/").post((req, res) => {
    res.send("hi");
});