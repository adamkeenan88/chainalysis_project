const Stock = require("../models/stocks.model");

module.exports.index = (req, res) => {
  res.json({ message: "Hello World" });
};

module.exports.createStock = (request, response) => {
  const { Bit1, Bit2, Eth1, Eth2 } = request.body;
  Stock.create({
    Bit1,
    Bit2,
    Eth1,
    Eth2,
  })
    .then((stock) => response.json(stock))
    .catch((err) => {
      console.log("Mongoose Error:");
      console.log(err);
      response.status(400).json({ errors: err });
    });
};
module.exports.findStock = (req, res) => {
  Stock.find()
    .then((allStocks) => res.json({ stock: allStocks }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneStock = (req, res) => {
  Stock.findOne({ _id: req.params.stockId })
    .then((oneStock) => res.json({ stock: oneStock }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateStock = (req, res) => {
  const { body } = req;
  Stock.findOneAndUpdate({ _id: req.params.stockId }, body, {
    new: true,
    runValidators: true,
    context: "query",
  })
    .then((updatedStock) => res.json({ stock: updatedStock }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
