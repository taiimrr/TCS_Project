var express = require("express");
var Classm = require("../models/class");

const router = express.Router();

router.route("/class").get((req, res) => {
  Classm.find()
    .then((classes) => res.json(classes))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
