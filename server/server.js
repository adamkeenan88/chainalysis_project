const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

require("./config/mongoose.config");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./routes/stocks.routes")(app);
const server = app.listen(8000, () => {
  console.log("Listening at Port 8000");
});

const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT"],
    allowedHeaders: ["*"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("socket id: " + socket.id);

  socket.on("event_from_client", (data) => {
    // send a message with "data" to ALL clients EXCEPT for the one that emitted the
    //     "event_from_client" event
    socket.broadcast.emit("event_to_all_other_clients", data);
  });
});
