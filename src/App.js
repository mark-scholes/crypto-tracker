import { TableCell, Table, TableBody, TableContainer, TableHead, TableRow, Paper  } from '@mui/material';
import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios';
import Coin from './components/Coin/Coin';

function App() {

  const [coinData, setCoinData] = useState([])
  const [search, setSearch] = useState("");

  useEffect(() => {
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false';
    axios.get(url)
    .then(res => {
      setCoinData(res.data)
      filerCoins()
    }).catch(error => console.log(error));
  },[])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filerCoins = coinData.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="App">
    <div className="coin-search">
    <h1 className="coin-text">Search for a coin</h1>
    <form>
      <input type="text" name="" id="" className="coin-search" placeholder='Search' value={search} onChange={handleChange} />
    </form>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>crypto currency price data</caption>
        <TableHead>
        <TableRow>
          <TableCell>Logo</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Symbol</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Volume</TableCell>
          <TableCell>Price Change (£)</TableCell>
          <TableCell>Price Change (%)</TableCell>
        </TableRow>
    { filerCoins.map((coin)=> (
      <TableRow>
      <Coin 
        img={coin.image}
        name={coin.name}
        key={coin.id} 
        symbol={coin.symbol}
        current_price={coin.current_price.toLocaleString('en-UK', { style: 'currency', currency: 'GBP' })}
        volume={coin.total_volume.toLocaleString()}
        price_change_24h={coin.price_change_24h.toLocaleString('en-uk', {style: "currency", currency: "GBP"})}
        price_change_percentage_24h={coin.price_change_percentage_24h}
        />
        </TableRow>
    ))}    
      </TableHead>
      </Table>
    </TableContainer>
    
    
    </div>

    </div>
  );
}

export default App;
