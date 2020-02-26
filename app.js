const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const stops = require("./routes/api/stops");
const spots = require("./routes/api/spots");
const bodyParser = require('body-parser')
const passport = require('passport');

const User = require("./models/User");

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

app.use(passport.initialize());
// require('./config/passport')(passport);

app.get("/", (req, res) => {
  res.send("Second Hello World");
});

app.use("/api/users", users);
app.use("/api/stops", stops);
app.use("/api/spots", spots);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));