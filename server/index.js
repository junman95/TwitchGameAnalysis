const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");


//MongoDB(Mongoose) Connections//
mongoose
  .connect(
    "mongodb+srv://junma:1q2w3e4r@junmanreact.1anwd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connection : True"))
  .catch((err) => {
    console.log(err);
    console.log("mongoDB connection : False");
  });


//Default page
app.get("/", (req, res) => {
  res.send("Hello World!~~~");
});


//Port listening 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
