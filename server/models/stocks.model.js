const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema(
  {
    Bit1: {
      type: Number,
    },
    Bit2: {
      type: Number,
    },
    Eth1: {
      type: Number,
    },
    Eth2: {
      type: Number,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Stock", StockSchema);
