const User = require("./User");
const mongoose = require("mongoose");
const db = require('../config/keys').mongoURI
//create your array. i inserted only 1 object here
const users = [   
  new User({
            username: "superadmin",
            email: "superadmin@gmail.com",
            password: "$2a$10$MGhpfo5vtVruo6sm8H60suEyJgm8bB52tYXSs6yknozQ74MYNnw3q",
            role: 'admin'
        })]
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch(err => {
    console.log(err.stack);
    process.exit(1);
  })
  .then(() => {
    console.log("connected to db in development environment");
  });
//save your data. this is an async operation
//after you make sure you seeded all the products, disconnect automatically
users.map(async (p, index) => {
  await p.save((err, result) => {
    if (index === users.length - 1) {
      console.log("DONE!");
      mongoose.disconnect();
    }
  });
});