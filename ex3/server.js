const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");

//Set up default mongoose connection
const mongoDB = "mongodb://127.0.0.1/se";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//Define a schema
var AgentsSchema = new mongoose.Schema({
  _id: String,
  id: Number,
  listing_id: Number,
  agent_first_name: String,
  agent_last_name: String,
  agent_username: String,
});

// Compile model from schema
const Agents = mongoose.model("Agents", AgentsSchema);

const app = express();
app.use(express.static(path.join(__dirname, "build")));

app.get("/ping", function (req, res) {
  return res.send("pong");
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "server-index.html"));
});

app.get("/agents", async (req, res) => {
  const agents = await Agents.find({}); // "id agent_first_name agent_last_name");
  res.status(200).json(agents);
});

app.listen(process.env.PORT || 8080);
