const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.post('*', (req, res) => {
    const {to, subject, body} = req.body;
    res.send(`Email with subject: '${subject}', body: ${body}, sent to ${to}`)
});

app.listen(port);
