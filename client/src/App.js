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
  // Page load useEffect call to get our crypto prices to fill our state variables
  useEffect(() => {
    // setting the URLs, Token, and Authorization constants for both exchange websites
    const BCURLBIT = "https://api.blockchain.com/v3/exchange/tickers/BTC-USD";
    const BCURLETH = "https://api.blockchain.com/v3/exchange/tickers/ETH-USD";
    const BCUSER_TOKEN = "82e5aad3-967e-417c-9c6f-82a897b3a603";
    const BCAuthString = "Bearer ".concat(BCUSER_TOKEN);
    const CCURLBIT =
      "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD";
    const CCURLETH =
      "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD";
    const CCUSER_TOKEN =
      "5a04c723bfb95037e838e1a32471f370b94da79354fb820070e789999aa9d78f";
    const CCAuthString = "Bearer ".concat(CCUSER_TOKEN);
    // Creating our 4 axios requests to pull in our prices
    const axiosrequest1 = axios.get(BCURLBIT, {
      headers: { Authorization: BCAuthString },
    });
    const axiosrequest2 = axios.get(BCURLETH, {
      headers: { Authorization: BCAuthString },
    });
    const axiosrequest3 = axios.get(CCURLBIT, {
      headers: { Authorization: CCAuthString },
    });
    const axiosrequest4 = axios.get(CCURLETH, {
      headers: { Authorization: CCAuthString },
    });
    // Running all axios requests at once, then parsing the results to grab the price we want and set it to our state variables
    Promise.all([axiosrequest1, axiosrequest2, axiosrequest3, axiosrequest4])
      .then(function (results) {
        console.log(results[0]);
        setBit1(results[0].data.last_trade_price);
        console.log(results[1]);
        setEth1(results[1].data.last_trade_price);
        console.log(results[2]);
        setBit2(results[2].data.USD);
        console.log(results[3]);
        setEth2(results[3].data.USD);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // Second useEffect call with the parameter to run when the last state variable is set.  This way it won't run until all variable have been set.
  useEffect(() => {
    const price = { Bit1, Eth1, Bit2, Eth2 };
    axios
      .post("http://localhost:8000/api/Stock", price)
      .then((response) => {
        setStockId(response.data._id);
        // return the stockId so we can use it in the recommendation component and pull the most recent rates from our DB
        console.log(stockId);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [Eth2]);
  return (
    <div>
      <h1>Stock Prices</h1>
      {/* Button to force a page refresh so our useEffect calls reset and fill in data with newest prices received */}
      <button onClick={() => window.location.reload(false)}>
        Click to Refresh Prices!
      </button>
      {/* Calling our component to display and analyze our different stock prices */}
      <div>
        <DisplayStocks stockId={stockId} />
      </div>
    </div>
  );
}

export default App;
