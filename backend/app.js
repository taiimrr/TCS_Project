var express = require("express");
var cors = require("cors");
var mongoose = require("mongoose");

var ClassRouter = require("./routes/class.route");
var Result = require("./routes/result.route");
var Mat = require("./routes/mat.route");

const DB_URI =
  "mongodb+srv://admin:admin123@reactnativeapp.bcip5.mongodb.net/lms?retryWrites=true&w=majority";

const conn = mongoose.connect(DB_URI, {}, (err) => {
  if (err) {
    console.log("Error" + err);
  }
});

const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());

app.use("/class", ClassRouter);
app.use("/result", Result);
app.use("/addmat", Mat);
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

app.listen(port, () => {
  console.log(`listening on the port ${port}`);
});
