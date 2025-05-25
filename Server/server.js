import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connecting to MongoDB through Local MongoDB compass or Atlas.
mongoose.connect("mongodb://localhost:27017/SelfUpgrade", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Creating schema.
const userSchema = new mongoose.Schema({
  FirstName: String,
  LastName: String,
  Email: String,
  Phone: String,
  CurrentPosition: String,
});

const User = mongoose.model("User", userSchema);

// Creating a route to save the data from the website form.
app.post("/saveUser", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.json({ message: "Successfully you entered our program." });
  } catch (error) {
    res.status(500).json({ message: "Error saving user", error });
  }
});

// Starting the server.
app.listen(5000, () => console.log("Server port is running on 5000"));
