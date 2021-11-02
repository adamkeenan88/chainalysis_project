const CarController = require("../controllers/cars.controller");

module.exports = (app) => {
  app.get("/healthcheck", (req, res) => {
    res.send("Everything ok");
  });
  app.post("/api/car", CarController.createCar);
  app.get("/api", CarController.findCar);
  app.get("/api/car/:carId", CarController.findOneCar);
  app.put("/api/car/:carId", CarController.updateCar);
  app.delete("/api/car/:carId", CarController.deleteCar);
};
