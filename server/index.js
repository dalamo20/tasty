const express = require("express");
const app = express();

const port = process.env.PORT || 8055;

app.use(express.static("public"));

app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/src"));

app.listen(8055, function () {
  console.log("Server started at http://localhost%s", port);
});
