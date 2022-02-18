import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios';

function App() {

  const [coinData, setCoinData] = useState([])
  useEffect(() => {
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false';
    axios.get(url)
    .then(res => {
      setCoinData(res.data)
    }).catch(error => console.log(error));
  },[])

  return (
    <div className="App">
      Crypto
    </div>
  );
}

export default App;
