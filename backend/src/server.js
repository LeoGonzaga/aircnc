const express = require("express");
const mongoose = require("mongoose");
const routes = require("./router");
const cors = require("cors");
const path = require("path");

mongoose.connect(
  `mongodb://leoleo:leoleo@cluster0-shard-00-00-zbj1s.mongodb.net:27017,cluster0-shard-00-01-zbj1s.mongodb.net:27017,cluster0-shard-00-02-zbj1s.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const app = express();
app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

app.listen(3030, () => {
  console.log("Server online");
});
