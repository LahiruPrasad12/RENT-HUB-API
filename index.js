const express = require("express");
const mongoose = require("mongoose");
const app = require('./server');
const port = 3000;

mongoose.set("strictQuery", false);

const BASE_URL =
  "mongodb+srv://LahiruPrasad12:Lahiru12@cluster0.n1wciok.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(BASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(
    async () => {
      console.log("Rent-Hub DB Connected");
    },
    (err) => {
      console.log(err, "Error");
    }
  );

app.listen(port, () => {
  console.log(`Rent-Hub Server Started..`);
});


