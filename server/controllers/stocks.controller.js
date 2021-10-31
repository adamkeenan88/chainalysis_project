const Car = require("../models/car.model");

module.exports.index = (req, res) => {
  res.json({ message: "Hello World" });
};

module.exports.createCar = (request, response) => {
  const { year, make, model, engine, color } = request.body;

  Car.create({
    year,
    make,
    model,
    engine,
    color,
  })
    .then((car) => response.json(car))
    .catch((err) => {
      console.log("Mongoose Error:");
      console.log(err);
      response.status(400).json({ errors: err });
    });
};
module.exports.findCar = (req, res) => {
  Car.find()
    .then((allCars) => res.json({ car: allCars }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneCar = (req, res) => {
  Car.findOne({ _id: req.params.carId })
    .then((oneCar) => res.json({ car: oneCar }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateCar = (req, res) => {
  const { body } = req;
  Car.findOneAndUpdate({ _id: req.params.carId }, body, {
    new: true,
    runValidators: true,
    context: "query",
  })
    .then((updatedCar) => res.json({ car: updatedCar }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteCar = (req, res) => {
  Car.deleteOne({ _id: req.params.carId })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
