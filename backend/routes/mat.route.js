var express = require("express");

var Mat = require("../models/material");

const router = express.Router();
// Classm.create(
//   { name: "bcs", subjects: "computer science", students: 5 },
//   (err) => {
//     console.log(err);
//   }
// );

router.route("/addmat").post((req, res) => {
  var newMat = new Mat();
  newMat.type = req.body.type;
  newMat.content = req.body.content;
  newMat.class = req.body.class;

  newMat.save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Material Uploaded");
    }
  });
});

module.exports = router;
