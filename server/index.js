const express = require("express");
const bodyParser = require("body-parser");
const pdf = require("html-pdf");
const cors = require("cors");
const JsonDB = require("node-json-db").JsonDB;
const Config = require("node-json-db/dist/lib/JsonDBConfig").Config;
const pdfTemplate = require("./documents");

const app = express();

const port = process.env.PORT || 5000;

var db = new JsonDB(new Config("myDataBase", true, true, "/"));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var count = 0;

app.post('/save-form', (req, res) => {
count ++;
  db.push(`/test${count}`, req.body);
  db.push(`/test${count}/key`, count);
})

app.get("/fetch-form-data", (req, res) => {
  var data = db.getData("/");
  res.send(data);
});

app.post("/create-pdf", (req, res) => {
  console.log(req.body.firstName);
  pdf.create(pdfTemplate(req.body), {}).toFile("result.pdf", (err) => {
    if (err) {
      res.send(Promise.reject());
    }

    res.send(Promise.resolve());
  });
});

app.get("/fetch-pdf", (req, res) => {
  res.sendFile(`${__dirname}/result.pdf`);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
