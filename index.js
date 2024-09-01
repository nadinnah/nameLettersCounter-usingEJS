import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  
  var firstname= req.body.fName;
  var lastname=req.body.lName;
  var numOfLetter=firstname.length+lastname.length;
  res.render("index.ejs", {noOfLetters: numOfLetter});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
