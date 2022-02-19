const express = require("express");
const app = express();
const format = require("date-format");
require("dotenv").config();

console.log(process.env.PORT);
console.log(process.env.v1);

const PORT = 3000 || process.env.PORT;
const v1 = 1 || process.env.v1;

app.get("/", (req, res) => {
  console.log("Hello World");
  res.status(201).send("Hello World!!!, I am a server");
});

app.get(`/api/${v1}/insta`, (req, res) => {
  console.log(`http://localhost:${PORT}/api/${v1}/insta`);
  const insta = {
    name: "Shahab Instagram",
    followers: "1.2M",
    following: "1.2M",
    posts: "122",
    likes: "1.2M",
    date: format.asString("dd-MM-yyyy", new Date()),
  };

  res.status(201).json({ insta });
});

app.get(`/api/${v1}/fb`, (req, res) => {
  console.log(`http://localhost:${PORT}/api/${v1}/fb`);
  const fb = {
    name: "Shahab fb",
    followers: "1.2M",
    following: "1.2M",
    posts: "122",
    likes: "1.2M",
    date: format.asString("dd-MM-yyyy", new Date()),
  };

  res.status(201).json({ fb });
});

app.get(`/api/${v1}/linkedin`, (req, res) => {
  console.log(`http://localhost:${PORT}/api/${v1}/linkedin`);
  const linkedin = {
    name: "Shahab linkedin",
    followers: "1.2M",
    following: "1.2M",
    posts: "122",
    likes: "1.2M",
    date: format.asString("dd-MM-yyyy", new Date()),
  };

  res.status(201).json({ linkedin });
});

app.get(`/api/${v1}/:token`, (req, res) => {
  console.log(req.params.token);
  res.status(201).send(`Param: ${req.params.token}`);
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
