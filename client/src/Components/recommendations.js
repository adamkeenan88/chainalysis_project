import React, { useEffect, useState } from "react";
import axios from "axios";

const DisplayStocks = (props) => {
  const { stockId } = props;
  const [stocksInfo, setStocksInfo] = useState([]);

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
