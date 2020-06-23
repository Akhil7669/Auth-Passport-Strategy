require("../api/models/userModel");
const mongoose = require("mongoose");

var uri= "mongodb+srv://akhil569:1234@appcluster-psjrr.mongodb.net/AppCluster?retryWrites=true&w=majority";

const options = {
    reconnectTries: Number.MAX_VALUE,
    poolSize: 10
  };

  mongoose.connect(uri, options).then(
    () => {
      console.log("Database connection established!");
    },
    err => {
      console.log("Error connecting Database instance due to: ", err);
    }
  );