import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import DisplayStocks from "./Components/recommendations";

function App() {
  // Setting up our state variables to hold out different crypto prices
  const [Bit1, setBit1] = useState("");
  const [Bit2, setBit2] = useState("");
  const [Eth1, setEth1] = useState("");
  const [Eth2, setEth2] = useState("");
  const [stockId, setStockId] = useState("");
  // First useEffect to call our first exchange Bitcoin price. This will call once on page load and then again when we refresh the page with the applicable button.
  useEffect(() => {
    // Setting our URL and APIKey
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
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Stock Prices</h1>
      <button onClick={() => window.location.reload(false)}>
        Click to Refresh Prices!
      </button>
      <div>
        <button onClick={onClickHandler}>Click to Save Prices!</button>
      </div>
      <DisplayStocks stockId={stockId} />
    </div>
  );
}

export default App;
