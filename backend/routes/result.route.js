var express = require("express");
var Student = require("../models/student.model");

const router = express.Router();
Result.create(
  { name: "Muhammad Imran", totalMarks: 1100, marksObtained: 1100 },
  (err) => {
    console.log(err);
  }
);

router.route("/").get((req, res) => {
  var studentId = req.params.id;
  Student.findByID(studentId)
    .then((data) => res.json(data.Student_Result))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
