var expressFunctions = require("express");
var expressApp = expressFunctions();

const students = [
  { stdid: "B6016357", name: "Trirong Bamrungketaudom" },
  { stdid: "B6022299", name: "Jaidee DeeJai" },
];

expressApp.use(function (req, res, next) {
  console.log("Logged");
  next();
});

expressApp.use(function (req, res, next) {
  console.log("Authentication");
  next();
});

expressApp.get("/", function (req, res) {
  res.status(200).send("Hello World");
});

expressApp.get("/api/resource/students/:stdid", function (req, res) {
  const stdid = req.params.stdid;
  if (stdid == "B6016357") {
    res.status(200).send(students[0]);
  } else if (stdid == "B6022299") {
    res.status(200).send(students[1]);
  } else {
    res.status(404).send("Error 404 not Found");
  }
});

expressApp.listen(3000, function () {
  console.log("Listening on port 3000");
});
