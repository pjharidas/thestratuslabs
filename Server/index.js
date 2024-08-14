const express = require("express");
const path = require("path");
const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  // send landing page here
  res.sendFile(path.join(__dirname, "landingPage.html"));
});
app.listen(3000, () => {
  console.log("server started");
});



app.all("*", (req, res) => {
  res.send("404 not found");
});

//  404 page  
app.use((req, res) => {
  res.status(404).send("404 not found");
});