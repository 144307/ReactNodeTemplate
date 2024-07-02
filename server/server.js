const express = require("express");

const hostname = "127.0.0.1";
const port = 8000;

const app = express();
app.use(express.static(__dirname + "/public/"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log("server");

app.get("/api", (req, res) => {
  console.log("/api");
  res.send("server message");
});

app.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
  // console.log(MyBD.checkLoginData("user", "pass"));
});
