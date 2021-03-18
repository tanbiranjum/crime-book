const dotenv = require("dotenv");
dotenv.config({ path: "./config.js" });

const app = require("./app");
const mongoose = require("mongoose");

const string = "mongodb://localhost:27017/ninjaBox";

mongoose
  .connect(string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("connection is successfull");
  });

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
