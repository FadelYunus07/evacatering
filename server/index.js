const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.listen(3002, () => {
  console.log("Server is running in port 3002");
});

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "ummicatering",
});

app.post("/login", (req, res) => {
  const sentLoginUsername = req.body.LoginUsername;
  const sentLoginPassword = req.body.LoginPassword;

  const SQL = "SELECT * FROM login WHERE user = ? AND pass = ?";
  const values = [sentLoginUsername, sentLoginPassword];

  db.query(SQL, values, (err, results) => {
    if (err) {
      res.send({ error: err });
    }
    if (results.length > 0) {
      res.send({ value: results });
    } else {
      res.send({ message: "Invalid Username or Password" });
    }
  });
});
