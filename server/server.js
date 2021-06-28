const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport")
const path = require('path');
// const routes = require('./router/index');
const router = require('./router/routes/users');
require('dotenv').config();

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db,{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(x => {
    console.log(
      `Connected to MongoDB! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });
  
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

app.use(cors());


app.use(express.static(__dirname));
app.use('/files', express.static(path.join(__dirname, 'files')));

// simple route
app.use('/', router);
// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
})