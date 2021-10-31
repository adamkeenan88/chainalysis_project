const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema(
  {
    year: {
      type: Number,
      required: [true, "Year is Required"],
      minLength: [3, "A Year must be at least 3 characters"],
    },
    make: {
      type: String,
      required: [true, "Car Make is Required"],
      minLength: [2, "A Car Make must be at least 2 characters"],
    },
    model: {
      type: String,
      required: [true, "Car Model is Required"],
      minLength: [2, "A Car Model must be at least 2 characters"],
    },
    engine: {
      type: String,
      required: [true, "Car Engine is Required"],
    },
    color: {
      type: String,
      required: [false],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Car", CarSchema);
