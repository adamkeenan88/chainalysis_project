import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [BCBit1, setBCBit1] = useState("");
  const [BCEth1, setBCEth1] = useState("");
  useEffect(() => {
    const URL = "https://api.blockchain.com/v3/exchange/tickers/BTC-USD";
    const USER_TOKEN = "82e5aad3-967e-417c-9c6f-82a897b3a603";
    const AuthString = "Bearer ".concat(USER_TOKEN);
    axios
      .get(URL, { headers: { Authorization: AuthString } })
      .then((response) => {
        console.log(response.data);
        setBCBit1(response.data.last_trade_price);
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
        setBCEth1(response.data.last_trade_price);
      })
      .catch((error) => {
        console.log("error " + error);
      });
  }, []);
  return (
    <div>
      <h1>Stock Prices</h1>
      <p>
        <button onClick={() => window.location.reload(false)}>
          Click to refresh!
        </button>
        <input type="text" name="price" value={BCBit1}></input>
      </p>
      <p>
        <button onClick={() => window.location.reload(false)}>
          Click to refresh!
        </button>
        <input type="text" name="price" value={BCEth1}></input>
      </p>
    </div>
  );
}

export default App;
