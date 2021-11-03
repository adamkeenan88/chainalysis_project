import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import DisplayStocks from "./Components/recommendations";

function App() {
  const [Bit1, setBit1] = useState("");
  const [Bit2, setBit2] = useState("");
  const [Eth1, setEth1] = useState("");
  const [Eth2, setEth2] = useState("");
  const [stockId, setStockId] = useState("");
  useEffect(() => {
    const URL = "https://api.blockchain.com/v3/exchange/tickers/BTC-USD";
    const USER_TOKEN = "82e5aad3-967e-417c-9c6f-82a897b3a603";
    const AuthString = "Bearer ".concat(USER_TOKEN);
    axios
      .get(URL, { headers: { Authorization: AuthString } })
      .then((response) => {
        console.log(response.data);
        setBit1(response.data.last_trade_price);
      })
      .catch((error) => {
        console.log("error " + error);
      });
  }, []);
  useEffect(() => {
    const URL = "https://api.blockchain.com/v3/exchange/tickers/ETH-USD";
    const USER_TOKEN = "82e5aad3-967e-417c-9c6f-82a897b3a603";
    const AuthString = "Bearer ".concat(USER_TOKEN);
    axios
      .get(URL, { headers: { Authorization: AuthString } })
      .then((response) => {
        console.log(response.data);
        setEth1(response.data.last_trade_price);
      })
      .catch((error) => {
        console.log("error " + error);
      });
  }, []);
  useEffect(() => {
    const URL =
      "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD";
    const USER_TOKEN =
      "5a04c723bfb95037e838e1a32471f370b94da79354fb820070e789999aa9d78f";
    const AuthString = "Bearer ".concat(USER_TOKEN);
    axios
      .get(URL, { headers: { Authorization: AuthString } })
      .then((response) => {
        console.log(response.data);
        setBit2(response.data.USD);
      })
      .catch((error) => {
        console.log("error " + error);
      });
  }, []);
  useEffect(() => {
    const URL =
      "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD";
    const USER_TOKEN =
      "5a04c723bfb95037e838e1a32471f370b94da79354fb820070e789999aa9d78f";
    const AuthString = "Bearer ".concat(USER_TOKEN);
    axios
      .get(URL, { headers: { Authorization: AuthString } })
      .then((response) => {
        console.log(response.data);
        setEth2(response.data.USD);
      })
      .catch((error) => {
        console.log("error " + error);
      });
  }, []);
  const onClickHandler = (e) => {
    e.preventDefault();
    const price = { Bit1, Bit2, Eth1, Eth2 };
    axios
      .post("http://localhost:8000/api/Stock", price)
      .then((response) => {
        setStockId(response.data._id);
        console.log(stockId);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Stock Prices</h1>
      <button onClick={onClickHandler}>Get Prices</button>
      <button onClick={() => window.location.reload(false)}>
        Click to refresh prices!
      </button>
      <DisplayStocks stockId={stockId} />
      {/* <div>
        <p>Bitcoin Exchange 1:</p>
        <input type="text" name="price" defaultValue={Bit1}></input>
      </div>
      <div>
        <p>Bitcoin Exchange 2:</p>
        <input type="text" name="price" defaultValue={Bit2}></input>
      </div>
      <div>
        <p>Ethereum Exchange 1:</p>
        <input type="text" name="price" defaultValue={Eth1}></input>
      </div>
      <div>
        <p>Ethereum Exchange 2:</p>
        <input type="text" name="price" defaultValue={Eth2}></input>
      </div>
      <div>
        {Bit1 > Bit2 ? (
          <p>Buy Bitcoin on exchange 2.</p>
        ) : (
          <p>Buy Bitcoin on exchange 1.</p>
        )}
      </div>
      <div>
        {Bit1 > Bit2 ? (
          <p>Sell Bitcoin on exchange 1.</p>
        ) : (
          <p>Sell Bitcoin on exchange 2.</p>
        )}
      </div>
      <div>
        {Eth1 > Eth2 ? (
          <p>Buy Ethereum on exchange 2.</p>
        ) : (
          <p>Buy Ethereum on exchange 1.</p>
        )}
      </div>
      <div>
        {Eth1 > Eth2 ? (
          <p>Sell Ethereum on exchange 1.</p>
        ) : (
          <p>Sell Ethereum on exchange 2.</p>
        )}
      </div> */}
    </div>
  );
}

export default App;
