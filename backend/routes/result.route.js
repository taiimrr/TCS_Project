var express = require("express");
var Student = require("../models/students");

const router = express.Router();
//Student.create({ name: "taimoor" });
router.route("/:id/result").get((req, res) => {
  var studentId = req.params.id;
  Student.findById(studentId)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
