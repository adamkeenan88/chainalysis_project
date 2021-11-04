const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

require("./config/mongoose.config");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
require("./routes/stocks.routes")(app);
const server = app.listen(8000, () => {
  console.log("Listening at Port 8000");
});
