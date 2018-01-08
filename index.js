const express = require("express");
const bodyParser = require("body-parser");
const mail = require("./services/mail");
const app = express();
const port = process.env.PORT || 3000;

require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post("*", async (req, res) => {
  const { to, subject, body } = req.body;
  await mail.send({
    to,
    subject,
    body
  });
  res.send(`Email with subject: '${subject}', body: ${body}, sent to ${to}`);
});

app.get("*", (req, res) => {
  res.send("You probably don't want to be browsing here");
});

app.listen(port);
