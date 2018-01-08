
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.post('*', (req, res) => {
    console.log(req);
 res.send("we are up for posting");
});

app.listen(port);
