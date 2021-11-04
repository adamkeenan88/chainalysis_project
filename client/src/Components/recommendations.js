import React, { useEffect, useState } from "react";
import axios from "axios";
// Pulling in our stockId prop from the App.js file so we can use it in our Axios GET request to grab the last set of prices
const DisplayStocks = (props) => {
  const { stockId } = props;
  const [stocksInfo, setStocksInfo] = useState([]);
  // This useEffect will only run once we get a stockId from App.js.  This way it won't run empty and return an error or undefined (or run multiple times)
  useEffect(() => {
    console.log("Click Triggered");
    axios
      .get(`http://localhost:8000/api/Stock/${stockId}`)
      .then((queriedStocks) => {
        // console.log(queriedStocks.data.stock);
        setStocksInfo(queriedStocks.data.stock);
      })
      .catch((err) => console.log(err));
  }, [stockId]);
  return (
    <div>
      {/* Checking to make sure we have info in stocksInfo before pulling our info and displaying it */}
      {stocksInfo ? (
        <div>
          <p>Bitcoin Exchange 1: {stocksInfo.Bit1}</p>
          <p>Bitcoin Exchange 2: {stocksInfo.Bit2}</p>
          <p>Ethereum Exchange 1: {stocksInfo.Eth1}</p>
          <p>Ethereum Exchange 2: {stocksInfo.Eth2}</p>
        </div>
      ) : (
        "Stocks Loading"
      )}
      <div>
        {/* Analysis section to compare the different exchange prices and provide recommendation for buying/selling.  Includes link to applicable exchange */}
        {stocksInfo.Bit1 > stocksInfo.Bit2 ? (
          <p>
            Buy Bitcoin on Exchange 2{" "}
            <a href="https://www.cryptocompare.com/coins/btc/overview/USD">
              here.
            </a>
          </p>
        ) : (
          <p>
            Buy Bitcoin on Exchange 1{" "}
            <a href="https://exchange.blockchain.com/trade">here.</a>
          </p>
        )}
      </div>
      <div>
        {stocksInfo.Bit1 > stocksInfo.Bit2 ? (
          <p>
            Sell Bitcoin on Exchange 1{" "}
            <a href="https://exchange.blockchain.com/trade">here.</a>
          </p>
        ) : (
          <p>
            Sell Bitcoin on Exchange 2{" "}
            <a href="https://www.cryptocompare.com/coins/btc/overview/USD">
              here.
            </a>
          </p>
        )}
      </div>
      <div>
        {stocksInfo.Eth1 > stocksInfo.Eth2 ? (
          <p>
            Buy Ethereum on Exchange 2{" "}
            <a href="https://www.cryptocompare.com/coins/eth/overview/USD">
              here.
            </a>
          </p>
        ) : (
          <p>
            Buy Ethereum on Exchange 1{" "}
            <a href="https://exchange.blockchain.com/trade/ETH-USD">here.</a>
          </p>
        )}
      </div>
      <div>
        {stocksInfo.Eth1 > stocksInfo.Eth2 ? (
          <p>
            Sell Ethereum on Exchange 1{" "}
            <a href="https://exchange.blockchain.com/trade/ETH-USD">here.</a>
          </p>
        ) : (
          <p>
            Sell Ethereum on Exchange 2{" "}
            <a href="https://www.cryptocompare.com/coins/eth/overview/USD">
              here.
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default DisplayStocks;
