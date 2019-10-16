var express = require("express"),
  path = require("path"),
  app = express(),
  PORT = 3333;

// serve static resources from `webapp/` folder in root
app.use(express.static(path.join(__dirname, "webapp")));

// Listen for requests
var server = app.listen(PORT, function() {
  console.log("Your webapp is ready on http://localhost:" + PORT);
});
