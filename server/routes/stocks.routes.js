const StockController = require("../controllers/stocks.controller");

module.exports = (app) => {
  app.get("/healthcheck", (req, res) => {
    res.send("Everything ok");
  });
  app.post("/api/Stock", StockController.createStock);
  app.get("/api", StockController.findStock);
  app.get("/api/Stock/:stockId", StockController.findOneStock);
};
