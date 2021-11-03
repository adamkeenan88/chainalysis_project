import React, { useEffect, useState } from "react";
import axios from "axios";

const DisplayStocks = (props) => {
  const { stockId } = props;
  const [stocksInfo, setStocksInfo] = useState([]);

  const onClickHandle = (e) => {
    e.preventDefault();
    console.log("Click Triggered");
    axios
      .get(`http://localhost:8000/api/Stock/${stockId}`)
      .then((queriedStocks) => {
        console.log(queriedStocks.data.stock);
        setStocksInfo(queriedStocks.data.stock);
        console.log(stocksInfo);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <button onClick={onClickHandle}>Click to Show Prices!</button>
      {setStocksInfo ? (
        <div>
          <p>Bitcoin Exchange 1: {stocksInfo.Bit1}</p>
          <p>Bitcoin Exchange 2: {stocksInfo.Bit2}</p>
          <p>Ethereum Exchange 1: {stocksInfo.Eth1}</p>
          <p>Ethereum Exchange 2: {stocksInfo.Eth2}</p>
        </div>
      ) : (
        "Stocks Loading"
      )}
    </div>
  );
};

export default DisplayStocks;
