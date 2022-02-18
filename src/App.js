import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios';
import Coin from './components/Coin/Coin';

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
    <div className="coin-search">
    <h1 className="coin-text">Search for a coin</h1>
    <form>
      <input type="text" name="" id="" className="coin-search" placeholder='Search' />
    </form>
    <div className="coins cointainer" style={{display: "flex", flexDirection: "column" }}>
    { coinData.length > 0 ? coinData.map((coin)=> (
      <Coin 
        img={coin.image}
        name={coin.name}
        key={coin.id}
        symbol={coin.symbol}
        current_price={coin.current_price.toLocaleString('en-UK', { style: 'currency', currency: 'GBP' })}
        volume={coin.total_volume.toLocaleString()}
        price_change_24h={coin.price_change_24h.toLocaleString('en-uk', {style: "currency", currency: "GBP"})}
        />
    )) : ""}
    </div>
    
    
    </div>

    </div>
  );
}

export default App;
