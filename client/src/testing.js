useEffect(() => {
  // Setting our URL and APIKey needed for this specific GET request
  const BCURLBIT = "https://api.blockchain.com/v3/exchange/tickers/BTC-USD";
  const BCUSER_TOKEN = "82e5aad3-967e-417c-9c6f-82a897b3a603";
  const BCAuthString = "Bearer ".concat(USER_TOKEN);
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
  const BCURLETH = "https://api.blockchain.com/v3/exchange/tickers/ETH-USD";
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
  const CCURLBIT =
    "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD";
  const CCUSER_TOKEN =
    "5a04c723bfb95037e838e1a32471f370b94da79354fb820070e789999aa9d78f";
  const CCAuthString = "Bearer ".concat(CCUSER_TOKEN);
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
  const URL = "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD";
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

useEffect(() => {
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
  await axios
    .all([axiosrequest1, axiosrequest2, axiosrequest3, axiosrequest4])
    .then(
      axios.spread(function (res1, res2, res3, res4) {
        console.log(res1);
        console.log(res2);
        console.log(res3);
        console.log(res4);
      })
    )
    .catch((err) => {
      console.log(err);
    });
});
